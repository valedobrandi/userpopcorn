import React from "react";
import ReactDOM from "react-dom/client";
import App from "./usePopCorn/app";
import StarRating from "./components/HoverStar/index.tsx"



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={'string'} messagers={['bad', 'ok', 'good', 'very good', 'fantastic']} />
    <StarRating maxRating={10} size={40}/>
    <StarRating color='red' />
  </React.StrictMode>
)