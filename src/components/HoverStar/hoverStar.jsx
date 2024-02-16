import React, { useEffect, useState } from "react";
import "./index.css";

/* interface StarRatingProps {
  maxRating: number;
  color: string,
  size: number;
  messagers: [];
} */

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  messagers = [],
  onSetRating = () => {},
}) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const indexRating = hoverRating ? hoverRating - 1 : rating - 1;
  const messager = messagers.length === maxRating
      ? messagers[indexRating]
      : "";

function handleOnclick(num) {
  setRating(() => num + 1)
}

useEffect(() => {
onSetRating(rating)
},[rating])

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {Array.from({ length: maxRating }, (_, num) => (
          <Star
            color={color}
            size={size}
            key={num}
            onClick={() => handleOnclick(num)}
            onMouseEnter={() => setHoverRating(num + 1)}
            onMouseLeave={() => setHoverRating(0)}
            full={hoverRating ? hoverRating >= num + 1 : rating >= num + 1}
          />
        ))}
        <p
          style={{
            lineHeight: "1px",
            color: `${color}`,
            fontSize: `${size / 1.2}px`,
            margin: '0px'
          }}
        >
          {messager}
        </p>
      </div>
    </div>
  );
}

function Star({ onClick, full, onMouseEnter, onMouseLeave, color, size }) {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      style={{
        width: `${size}px`,
        display: "block",
        cursor: "pointer",
      }}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
    </span>
  );
}
/*
FULL STAR




*/
