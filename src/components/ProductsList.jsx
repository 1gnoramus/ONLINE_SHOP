
import { ProductCard } from "./ProductCard";

export function ProductsList(props) {
  return (
    <div className="products_list">
      {props.content.map((product) => {
        return <ProductCard product={product}></ProductCard>;
      })}
    </div>
  );
}
