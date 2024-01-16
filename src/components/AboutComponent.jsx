import { useDispatch, useSelector } from "react-redux";
import clear from "../assets/clear.png";
import { addToCart, removeFromCart } from "../store/reducers";

export function AboutComponent({ setIsAboutActive, product }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  let isInCart = cartState.cart.some((item) => item.id == product.id);
  return (
    <div className="about_component">
      <img src={product.image} alt="" />
      <div className="about_info">
        <img
          onClick={() => {
            setIsAboutActive(false);
          }}
          src={clear}
          alt=""
        />
        <div>
          <p>Наименование:</p>
          <h1>{product.title}</h1>
        </div>
        <div>
          <p>Категория:</p>
          <h2>{product.category.toUpperCase()}</h2>
        </div>
        <div>
          <p>Описание товара:</p>
          <h4>{product.description}</h4>
        </div>
        <div className="about_info_bot">
          <div className="about_info_price_cont">
            <p>Цена товара:</p>
            <h2>{product.price} $</h2>
          </div>
          <button
            onClick={() => {
              dispatch(isInCart ? removeFromCart(product) : addToCart(product));
            }}
          >
            {isInCart ? "Удалить из корзины" : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </div>
  );
}
