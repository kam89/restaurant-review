import React, { useEffect, useState } from "react";
import { getReviewsForUser } from '../restaurant/restaurant';


export const MyReview = () => {

  const reviews = getReviewsForUser('freddie');
  console.log({ reviews });

  return (
    <div>
      {reviews.map((item, index) => {
        return (
          <div>
            <p>Restaurant: {item.restaurant_name}</p>
            <p>Rating: {item.rating}</p>
            <p>Content: {item.content}</p>
          </div>
        );
      })}
    </div>
  );
};