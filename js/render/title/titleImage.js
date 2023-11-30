export function titleImage(game, parentContainer) {
  const productImageContainer = document.createElement("div");
  productImageContainer.classList.add("flex", "product-image-container");
  parentContainer.append(productImageContainer);

  const productImage = document.createElement("img");
  productImage.src = `${game.image}`;
  productImage.setAttribute("alt", `cover image of ${game.title}`);
  productImageContainer.append(productImage);
}
