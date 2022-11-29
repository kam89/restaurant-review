import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant, renderMoon } from './restaurant';

export const RestaurantDetail = () => {
  const param = useParams();
  const { id } = param;

  const [review, setReview] = useState();
  const [rating, setRating] = useState();
  const [restaurant, setRestaurant] = useState(getRestaurant(id));

  const onSubmitReview = () => {
    console.log(restaurant, review);
  };

  return (
    <div style={{ padding: 10 }}>
      <div style={{ border: '1px solid lightgrey', padding: 10, borderRadius: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3>{restaurant.name}</h3>
          <p style={{ border: '1px solid lightgrey', borderRadius: 15, padding: 5, display: 'inline-block', marginLeft: 5 }}>{restaurant.cuisine}</p>
        </div>
        <p>{restaurant.description}</p>
        <div style={{ padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p>Average Rating: {renderMoon(restaurant.average_rating)}</p>
          <p>Total Reviews: {restaurant.total_reviews}</p>
        </div>
      </div>

      <h4>Reviews:</h4>
      {restaurant.reviews.map((review, index) => {
        return (
          <div style={{ border: '1px solid lightgrey', padding: 10, borderRadius: 5, marginTop: 2, marginBottom: 2 }} key={index}>
            <body>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4>{review.username}</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h5>Rating:</h5>
                  <p style={{ marginLeft: 5 }}>{renderMoon(review.rating)}</p>
                </div>
              </div>
              <p>{review.content}</p>
            </body>
          </div>
        );
      })}

      <div style={{ display: 'block' }}>
        <body>
          <h4>Add a Review:</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="number" min={0} max={5} value={rating} step={0.5} onChange={(e) => setRating(parseFloat(e.target.value))} style={{ width: '10%', marginLeft: 5 }} />
            <p style={{ marginLeft: 5 }}>{renderMoon(rating)}</p>
          </div>
          <textarea cols="30" rows="10" style={{ fontFamily: 'Roboto', fontSize: 16 }} onChange={(val) => setReview(val.target.value)} />
          <div style={{ marginTop: 5 }}>
            <button type="button" onClick={onSubmitReview}>Submit Review as freddie</button>
          </div>
        </body>
      </div>
    </div>
  );
};