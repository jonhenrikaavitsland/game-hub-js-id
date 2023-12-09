export function communityUserReviews(game, parent, data) {
  const communityUserReviewsContainer = document.createElement("div");
  communityUserReviewsContainer.classList.add(
    "flex",
    "flex-col",
    "title-reviews-container"
  );
  parent.append(communityUserReviewsContainer);

  const headerContainer = document.createElement("section");
  headerContainer.classList.add("flex");
  headerContainer.style.backgroundColor = "var(--light-blue)";
  communityUserReviewsContainer.append(headerContainer);

  const header = document.createElement("h3");
  header.textContent = "Community user reviews:";
  headerContainer.append(header);

  const reviewsContainer = document.createElement("div");
  reviewsContainer.classList.add("flex", "flex-col", "title-reviews-container");
  communityUserReviewsContainer.append(reviewsContainer);

  const dataExtract = data.reviews[0];

  for (let i = 0; i < data.reviews[0].length; i++) {
    const reviewBodyWrap = document.createElement("div");
    reviewBodyWrap.classList.add("flex", "review-wrap");

    const reviewBody = document.createElement("div");
    reviewBody.classList.add("flex", "flex-col", "review-body");
    reviewBodyWrap.append(reviewBody);

    const starsContainer = document.createElement("div");
    starsContainer.classList.add("flex");
    reviewBody.append(starsContainer);

    const wholeStars = Math.floor(dataExtract[i].rating);

    const hasHalfStar = dataExtract[i].rating % 1 !== 0;

    for (let y = 0; y < wholeStars; y++) {
      const fullStar = document.createElement("i");
      fullStar.classList.add("fa-solid", "fa-star-sharp");
      starsContainer.append(fullStar);
    }

    if (hasHalfStar) {
      const halfStar = document.createElement("i");
      halfStar.classList.add("fa-solid", "fa-star-half");
      starsContainer.append(halfStar);
    }

    const reviewFigure = document.createElement("figure");
    reviewBody.append(reviewFigure);

    const reviewBlock = document.createElement("blockquote");
    reviewFigure.append(reviewBlock);

    const review = document.createElement("p");
    review.textContent = dataExtract[i].review;
    reviewBlock.append(review);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = "—" + dataExtract[i].user;

    const cite = document.createElement("cite");
    cite.textContent = ", " + game.title;

    figcaption.appendChild(cite);
    reviewFigure.append(figcaption);

    reviewsContainer.append(reviewBodyWrap);
  }
}
