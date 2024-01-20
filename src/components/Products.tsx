import { products } from "../data/data";
import Product from "./Product";

function Products() {
  return (
    <div className="mt-24">
      <div className="container  mx-auto px-[15px] ">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-2xl">Products</h2>
          <p className="text-gray-500">
            <span className="font-bold">New</span> Featured Top Sellers
          </p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
