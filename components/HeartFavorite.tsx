"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const HeartFavorite = ({ product }: { product: ProductType }) => {
  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/users");
        const data = await res.json();
        setSignedInUser(data);
        setIsLiked(data.wishlist.includes(product._id));
        setLoading(false);
      } catch (err) {
        console.log("[HeartFavorite_getUser]", err);
      }
    };
    if (user) {
      getUser();
    }
  }, [user, product._id]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (!signedInUser) {
        router.push("/sign-in");
        return;
      } else {
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
        setSignedInUser(updatedUser);
        setIsLiked(updatedUser.wishlist.includes(product._id));
        setLoading(false);
      }
    } catch (err) {
      console.log("[HeartFavorite_handleLike]", err);
    }
  };
  return (
    <div>
      <button onClick={handleLike}>
        <Heart fill={`${isLiked ? "red" : "white"}`} />
      </button>
    </div>
  );
};

export default HeartFavorite;
