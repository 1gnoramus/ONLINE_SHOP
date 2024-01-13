import { useState } from "react";
import { useDispatch } from "react-redux";
import clear from "../assets/clear.png";
import { addToTotal, removeFromCart, removeFromTotal } from "../store/reducers";

export function CartListPiece({ productInfo }) {
  let [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="cart_product_piece">
      <img className="cart_product_img" src={productInfo.image} alt="" />
      <h3>{productInfo.title}</h3>
      <button
        onClick={() => {
          setItemCount((itemCount -= 1));
          dispatch(removeFromTotal(productInfo.price))
        }}
        style={{ padding: "5px 10px" }}
      >
        -
      </button>
      <p>{itemCount} шт</p>
      <button
        onClick={() => {
          setItemCount((itemCount += 1));
          dispatch(addToTotal(productInfo.price))
        }}
        style={{ padding: "5px 10px" }}
      >
        +
      </button>

      <p>{productInfo.price} $</p>
      <p>{itemCount*productInfo.price.toFixed(2)} $</p>
      <img
        className="clear_icon"
        onClick={() => {
          dispatch(removeFromCart(productInfo));
        }}
        src={clear}
        alt=""
      />
    </div>
  );
}
