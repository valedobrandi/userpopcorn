import { MdOutlinePhoto } from "react-icons/md";


export function SearchedMovie({ movies, handleClickSearchMovie, imgErro, handleError }) {


  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <li key={movie.imdbID}
          style={{ cursor: 'pointer' }}
          onClick={() => handleClickSearchMovie(movie.imdbID)}>
          {movie.Poster !== 'N/A' && !imgErro.includes(movie.imdbID)
            ? <img src={movie.Poster}
              alt={`${movie.Title} poster`}
              onError={(event) => handleError(event, movie.imdbID)}
            />
            : <MdOutlinePhoto style={{ fontSize: '50px' }} />}
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year.slice(0, 4)}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>

  );
}
