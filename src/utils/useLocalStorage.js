import { useState, useEffect } from "react";

export function useLocalStorage(initealState, localkey) {

 const [watched, setWatched] = useState(function () {

  const localValue = localStorage.getItem(localkey)

  if (!localValue) return initealState

  return JSON.parse(localValue) 
 
 })
 

  useEffect( function () {
   localStorage.setItem(localkey, JSON.stringify(watched))
  }, [watched]) 

  return {watched, setWatched}
}