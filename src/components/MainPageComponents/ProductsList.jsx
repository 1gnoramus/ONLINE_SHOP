import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function ProductsList({ content }) {
  const sortedState = useSelector((state) => state.sort);
  return (
    <div className="products_list">
      {sortedState.sortedContent.length == 0
        ? content.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })
        : sortedState.sortedContent.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
    </div>
  );
}
