import { getProductDetails } from "@/lib/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = getProductDetails(params.productId);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
