export function productDescription(game, parent) {
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("flex", "flex-col", "title-details-container");
  parent.append(detailsContainer);

  const productDescriptionContainer = document.createElement("section");
  productDescriptionContainer.classList.add(
    "title-description-container",
    "flex",
    "flex-col"
  );
  detailsContainer.append(productDescriptionContainer);

  const productDescription = document.createElement("h2");
  productDescription.textContent = "Product description:";
  productDescriptionContainer.append(productDescription);

  const description = document.createElement("p");
  description.textContent = game.description;
  productDescriptionContainer.append(description);

  const categoryContainer = document.createElement("section");
  categoryContainer.classList.add(
    "flex",
    "flex-col",
    "title-category-container"
  );
  detailsContainer.append(categoryContainer);

  const categoryHeading = document.createElement("h2");
  categoryHeading.textContent = "Category:";
  categoryContainer.append(categoryHeading);

  const category = document.createElement("p");
  category.textContent = game.genre;
  categoryContainer.append(category);

  const parentalContainer = document.createElement("section");
  parentalContainer.classList.add("flex", "flex-col", "title-parent-container");
  detailsContainer.append(parentalContainer);

  const parentalHeading = document.createElement("h2");
  parentalHeading.textContent = "Parental:";
  parentalContainer.append(parentalHeading);

  const ageRatingText = document.createElement("p");
  ageRatingText.textContent = "Age Rating: " + game.ageRating;
  parentalContainer.append(ageRatingText);

  const ageRatingImage = document.createElement("div");
  ageRatingImage.classList.add("flex", "age-box");
  ageRatingImage.style.width = "50px";
  ageRatingImage.style.height = "50px";
  parentalContainer.append(ageRatingImage);

  const ageRatingInside = document.createElement("span");
  ageRatingInside.textContent = game.ageRating.replace(/\+/g, "");
  if (
    game.ageRating.replace(/\+/g, "") >= 12 &&
    game.ageRating.replace(/\+/g, "") <= 16
  ) {
    ageRatingImage.style.backgroundColor = "var(--rating-12-16)";
  } else if (game.ageRating.replace(/\+/g, "") > 16) {
    ageRatingImage.style.backgroundColor = "var(--rating18)";
  } else if (game.ageRating.replace(/\+/g, "") < 12) {
    ageRatingImage.style.backgroundColor = "var(--white-f2)";
    ageRatingImage.style.color = "var(--dark-blue)";
  }
  ageRatingImage.append(ageRatingInside);

  const paragraph = document.createElement("p");
  parentalContainer.append(paragraph);

  const paragraphTextFront = "Further parental controls are available when ";

  const textNode1 = document.createTextNode(paragraphTextFront);
  paragraph.append(textNode1);

  const paragraphLink = document.createElement("a");
  paragraphLink.href = "../../account/";
  paragraphLink.textContent = "logging in";
  paragraphLink.style.color = "var(--fancy-green)";
  paragraph.append(paragraphLink);

  const paragraphTextBack = " to your private account!";

  const textNode2 = document.createTextNode(paragraphTextBack);
  paragraph.append(textNode2);
}
