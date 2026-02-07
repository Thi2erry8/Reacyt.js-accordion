import React, { useState } from "react";

export default function Ratting({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }

  return (
    <section className="w-full h-screen bg-amber-50">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <i
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
            className={`ri-star-${index <= (hover || rating) ? "fill text-neutral-950" : "line"} `}
          ></i>
        );
      })}
    </section>
  );
}
