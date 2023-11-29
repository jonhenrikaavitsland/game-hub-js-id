// the code on this page is rendering html
export function renderRelease(release, parentElement, page) {
  const releaseHtml = createHtmlObject(release, page);
  parentElement.append(releaseHtml);
}

export function renderReleases(releases, parentElement, page) {
  releases.forEach(function (release) {
    renderRelease(release, parentElement, page);
  });
}

export function createHtmlObject(release, page) {
  let linkUrl;
  if (page === "home") {
    linkUrl = `./pages/games/title/?id=${release.id}`;
  } else if (page === "games") {
    linkUrl = `./title/?id=${release.id}`;
  }

  const element = document.createElement("div");
  element.classList.add("game-card");

  const childUpperHalf = document.createElement("div");
  childUpperHalf.classList.add("game-card-img-wrap");
  element.append(childUpperHalf);

  const childImage = document.createElement("img");
  childImage.classList.add("cover");
  childImage.src = `${release.image}`;
  childImage.setAttribute("alt", `cover image of ${release.title}`);
  childUpperHalf.append(childImage);

  const childLowerHalf = document.createElement("div");
  childLowerHalf.classList.add("game-card-lower-half-container");
  element.append(childLowerHalf);

  const childTitleInfoContainer = document.createElement("div");
  childTitleInfoContainer.classList.add("title-info-container", "flex");
  childLowerHalf.append(childTitleInfoContainer);

  const childTitleSection = document.createElement("section");
  childTitleInfoContainer.append(childTitleSection);

  let childTitle;
  if (page === "home") {
    childTitle = document.createElement("h3");
  } else if (page === "games") {
    childTitle = document.createElement("h2");
  }
  childTitle.classList.add("titles");
  childTitle.textContent = `${release.title}`;
  childTitleSection.append(childTitle);

  const childCategory = document.createElement("p");
  childCategory.classList.add("links");
  childCategory.textContent = `${release.genre}`;
  childTitleSection.append(childCategory);

  const childRatingContainer = document.createElement("div");
  childRatingContainer.classList.add("star-container", "flex");
  childTitleSection.append(childRatingContainer);

  const childRating = document.createElement("i");
  childRating.classList.add("fa-solid", "fa-star-sharp");
  childRatingContainer.append(childRating);

  const childRatingNumber = document.createElement("span");
  childRatingNumber.textContent = "(4)";
  childRatingContainer.append(childRatingNumber);

  const childAgeRatingContainer = document.createElement("div");
  childAgeRatingContainer.classList.add("age-rating-container");
  childTitleInfoContainer.append(childAgeRatingContainer);

  const childAgeRating = document.createElement("span");
  childAgeRating.textContent = `${release.ageRating}`;
  if (release.ageRating === "16+") {
    childAgeRating.classList.add("age-rating-16");
  } else if (release.ageRating === "18+") {
    childAgeRating.classList.add("age-rating-18");
  } else if (release.ageRating === "12+") {
    childAgeRating.classList.add("age-rating-12");
  } else {
    childAgeRating.classList.add("age-rating-3");
  }
  childAgeRatingContainer.append(childAgeRating);

  const childSaleContainer = document.createElement("div");
  childSaleContainer.classList.add("sale-container", "flex", "flex-col");
  childLowerHalf.append(childSaleContainer);

  const childPriceContainer = document.createElement("div");
  childPriceContainer.classList.add("price-container", "flex", "flex-col");
  childSaleContainer.append(childPriceContainer);

  let childPrice = document.createElement("p");
  if (`${release.onSale}`) {
    childPrice.textContent = `$ ${release.discountedPrice}`;
  } else {
    childPrice.textContent = `$ ${release.price}`;
  }
  childPrice.classList.add("price");
  childPriceContainer.append(childPrice);

  let childPriceBefore = document.createElement("p");
  childPriceBefore.textContent = `$ ${release.price}`;
  childPriceBefore.classList.add("price-before");
  // if (`${release.price}` !== `${release.discountedPrice}`) {
  //   childPriceBefore.classList.remove("hidden");
  // }
  childPriceContainer.append(childPriceBefore);

  const childButton = document.createElement("a");
  childButton.classList.add("cta", "cta-explore");
  childButton.textContent = "explore";
  childButton.setAttribute("id", "cta-game-card");
  childButton.href = linkUrl;
  childSaleContainer.append(childButton);

  return element;
}

export function clearReleaseList(parentElement) {
  parentElement.innerHTML = "";
}
