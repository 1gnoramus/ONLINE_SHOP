import { ProductsList } from "./ProductsList";
import { SortAsideComponent } from "./SortAsideComponent";
import { SortTopComponent } from "./SortTopComponent";

export function MainContent() {
  return (
    <div className="main_cont">
      <h1>Популярное</h1>
      <SortTopComponent></SortTopComponent>
      <div className="main_cont_bot">
        <SortAsideComponent></SortAsideComponent>
        <ProductsList></ProductsList>
      </div>
    </div>
  );
}
