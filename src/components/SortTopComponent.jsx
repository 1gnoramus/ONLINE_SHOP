import { useDispatch } from "react-redux";
import { addToSortedContent } from "../store/reducers";

export function SortTopComponent({ content }) {
  const dispatch = useDispatch();
  const sortedArrayAsc = [...content].sort((a, b) => a.price - b.price);
  const sortedArrayDesc = [...content].sort((a, b) => b.price - a.price);
  const sortedByRating = [...content].sort(
    (a, b) => b.rating.rate - a.rating.rate
  );
  const sortedByCount = [...content].sort(
    (a, b) => b.rating.count - a.rating.count
  );
  return (
    <div className="sort_cont_top">
      <p>Сортировать по:</p>
      <div className="sort_cont_top_options">
        <p
          onClick={() => {
            dispatch(addToSortedContent(sortedArrayAsc));
          }}
        >
          Возрастанию цены
        </p>
        <p
          onClick={() => {
            dispatch(addToSortedContent(sortedArrayDesc));
          }}
        >
          Убыванию цены
        </p>
        <p
          onClick={() => {
            dispatch(addToSortedContent(sortedByRating));
          }}
        >
          Рейтингу
        </p>
        <p
          onClick={() => {
            dispatch(addToSortedContent(sortedByCount));
          }}
        >
          Количеству
        </p>
      </div>
    </div>
  );
}
