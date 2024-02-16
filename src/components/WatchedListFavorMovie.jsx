import { MdOutlinePhoto } from "react-icons/md";

export function WatchedListFavorMovie({ movie, handleClickDeleteFavorite, imgErro }) {
  return (
    <>
      <li key={movie.imdbID}>
        
        {movie.Poster !== 'N/A' && !imgErro.includes(movie.imdbID)
            ? <img src={movie.Poster}
              alt={`${movie.Title} poster`}
            />
            : <MdOutlinePhoto style={{ fontSize: '50px' }} />}
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runTime ? movie.runTime : 0 }</span>
          </p>
          <button className="btn-delete" 
          onClick={() => handleClickDeleteFavorite(movie.imdbID)}
          >X</button>
        </div>
      </li>
    </>
  );
}
