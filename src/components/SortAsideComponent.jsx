import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToSortedContent } from "../store/reducers";

export function SortAsideComponent({ content }) {
  const dispatch = useDispatch();
  let [priceRange, setPriceRange] = useState(0);
  const sortedByPrice = [...content].filter((item) => item.price <= priceRange);

  let [countRange, setCountRange] = useState(0);
  const sortedByCount = [...content].filter(
    (item) => item.rating.count <= countRange
  );
  let [minPrice, setMinPrice] = useState(0);
  let [maxPrice, setMaxPrice] = useState(1001);
  const sortedByDiap = [...content].filter(
    (item) => item.price <= maxPrice && item.price >= minPrice
  );

  return (
    <div className="sort_cont_aside">
      <div className="price_range">
        <h4>Цена</h4>
        <input
          min={0}
          max={1001}
          value={priceRange}
          onChange={(e) => {
            setPriceRange(e.target.value);
            dispatch(addToSortedContent(sortedByPrice));
          }}
          type="range"
        />

        <p>{priceRange}</p>
      </div>
      <div className="count_range">
        <h4>Количество</h4>
        <input
          min={0}
          max={700}
          value={countRange}
          type="range"
          onChange={(e) => {
            setCountRange(e.target.value);
            dispatch(addToSortedContent(sortedByCount));
          }}
        />
        <p>{countRange}</p>
      </div>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => {
          setMinPrice(e.target.value);
        }}
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => {
          setMaxPrice(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addToSortedContent(sortedByDiap));
          
        }}
      >
        Sort
      </button>
    </div>
  );
}
