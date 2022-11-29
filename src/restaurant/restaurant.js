export const restaurantData = {
  '637374': {
    restaurant_id: '637374',
    name: "Bob's Burgers",
    description: "Local mom and pop burger store with the juciest burgers and friendly service!",
    cuisine: 'American',
    reviews: [
      {
        review_id: '4910030',
        username: 'freddie',
        rating: 1,
        content: 'Worst burgers I have had in my life. The meat was burned and there was hardly any sauce so it was really dry. Never coming back here.'
      },
      {
        review_id: '6310122',
        username: 'macy',
        rating: 5,
        content: 'Love this place! Bob and his wife are so friendly.'
      },
      {
        review_id: '8493848',
        username: 'foodie85',
        rating: 3,
        content: 'Meh. Better burgers elsewhere.'
      },

    ]
  },
  '210031': {
    restaurant_id: '210031',
    name: 'Pho Away',
    cuisine: 'Vietnamese',
    description: 'Traditional Vietnamese dishes in a comfy environment.',
    reviews: [
      {
        review_id: '1371098',
        username: 'foodie85',
        rating: 4,
        content: 'Love a good pho!'
      },
      {
        review_id: '4718345',
        username: 'freddie',
        rating: 3,
        content: 'Not the most authentic vietnamese, but a solid meal.'
      },
      {
        review_id: '7203811',
        username: 'macy',
        rating: 5,
        content: "Delicious food, fresh ingredients, reasonable prices, excellent service. Love this restaurant, it’s my favourite!!"
      }
    ]
  },
  '108264': {
    restaurant_id: '108264',
    name: 'The Little Snail',
    cuisine: 'French',
    description: 'Upmarket French restaurant with a speciality snail dish.',
    reviews: [
      {
        review_id: '2371382',
        username: 'foodie85',
        rating: 5,
        content: 'Absolutely exquisite! The presentation was perfect and everything tasted divine.'
      },
      {
        review_id: '1938371',
        username: 'maria',
        rating: 2,
        content: 'The food is alright, but not worth the excessively high prices!'
      },
    ]
  },
  '991910': {
    restaurant_id: '991910',
    name: 'Mario\'s Pizza Bar',
    cuisine: 'Italian',
    description: 'Authentic italian pizza fresh out of our woodfire oven!',
    reviews: [
      {
        review_id: '6128371',
        username: 'freddie',
        rating: 5,
        content: 'Love this place, cannot get enough of it.'
      },
      {
        review_id: '2934712',
        username: 'maria',
        rating: 4,
        content: 'True authentic italian pizza is so hard to find! This place is great.'
      },
    ]
  },
};

export const userData = {
  'freddie': {
    username: 'freddie',
    name: 'Fred Blogs'
  },
  'macy': {
    username: 'macy',
    name: 'Macy Zhang'
  },
  'maria': {
    username: 'maria',
    name: 'Maria Gomez'
  },
  'foodie85': {
    username: 'foodie85',
    name: 'Jane Smythe'
  },
};

/*
 * Get all the details for one user, given their unique username.
 */
export function getUser(username) {
  return userData[username];
}

/*
 * Returns an Array of all reviews for a user.
 * This function also adds the restaurant_name and restaurant_id to the object for each review.
 */
export function getReviewsForUser(username) {
  const reviews = Object.values(restaurantData).map(restaurant => {
    return restaurant.reviews.filter(review => {
      return review.username === username;
    }).map(review => {
      return { ...review, restaurant_id: restaurant.restaurant_id, restaurant_name: restaurant.name };
    });
  });
  return reviews.flat();
}

/*
 * Returns a new object with the total number of reviews and average rating added.
 */
function addAverageRating(restaurant) {
  const total_reviews = restaurant.reviews.length;
  const total_score = restaurant.reviews.reduce((accumulation, review) => accumulation + review.rating, 0);
  return {
    ...restaurant,
    total_reviews: total_reviews,
    average_rating: (total_reviews > 0) ? total_score / total_reviews : null
  };
}

/*
 * Return all the data about a specific restaurant, given a restaurant ID.
 * The returned restaurant object includes total_reviews and average_rating.
 */
export function getRestaurant(restaurandID) {
  return addAverageRating(restaurantData[restaurandID]);
}

/**
 * Returns a list of all restaurants as an array.
 * Includes adding the total_reviews and average_rating to each object.
*/
export function getAllRestaurants() {
  return Object.values(restaurantData).map(restaurant => {
    return addAverageRating(restaurant);
  });
}

export const renderMoon = (rating) => {
  // 🌕🌗🌑
  const baseInt = Math.floor(rating);
  let emojiRating = '';
  emojiRating = emojiRating.padEnd(baseInt * 2, '🌕');
  if (rating - baseInt > 0) {
    const halfInt = Math.round(rating - baseInt);
    emojiRating = emojiRating.padEnd((baseInt * 2 + halfInt * 2), '🌗');
  }
  if (emojiRating.length / 2 < 5) {
    emojiRating = emojiRating.padEnd(10, '🌑');
  }
  return emojiRating;
};