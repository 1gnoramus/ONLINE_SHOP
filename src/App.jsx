import "./App.css";
import { ErrorComponent } from "./components/ErrorComponent";
import { LoadingComponent } from "./components/LoadingComponent";
import { MainContent } from "./components/MainContent";
import { NavigationComponent } from "./components/NavigationComponent";
import { useGetProductsQuery } from "./store/api";

function App() {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>

      {isLoading ? (
        <LoadingComponent></LoadingComponent>
      ) : error ? (
        <ErrorComponent></ErrorComponent>
      ) : (
        <MainContent></MainContent>
      )}
    </div>
  );
}

export default App;
