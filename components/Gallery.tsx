import Image from "next/image";
import React from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={productMedia[0]}
        width={500}
        height={500}
        alt="product"
        className="w-96
        h-96 rounded-lg shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={200}
            height={200}
            alt="product"
            className="w-20 h-20 rounded-lg object-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
