import { useEffect, useRef } from "react";

export function Search({ movies, query, setQuery }) {

const inputEl = useRef(null)

useEffect(() => inputEl.current.focus(), [])


function callback(event) {
   if (document.activeElement === inputEl.current) return
   if (event.code === "Enter") { setQuery(""); return inputEl.current.focus() } }
useEffect(()=> {  
  document.addEventListener("keydown", callback);   
  return document.addEventListener("keydown", callback)}, [query])


  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
    </>
  );
}
