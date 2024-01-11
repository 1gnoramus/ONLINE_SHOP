import { ProductsList } from "./ProductsList";
import { SortAsideComponent } from "./SortAsideComponent";
import { SortTopComponent } from "./SortTopComponent";
import {
  useGetProductsByCategoriesQuery,
  useGetProductsQuery,
} from "../store/api";
import { LoadingComponent } from "./LoadingComponent";
import { ErrorComponent } from "./ErrorComponent";

export function MainContent(props) {
  const { data, isLoading, error } =
    props.theme == "popular"
      ? useGetProductsQuery() //25x{}
      : useGetProductsByCategoriesQuery(props.theme); //4x{}
  return isLoading ? (
    <LoadingComponent></LoadingComponent>
  ) : error ? (
    <ErrorComponent></ErrorComponent>
  ) : (
    <div className="main_cont">
      <h1>{props.theme.toUpperCase()}</h1>
      <SortTopComponent></SortTopComponent>
      <div className="main_cont_bot">
        <SortAsideComponent></SortAsideComponent>
        <ProductsList content={data}></ProductsList>
      </div>
    </div>
  );
}
