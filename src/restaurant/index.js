import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRestaurants, renderMoon } from './restaurant';

export const Restaurant = () => {

  const [restaurantList, setRestaurantList] = useState(getAllRestaurants());

  useEffect(() => {

  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h1>Restaurants</h1>
      {restaurantList.map((item, index) => {
        return (
          <div key={index} style={{ border: '1px solid lightgrey', padding: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to={`/restaurant/${item.restaurant_id}`}><h3>{item.name}</h3></Link>
              <p style={{ border: '1px solid lightgrey', borderRadius: 15, padding: 5, display: 'inline-block', marginLeft: 5 }}>{item.cuisine}</p>
            </div>
            {/* <p>{item.description}</p> */}
            <div style={{ padding: 10 }}>
              <p>Average Rating: {renderMoon(item.average_rating)}</p>
              <p>Total Reviews: {item.total_reviews}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};