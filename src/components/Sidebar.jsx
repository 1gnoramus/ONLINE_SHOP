import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import { useGetCategoriesQuery } from "../store/api";

export function SideBar(props) {
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <div className={props.isMenuOpen ? "sidebar open" : "sidebar"}>
      <img onClick={props.toggleMenu} src={menu} alt="" />
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          data.map((category) => {
            return (
              <li>
                <Link to={category}>
                  <p>{category.toUpperCase()}</p>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
