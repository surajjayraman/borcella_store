import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
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
          <button>
            <HeartIcon />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
