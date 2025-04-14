import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { Review } from "@/types/Review.type";
import ReviewStars from "./ReviewStars";
export default function Rating({
  productReviews,
  className,
}: {
  productReviews: Review[];
  className?: string;
}) {
  const rating = productReviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating =
    productReviews.length > 0 ? (rating / productReviews.length).toFixed(1) : 0;

  return (
    <div className={`flex items-center ${className}`}>
      <ReviewStars rating={averageRating} />
      <span className="ml-2 text-sm text-zinc-500">
        ({productReviews.length} reviews)
      </span>
    </div>
  );
}
