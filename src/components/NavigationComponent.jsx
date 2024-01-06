import menu from "../assets/menu.png";
import search from "../assets/search.png";
import profile from "../assets/person_outline.png";
import cart from "../assets/shopping_bag.png";
import fav from "../assets/favorite_border.png";

export function NavigationComponent() {
  return (
    <nav>
      <div className="nav_top">
        <img src={menu} alt="" />
        <div className="nav_right">
          <div className="nav_search_cont">
            <img src={search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav_logo_cont">
            <img src={fav} alt="" />
            <img src={profile} alt="" />
            <img src={cart} alt="" />

          </div>
        </div>
      </div>
      <div className="nav_bot">
        <p>Главная/Мужская одежда</p>
      </div>
    </nav>
  );
}
