"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { set } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
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
        console.log("[ProductCard_getUser]", err);
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
      console.log("[ProductCard_handleLike]", err);
    }
  };

  return (
    <div>
      <Link
        href={`/products/${product._id}`}
        className="w-[220px] flex flex-col gap-2"
      >
        <Image
          src={product.media[0]}
          alt={product.title}
          width={250}
          height={300}
          className="h-[250px] rounded-lg object-cover cursor-pointer"
        />
        <div>
          <p className="text-base-bold">{product.title}</p>
          <p className="text-small-medium text-grey-2">{product.category}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-bold">${product.price}</p>
          <button onClick={handleLike}>
            <Heart fill={`${isLiked ? "red" : "white"}`} />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
