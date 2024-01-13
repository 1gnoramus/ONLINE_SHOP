import menu from "../assets/menu.png";
import search from "../assets/search.png";
import profile from "../assets/person_outline.png";
import cart from "../assets/shopping_bag.png";
import fav from "../assets/favorite_border.png";
import { SideBar } from "./Sidebar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function NavigationComponent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    // setIsMenuOpen(isMenuOpen == true ? false : true);
  }
  return (
    <nav>
      <div className="nav_top">
        <img onClick={toggleMenu} src={menu} alt="" />
        <div className="nav_right">
          <div className="nav_search_cont">
            <img src={search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav_logo_cont">
            <Link to="/favorite">
              <img src={fav} alt="" />
            </Link>
            <img src={profile} alt="" />
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <SideBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></SideBar>
      <div className="nav_bot">
        <Link to="/">
          <span>HOME</span>
        </Link>
        <Link to={location.pathname}>
          <span>{location.pathname.toUpperCase()}</span>
        </Link>
      </div>
    </nav>
  );
}
