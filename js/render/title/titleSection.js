export function titleSection(game, parentContainer, data) {
  const titleSection = document.createElement("section");
  titleSection.classList.add("flex", "flex-col", "title-section");
  parentContainer.append(titleSection);

  const titleWrap = document.createElement("div");
  titleWrap.classList.add("flex", "title-wrap");
  titleSection.append(titleWrap);

  const childTitle = document.createElement("h1");
  childTitle.classList.add("title-heading");
  childTitle.textContent = `${game.title}`;
  titleWrap.append(childTitle);

  const childHeartContainer = document.createElement("div");
  childHeartContainer.classList.add("flex", "heart-container");
  titleWrap.append(childHeartContainer);

  const childHeart = document.createElement("i");
  childHeart.classList.add("fa-solid", "fa-heart");
  childHeartContainer.append(childHeart);

  const childProductId = document.createElement("p");
  const string = `${game.id}`;
  const truncatedString = string.slice(0, 8);
  childProductId.textContent = "Productid: " + truncatedString;
  titleSection.append(childProductId);

  const starContainer = document.createElement("div");
  starContainer.classList.add("flex", "stars-wrap");
  titleSection.append(starContainer);

  const starsWrap = document.createElement("div");
  starsWrap.classList.add("flex", "stars-container");
  starContainer.append(starsWrap);

  let amount = data.starsRounded;
  for (let i = 0; i < amount; i++) {
    const star = document.createElement("i"); // Create a new star element in each iteration
    star.classList.add("fa-solid", "fa-star-sharp");
    starsWrap.append(star);
  }

  const numberReviews = document.createElement("span");
  numberReviews.textContent = "(" + data.reviews[0].length + ")";
  starContainer.append(numberReviews);
}
