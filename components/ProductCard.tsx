import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.media[0]}
          alt={product.title}
          width={250}
          height={300}
        />
      </Link>
    </div>
  );
};

export default ProductCard;
