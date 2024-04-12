import { getProducts } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div>
          {products.map((product: ProductType) => (
            <div key={product._id} className="flex flex-col items-center gap-5">
              <Image
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-cover"
              />
              <p className="text-body-bold">{product.title}</p>
              <p className="text-body">{product.description}</p>
              <p className="text-body-bold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
