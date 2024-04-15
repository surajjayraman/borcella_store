"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  
  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <button onClick={handleLike}>
          <Heart fill={`${isLiked ? "red" : "white"}`} />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
