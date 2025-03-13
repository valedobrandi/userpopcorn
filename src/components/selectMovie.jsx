const TOKEN = import.meta.env.VITE_API_MOVIE
import { useEffect, useState } from "react";
import StarRating from "../components/HoverStar/hoverStar";
import { Loading } from "./loading";
import { MdOutlinePhoto } from "react-icons/md";


export default function SeletcMovie({
  getId,
  setGetId,
  handleClickAddFavorite,
  star,
  imgErro
}) {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);


  useEffect(() => {
    setIsLoading(true);
    async function getMovieDetail() {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${TOKEN}&i=${getId}`
      );
      const data = await response.json();
      setMovieDetail(data);
      setIsLoading(false);
    }
    getMovieDetail();
  
      
   
  }, [getId]);

  const {
    Genre,
    Poster,
    Title,
    Released,
    Runtime,
    imdbRating,
    Plot,
    Actors,
    Director,
    imdbID,
  } = movieDetail;


useEffect(() => { 
  if (Title) document.title = `Movie | ${Title}`
  return () => document.title = 'usePopcorn'
}, [Title])

  return isLoading ? (
    <Loading text={"Loading..."} />
  ) : (
    <div className="details">
      <header>
        <button className="btn-back" onClick={() => setGetId(null)}>
          X
        </button>
        {Poster !== 'N/A' && !imgErro.includes(imdbID)
            ? <img src={Poster}
              alt={`${Title} poster`}
              className=""
            />
            : <MdOutlinePhoto style={{ fontSize: '120px' }} />}
        <div className="details-overview">
          <h2>{Title}</h2>
          <p>
            {Released} &bull; {Runtime}
          </p>
          <p>{Genre}</p>
          <p><span>⭐️</span> {imdbRating}</p>
        </div>
      </header>
      <section>
        {star === 0 ? (
        <StarRating
          maxRating={10}
          size={25}
          onSetRating={setUserRating}
        />)
        : <p>Already Rated! {star} <span>⭐️</span>  </p> }
        {userRating > 0 && star === 0 && (
          <button
            className="btn-add"
            onClick={() =>
              handleClickAddFavorite(
                imdbID,
                Poster,
                imdbRating,
                userRating,
                Runtime,
                Title
              )
            }
          >
            + Add to list
          </button>
        )}
        <p>
          <em>{Plot}</em>
        </p>
        <p>Starring {Actors}</p>
        <p>Directed by {Director}</p>
      </section>
    </div>
  );
}
