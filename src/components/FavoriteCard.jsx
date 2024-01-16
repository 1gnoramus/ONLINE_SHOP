import { RatingComponent } from "./RatingComponent";
import cart from "../assets/shopping_bag.png";
import cart2 from "../assets/shopping_bag_filled.png";
import fav from "../assets/favorite.png";
import fav2 from "../assets/favorite.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeFromFav } from "../store/reducers";

export function FavoriteCard({ productInfo }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const favState = useSelector((state) => state.fav);

  let isInFav = favState.fav.some((item) => item.id == productInfo.id);
  let isInCart = cartState.cart.some((item) => item.id == productInfo.id);
  return (
    <div className="favorite_card">
      <img className="fav_img" src={productInfo.image} alt="" />
      <div className="fav_card_right">
        <h3>{productInfo.title}</h3>
        <p>{productInfo.category.toUpperCase()}</p>
        <RatingComponent></RatingComponent>
        <div className="fav_card_bot">
          <h2>{productInfo.price} $</h2>
          <div className="fav_bot_icons">
            <img
              src={isInCart ? cart2 : cart}
              onClick={() => {
                dispatch(
                  isInCart
                    ? removeFromCart(productInfo)
                    : addToCart(productInfo)
                );
              }}
              alt=""
            />
            <img
              src={fav}
              onClick={() => {
                dispatch(removeFromFav(productInfo));
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
