import { RatingComponent } from "./RatingComponent";

import cart from "../assets/shopping_bag.png";
import fav from "../assets/favorite.png";
export function FavoriteCard() {
  return (
    <div className="favorite_card">
      <img
        className="fav_img"
        src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        alt=""
      />
      <div className="fav_card_right">
        <h3>Блузка черная кожаная</h3>
        <p>Женская одежда</p>
        <RatingComponent></RatingComponent>
        <div className="fav_card_bot">
          <h2>50,36 р.</h2>
          <div className="fav_bot_icons">
            <img src={cart} alt="" />
            <img src={fav} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
