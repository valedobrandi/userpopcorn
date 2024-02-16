const TOKEN = import.meta.env.VITE_API_MOVIE
import { useEffect, useState } from "react";


export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setErrorMessage("Loading...");

        setIsLoading(true);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${TOKEN}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok)
          throw new Error("Something went worng with fetching movies");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);

        setIsLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError') setErrorMessage(error.message);
      }
    }

    if (query.length > 3) fetchMovies();
    if (query.length === 0) setErrorMessage('');

    return () => controller.abort();
  }, [query]);

  return { errorMessage, isLoading, movies }
}