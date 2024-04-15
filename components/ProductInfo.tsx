"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
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
        setIsLiked(data.wishlist.includes(productInfo._id));
        setLoading(false);
      } catch (err) {
        console.log("[ProductCard_getUser]", err);
      }
    };
    if (user) {
      getUser();
    }
  }, [user, productInfo._id]);

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
          body: JSON.stringify({ productId: productInfo._id }),
        });
        const updatedUser = await res.json();
        setSignedInUser(updatedUser);
        setIsLiked(updatedUser.wishlist.includes(productInfo._id));
        setLoading(false);
      }
    } catch (err) {
      console.log("[ProductCard_handleLike]", err);
    }
  };
  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <Heart />
      </div>
    </div>
  );
};

export default ProductInfo;
