import { ProductsList } from "./ProductsList";
import { SortAsideComponent } from "../SituationalComponents/SortAsideComponent";
import { SortTopComponent } from "../SituationalComponents/SortTopComponent";
import {
  useGetProductsByCategoriesQuery,
  useGetProductsQuery,
} from "../../store/api";

import { LoadingComponent } from "../SituationalComponents/LoadingComponent";
import { ErrorComponent } from "../SituationalComponents/ErrorComponent";

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
      <h1 className="component_title">{props.theme.toUpperCase()}</h1>

      <div className="main_cont_grid">
        <SortTopComponent content={data}></SortTopComponent>
        <SortAsideComponent content={data}></SortAsideComponent>
        <ProductsList content={data}></ProductsList>
      </div>
    </div>
  );
}
