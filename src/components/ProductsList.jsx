import { useGetProductsQuery } from "../store/api";
import { ProductCard } from "./ProductCard";

export function ProductsList() {

  const { data } = useGetProductsQuery();
  return (
    <div className="products_list">
      {data.map((product) => {
        return <ProductCard product={product}></ProductCard>;
      })}
    </div>
  );
}
