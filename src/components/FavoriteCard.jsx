import { RatingComponent } from "./RatingComponent";

import cart from "../assets/shopping_bag.png";
import fav from "../assets/favorite.png";
export function FavoriteCard({productInfo}) {
  return (
    <div className="favorite_card">
      <img
        className="fav_img"
        src={productInfo.image}
        alt=""
      />
      <div className="fav_card_right">
        <h3>{productInfo.title}</h3>
        <p>{productInfo.category.toUpperCase()}</p>
        <RatingComponent></RatingComponent>
        <div className="fav_card_bot">
          <h2>{productInfo.price} $</h2>
          <div className="fav_bot_icons">
            <img src={cart} alt="" />
            <img src={fav} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
