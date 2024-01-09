import { ProductsList } from "./ProductsList";
import { SortAsideComponent } from "./SortAsideComponent";
import { SortTopComponent } from "./SortTopComponent";
import {
  useGetProductsByCategoriesQuery,
  useGetProductsQuery,
} from "../store/api";
export function MainContent(props) {
  const { data, isLoading, error } =
    props.theme == "/"
      ? useGetProductsQuery()
      : useGetProductsByCategoriesQuery(props.theme);
  return (
    <div className="main_cont">
      <h1>{props.theme}</h1>
      <SortTopComponent></SortTopComponent>
      <div className="main_cont_bot">
        <SortAsideComponent></SortAsideComponent>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <ProductsList content={data}></ProductsList>
        )}
      </div>
    </div>
  );
}
