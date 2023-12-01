import { updateCartLink } from "../localStorage/updateCartLink.js";
import { breadCrumbTitle } from "../render/cart/breadCrumb.js";
import { clearReleaseList } from "../render/renderLists.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";

const parentContainer = document.querySelector(".cart-container");
const keys = await updateCartLink();
console.log(keys);
export const cartContent = [];
console.log(cartContent);

export async function createCartContent() {
  for (let i = 0; i < keys.length; i++) {
    const newUrl = url + `${keys[i]}`;
    const title = await fetchData(newUrl);
    cartContent.push(title);
  }
}

export function createCartHeading() {
  let total = 0;
  let discount = 0;
  for (let i = 0; i < cartContent.length; i++) {
    total += cartContent[i].price;
    discount += cartContent[i].discountedPrice;
  }

  const headingContainer = document.createElement("div");
  headingContainer.classList.add("cart-heading");

  const heading = document.createElement("h1");
  headingContainer.append(heading);

  const textNode = document.createTextNode("Cart total: ");
  heading.appendChild(textNode);

  const discountedPrice = document.createElement("span");
  discountedPrice.classList.add("add-fancy");
  discountedPrice.setAttribute("id", "cart-heading-discounted");
  discountedPrice.textContent = " € " + parseFloat(discount.toFixed(2));
  heading.appendChild(discountedPrice);

  const priceBefore = document.createElement("span");
  priceBefore.setAttribute("id", "cart-heading-price-before");
  priceBefore.textContent = " € " + parseFloat(total.toFixed(2));
  heading.appendChild(priceBefore);

  parentContainer.append(headingContainer);
}

export function createInnerCart() {
  let total = 0;
  let discount = 0;
  for (let i = 0; i < cartContent.length; i++) {
    total += cartContent[i].price;
    discount += cartContent[i].discountedPrice;

    const gameContainer = document.createElement("div");
    gameContainer.classList.add("cart-game-wrap");

    const topHalfContainer = document.createElement("div");
    topHalfContainer.classList.add("cart-game-top-container", "flex");
    gameContainer.append(topHalfContainer);

    const imageContainer = document.createElement("div");
    topHalfContainer.append(imageContainer);

    const infoSection = document.createElement("section");
    topHalfContainer.append(infoSection);

    const gameImage = document.createElement("img");
    gameImage.classList.add("cart-cover");
    gameImage.src = cartContent[i].image;
    gameImage.setAttribute("alt", `cover image of ${cartContent[i].title}`);
    imageContainer.append(gameImage);

    const gameTitle = document.createElement("h2");
    gameTitle.textContent = cartContent[i].title + " - " + "Playbox";
    infoSection.append(gameTitle);

    const infoParagraph = document.createElement("p");
    infoParagraph.textContent = "Quick access - instant download";
    infoSection.append(infoParagraph);

    const lowerHalf = document.createElement("div");
    lowerHalf.classList.add("cart-game-lower-container", "flex");
    gameContainer.append(lowerHalf);

    const cancelContainer = document.createElement("div");
    cancelContainer.classList.add("cancel-cart");
    lowerHalf.append(cancelContainer);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("cart-price-wrap", "flex", "flex-col");
    lowerHalf.append(priceContainer);

    const cancelCart = document.createElement("i");
    cancelCart.classList.add("fa-sharp", "fa-solid", "fa-cart-xmark");
    cancelContainer.append(cancelCart);

    const cancelInfo = document.createElement("span");
    cancelInfo.textContent = " remove item";
    cancelContainer.append(cancelInfo);

    const bestPrice = document.createElement("span");
    bestPrice.textContent = "€ " + cartContent[i].discountedPrice;
    bestPrice.classList.add("add-fancy", "cart-best-price");
    priceContainer.append(bestPrice);

    const normalPrice = document.createElement("span");
    normalPrice.textContent = cartContent[i].price;
    normalPrice.classList.add("cart-normal-price");
    priceContainer.append(normalPrice);

    parentContainer.append(gameContainer);
  }
}

export function createCartBottom() {
  let total = 0;
  let discount = 0;
  for (let i = 0; i < cartContent.length; i++) {
    total += cartContent[i].price;
    discount += cartContent[i].discountedPrice;
  }
  let discountTotal = total - discount;

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom-cart-wrap", "flex");

  const emptyButton = document.createElement("button");
  emptyButton.textContent = "Empty cart";
  emptyButton.classList.add("empty-btn");
  bottomContainer.append(emptyButton);

  const loginElement = document.createElement("p");
  loginElement.classList.add("cart-p", "flex");
  bottomContainer.append(loginElement);

  const loginLink = document.createElement("a");
  loginLink.classList.add("add-fancy");
  loginLink.textContent = "Log in ";
  loginElement.appendChild(loginLink);

  const textNode = document.createTextNode("to save: ");
  loginElement.appendChild(textNode);

  const discountTotals = document.createElement("span");
  discountTotals.classList.add("add-fancy");
  discountTotals.textContent = "€ " + discountTotal;
  loginElement.appendChild(discountTotals);

  parentContainer.append(bottomContainer);
}

export function createCart() {
  // code that makes up cart page
  try {
    clearReleaseList(parentContainer);
    breadCrumbTitle(parentContainer);
    createCartContent();
    setTimeout(createCartHeading, 1000);
    setTimeout(createInnerCart, 1000);
    setTimeout(createCartBottom, 1000);
  } catch (error) {
    console.log("An error occurred", error);
    createErrorMessage(parentContainer, error);
  }
}
