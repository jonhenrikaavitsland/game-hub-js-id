export function purchaseContainer(game, parentContainer) {
  const purchaseContainer = document.createElement("div");
  purchaseContainer.classList.add("purchase-container", "flex", "flex-col");
  purchaseContainer.style.backgroundColor = "var(--light-blue)";
  parentContainer.append(purchaseContainer);

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("title-price-container", "flex", "flex-col");
  purchaseContainer.append(priceContainer);

  let childPrice = document.createElement("p");
  if (`${game.onSale}`) {
    childPrice.textContent = `$ ${game.discountedPrice}`;
  } else {
    childPrice.textContent = `$ ${game.price}`;
  }
  childPrice.classList.add("title-price");
  priceContainer.append(childPrice);

  let childPriceBefore = document.createElement("p");
  childPriceBefore.textContent = `$ ${game.price}`;
  childPriceBefore.classList.add("title-price-before");
  priceContainer.append(childPriceBefore);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("flex", "flex-col", "title-info-container");
  infoContainer.setAttribute("id", "info-container");
  purchaseContainer.append(infoContainer);

  const releasedParagraph = document.createElement("p");
  releasedParagraph.textContent = `Released: ${game.released}`;
  infoContainer.append(releasedParagraph);

  const systemParagraph = document.createElement("p");
  systemParagraph.textContent = "System: Playbox\u2122";
  infoContainer.append(systemParagraph);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container", "flex", "flex-col");
  purchaseContainer.append(buttonContainer);

  const childButton = document.createElement("button");
  childButton.classList.add("cta", "cta-sale");
  childButton.innerHTML = "Add " + `<i class="fa-solid fa-cart-plus"></i>`;
  buttonContainer.append(childButton);
}
