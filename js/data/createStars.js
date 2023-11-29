export function createStars(reviews, game) {
  let stars = 0;
  let rating = 0;
  const currentReviews = [];

  for (let i = 0; i < reviews.length; i++) {
    if (game.id === reviews[i].id) {
      currentReviews.push(reviews[i].reviews);
      for (let y = 0; y < reviews[i].reviews.length; y++) {
        stars += reviews[i].reviews[y].rating;
      }
    }
  }

  rating = Math.round(stars / 3);

  const reviewData = {
    starsRounded: rating,
    reviews: currentReviews,
  };

  return reviewData;
}
// Returns a object that contains data to use for my title page.