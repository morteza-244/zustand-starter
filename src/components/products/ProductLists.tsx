import { PRODUCTS_LIST } from "@/lib/mockData";
import ProductCard from "./ProductCard";

const ProductLists = () => {
  return (
    <section className="space-y-3 mt-5">
      <h1 className="text-[20px] font-semibold">Products: </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {PRODUCTS_LIST.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductLists;
