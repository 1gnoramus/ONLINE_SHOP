import clear from "../assets/clear.png";

export function CartListPiece() {
  return (
    <div className="cart_product_piece">
      <img
        className="cart_product_img"
        src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        alt=""
      />
      <h3>Блузка черная кожаная</h3>
      <p>3 шт</p>
      <p>50.36 р.</p>
      <p>151.06 р.</p>
      <img className="clear_icon" src={clear} alt="" />
    </div>
  );
}
