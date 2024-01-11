import { CartListPiece } from "./CartListPieceComponent";
import { PaymentComponent } from "./PaymentComponent";
export function CartComponent() {
  return (
    <div className="cart_component">
      <h1>Product Cart</h1>
      <div className="cart_content">
        <div className="cart_info">
          <div className="table_titles">
            <p className="title_by_name">Наименование</p>
            <p className="title_by_quantity">Количество</p>
            <p className="title_by_price">Цена</p>
            <p className="title_by_total">Стоимость</p>
          </div>
          <div className="cart_product_list">
            <CartListPiece></CartListPiece>
          </div>
          <div className="cart_info_bot">
            <button>Продолжить покупки</button>
            <div className="cart_priceInfo_bot">
              <h2>Итого</h2>
              <p>174.41 р.</p>
            </div>
          </div>
        </div>
        <PaymentComponent></PaymentComponent>
      </div>
    </div>
  );
}
