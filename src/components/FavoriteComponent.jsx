import { useSelector } from "react-redux";
import { EmptyComponent } from "./EmptyComponent";
import { FavoriteCard } from "./FavoriteCard";

export function FavoriteComponent() {
  const favState = useSelector((state) => state.fav);
  console.log(favState.fav);
  return (
    <div className="favorite_component">
      <h1>FAVORITE</h1>
      <div className="favorite_list">
        {favState.fav.length == 0 ? (
          <EmptyComponent text={'Избранных'}></EmptyComponent>
        ) : (
          favState.fav.map((item) => {
            return (
              <FavoriteCard key={item.id} productInfo={item}></FavoriteCard>
            );
          })
        )}
      </div>
    </div>
  );
}
