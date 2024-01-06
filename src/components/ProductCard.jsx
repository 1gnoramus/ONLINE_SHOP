import cart from "../assets/shopping_bag.png";
import fav from "../assets/favorite_border.png";
import star from "../assets/star.png";

export function ProductCard({ product }) {
  return (
    <div className="product_card">
      <img className="product_image" src={product.image} alt="" />
      <div className="product_info_top">
        <div className="product_top_text">
          <h4>{product.price} $</h4>
          <p>{product.title}</p>
        </div>
        <div className="product_top_icons">
          <img src={cart} alt="" />
          <img src={fav} alt="" />
        </div>
      </div>
      <div className="product_info_bot">
        <button className="about_btn">Подробнее</button>
        <div className="rating_cont">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
    </div>
  );
}
