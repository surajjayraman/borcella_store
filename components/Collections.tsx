import { getCollections } from "@/lib/actions";

const Collections = async () => {
  const collections = await getCollections();
  console.log(`getCollections: ${collections}`);
  return (
    <div>
      <p className="text-heading1-bold">Collections</p>
      <div> </div>
    </div>
  );
};

export default Collections;
