import React from "react";

export default function Ratting({ noOfStars = 5 }) {
  return (
    <section className="w-full h-screen">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <>
            <i key={index} className="ri-star-line"></i>
          </>
        );
      })}
    </section>
  );
}
