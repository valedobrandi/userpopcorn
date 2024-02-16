
import { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import ButtonToggle from "./components/ButtonToggle";
import BoxList from "./components/BoxList";
import { SearchedMovie } from "./components/SearchedMovie";
import { WatchedListFavor } from "./components/WatchedListFavor";
import { WatchedListSummary } from "./components/WatchedListSummary";
import { Loading } from "./components/loading";
import { Search } from "./components/Search";
import SeletcMovie from "./components/selectMovie";
import { useMovie } from "./utils/useMovie";
import { useLocalStorage } from "./utils/useLocalStorage";

export default function App() {
  
  const [isOpen1, setIsOpen1] = useState(true);
  
  const [isOpen2, setIsOpen2] = useState(true);
  
  const [getId, setGetId] = useState(null);

  const [star, setStar] = useState(0);

  const [query, setQuery] = useState("");

  const { movies, isLoading, errorMessage } = useMovie(query)

  const {watched, setWatched} = useLocalStorage([], "watched")

  const [imgErro, setImgError] = useState([])

  useEffect(() => {
    function callBack(event) {
       if (event.code === "Escape") setGetId(null) }

    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener('keydown', callBack)
  }, [getId]);

  


  function handleError(event, id) {
    if (event._reactName === 'onError' && !imgErro.includes(id)) {
      return setImgError([...imgErro, id])}
  }

  

  function handleClickSearchMovie(id) {

    setGetId((state) => (state === id ? null : id));

    const filter = watched.find((movie) => movie.imdbID === id);

    setStar(filter ? filter.userRating : 0);
  }

  const handleClickAddFavorite = (
    imdbID,
    Poster,
    imdbRating,
    userRating,
    runtime,
    Title
  ) => {

    const favoriteMovie = { Title, imdbID, Poster, imdbRating, userRating, runTime: +runtime.split(" ")[0] };

    setWatched((current) => [...current, favoriteMovie]);

    setGetId(null);

  };

  function handleClickDeleteFavorite(id) {

    setWatched(watched.filter((movie) => movie.imdbID !== id));

  }

  return (

    <>
      <Header movies={movies}>
        <Search query={query} setQuery={setQuery} movies={movies} />
      </Header>
      <main className="main">
        <div className="box">
          <ButtonToggle onSetIsOpen={setIsOpen1} onIsOpen={isOpen1} />
          <BoxList isOpen={isOpen1}>
            {isLoading ? (
              <Loading text={errorMessage} />
            ) : (
              <SearchedMovie
                movies={movies}
                handleClickSearchMovie={handleClickSearchMovie}
                imgErro={imgErro}
                handleError={handleError}
              />
            )}
          </BoxList>
        </div>

        <div className="box">
          <ButtonToggle onSetIsOpen={setIsOpen2} onIsOpen={isOpen2} />
          <BoxList isOpen={isOpen2}>
            {getId ? (
              <SeletcMovie
                getId={getId}
                setGetId={setGetId}
                handleClickAddFavorite={handleClickAddFavorite}
                star={star}
                key={getId}
                imgErro={imgErro}
              />
            ) : (
              <WatchedListSummary watched={watched}>
                <WatchedListFavor
                  watched={watched}
                  handleClickDeleteFavorite={handleClickDeleteFavorite}
                  imgErro={imgErro}
                />
              </WatchedListSummary>
            )}
          </BoxList>
        </div>
      </main>
    </>
  );
}
