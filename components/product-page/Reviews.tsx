import React from "react";
import { Review } from "@/types/Review.type";
import ReviewStars from "../shared/ReviewStars";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  console.log(reviews);
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4" id="reviews">
        Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 rounded-lg bg-zinc-50">
            <div className="flex flex-col items-start gap-2 mb-1">
              <div className="font-medium">
                {review.users.first_name} {review.users.last_name}
              </div>
              <ReviewStars rating={review.rating} />
            </div>
            <p className="text-zinc-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
