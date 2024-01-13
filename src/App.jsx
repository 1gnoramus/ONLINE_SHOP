import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorComponent } from "./components/ErrorComponent";
import { FavoriteComponent } from "./components/FavoriteComponent";
import { CartComponent } from "./components/CartComponent";
import { LoadingComponent } from "./components/LoadingComponent";
import { MainContent } from "./components/MainContent";
import { NavigationComponent } from "./components/NavigationComponent";
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
