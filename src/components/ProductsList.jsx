
import { ProductCard } from "./ProductCard";

export function ProductsList({content}) {
  return (
    <div className="products_list">
      {content.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
}
