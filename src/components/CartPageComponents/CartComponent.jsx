import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartListPiece } from "./CartListPieceComponent";
import { EmptyComponent } from "../SituationalComponents/EmptyComponent";
import { PaymentComponent } from "./PaymentComponent";
export function CartComponent() {
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="cart_component">
      <h1 className="component_title">Product Cart</h1>
      <div className="cart_content">
        <div className="cart_info">
          <tbody>
            <tr>
              <td>
                <p>Изображение</p>
              </td>
              <td>
                <p>Наименование</p>
              </td>
              <td>
                <p>Количество</p>
              </td>
              <td>
                <p>Цена</p>
              </td>
              <td>
                <p>Стоимость</p>
              </td>
              <td></td>
            </tr>
            {cartState.cart == [] ? (
              <h1>Корзина пуста</h1>
            ) : (
              <div className="cart_product_list">
                {cartState.cart.length == 0 ? (
                  <EmptyComponent text="Корзины"></EmptyComponent>
                ) : (
                  cartState.cart.map((productInfo) => {
                    return (
                      <CartListPiece
                        key={productInfo.id}
                        productInfo={productInfo}
                      ></CartListPiece>
                    );
                  })
                )}
              </div>
            )}
          </tbody>

          <div className="cart_info_bot">
            <button
              onClick={() => {
                console.log(cartState.cart);
              }}
            >
              <Link to="/">Продолжить покупки</Link>
            </button>
            <div className="cart_priceInfo_bot">
              <h2>Итого</h2>
              <p>{cartState.total.toFixed(2)} $</p>
            </div>
          </div>
        </div>
        <PaymentComponent total={cartState.total.toFixed(2)}></PaymentComponent>
      </div>
    </div>
  );
}
