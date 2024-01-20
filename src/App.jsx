import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorComponent } from "./components/SituationalComponents/ErrorComponent";
import { FavoriteComponent } from "./components/FavoritePageComponents/FavoriteComponent";
import { CartComponent } from "./components/CartPageComponents/CartComponent";
import { LoadingComponent } from "./components/SituationalComponents/LoadingComponent";
import { MainContent } from "./components/MainPageComponents/MainContent";
import { NavigationComponent } from "./components/SituationalComponents/NavigationComponent";
import { useGetCategoriesQuery, useGetProductsQuery } from "./store/api";

function App() {
  const {
    data: categoriesdata,
    isLoading: categoriesisLoading,
    error: categorieserror,
  } = useGetCategoriesQuery();

  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      {categoriesisLoading ? (
        <LoadingComponent></LoadingComponent>
      ) : categorieserror ? (
        <ErrorComponent></ErrorComponent>
      ) : (
        <Routes>
          <Route path="/cart" element={<CartComponent></CartComponent>}></Route>
          <Route
            path="/favorite"
            element={<FavoriteComponent></FavoriteComponent>}
          ></Route>
          <Route
            path="/"
            element={<MainContent theme="popular"></MainContent>}
          ></Route>

          {categoriesdata.map((category) => {
            return (
              <Route
                key={category}
                path={`/${category}`}
                element={<MainContent theme={category}></MainContent>}
              ></Route>
            );
          })}
        </Routes>
      )}
    </div>
  );
}

export default App;
