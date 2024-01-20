import { useState } from "react";
import { useDispatch } from "react-redux";
import clear from "../../assets/clear.png";
import { addToTotal, removeFromCart, removeFromTotal } from "../../store/reducers";

export function CartListPiece({ productInfo }) {
  let [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <img className="cart_product_img" src={productInfo.image} alt="" />
      </td>
      <td>
        <h3>{productInfo.title}</h3>
      </td>
      <td className="cart_amount_info">
        <button
          onClick={() => {
            if (itemCount > 0) {
              setItemCount((itemCount -= 1));
              dispatch(removeFromTotal(productInfo.price));
            }
          }}
          style={{ padding: "5px 10px" }}
        >
          -
        </button>
        <p>{itemCount} шт</p>
        <button
          onClick={() => {
            setItemCount((itemCount += 1));
            dispatch(addToTotal(productInfo.price));
          }}
          style={{ padding: "5px 10px" }}
        >
          +
        </button>
      </td>
      <td>
        <p>{productInfo.price} $</p>
      </td>
      <td>
        <p>{itemCount * productInfo.price.toFixed(2)} $</p>
      </td>
      <td>
        <img
          className="clear_icon"
          onClick={() => {
            dispatch(removeFromCart(productInfo));
            dispatch(removeFromTotal(productInfo.price * itemCount));
          }}
          src={clear}
          alt=""
        />
      </td>
    </tr>
  );
}
