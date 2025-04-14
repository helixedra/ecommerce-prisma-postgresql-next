import React from "react";
import { RiStarSFill } from "react-icons/ri";

export default function ReviewStars({ rating }: { rating: number | string }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <RiStarSFill
      key={index}
      className={
        index < Math.round(Number(rating)) ? "text-yellow-500" : "text-gray-300"
      }
    />
  ));
  return (
    <div className="flex items-center">
      {stars} <span className="ml-1 text-sm">{rating}</span>
    </div>
  );
}
