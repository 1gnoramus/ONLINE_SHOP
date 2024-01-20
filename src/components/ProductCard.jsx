import cart from "../assets/shopping_bag.png";
import cart2 from "../assets/shopping_bag_filled.png";
import fav from "../assets/favorite_border.png";
import fav2 from "../assets/favorite.png";
import star from "../assets/star.png";
import { RatingComponent } from "./RatingComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFav,
  removeFromCart,
  removeFromFav,
} from "../store/reducers";
import { useState } from "react";
import { AboutComponent } from "./AboutComponent";

export function ProductCard({ product }) {
  const cartState = useSelector((state) => state.cart);
  const favState = useSelector((state) => state.fav);
  let isInCart = cartState.cart.some((item) => item.id == product.id);
  let isInFav = favState.fav.some((item) => item.id == product.id);
  const dispatch = useDispatch();

  let [isAboutActive, setIsAboutActive] = useState(false);

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
              console.log(isInCart);
              dispatch(isInCart ? removeFromCart(product) : addToCart(product));
            }}
            alt=""
          />
          <img
            src={isInFav ? fav2 : fav}
            onClick={() => {
              console.log(isInFav);
              dispatch(isInFav ? removeFromFav(product) : addToFav(product));
            }}
            alt=""
          />
        </div>
      </div>
      <div className="product_info_bot">
        <button
          className="about_btn"
          onClick={() => {
            setIsAboutActive(!isAboutActive);
          }}
        >
          {product.rating.count} 
        </button>
        <RatingComponent rating={product.rating.rate}></RatingComponent>
      </div>
      {isAboutActive ? (
        <div className="blur">
          <AboutComponent
            isAboutActive={isAboutActive}
            setIsAboutActive={setIsAboutActive}
            product={product}
          ></AboutComponent>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
