import cart from "../assets/shopping_bag.png";
import cart2 from "../assets/shopping_bag_filled.png";
import fav from "../assets/favorite_border.png";
import star from "../assets/star.png";
import { RatingComponent } from "./RatingComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFav, removeFromCart } from "../store/reducers";
import { useState } from "react";

export function ProductCard({ product }) {
  // let [isInCart, setIsInCart] = useState(false);
  const cartState = useSelector((state) => state.cart);
  let isInCart = cartState.cart.some((item) => item.id == product.id);
  const dispatch = useDispatch();

  return (
    <div className="product_card">
      <img className="product_image" src={product.image} alt="" />
      <div className="product_info_top">
        <div className="product_top_text">
          <h4>{product.price} $</h4>
          <p>{product.title}</p>
        </div>
        <div className="product_top_icons">
          <img
            src={isInCart ? cart2 : cart}
            onClick={() => {
              // toggleState();
              console.log(isInCart);
              dispatch(isInCart ? removeFromCart(product) : addToCart(product));
            }}
            alt=""
          />
          <img
            src={fav}
            onClick={() => {
              dispatch(addToFav(product));
            }}
            alt=""
          />
        </div>
      </div>
      <div className="product_info_bot">
        <button className="about_btn">Подробнее</button>
        <RatingComponent></RatingComponent>
      </div>
    </div>
  );
}
