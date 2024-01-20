import star from "../../assets/star.png";

export function RatingComponent({ rating }) {

  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={star} alt="" />);
  }

  return <div className="rating_cont">{stars}</div>;
}
