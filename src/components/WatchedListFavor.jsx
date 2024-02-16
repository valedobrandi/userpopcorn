import { WatchedListFavorMovie } from "./WatchedListFavorMovie";

export function WatchedListFavor({ watched, handleClickDeleteFavorite, imgErro }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedListFavorMovie movie={movie} key={movie.imdbID}
         handleClickDeleteFavorite={handleClickDeleteFavorite}
         imgErro={imgErro} />
      ))}
    </ul>
  );
}
