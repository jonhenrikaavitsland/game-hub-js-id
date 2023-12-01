import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";

export const cartLink = document.querySelector(".cart");

export async function updateCartLink() {
  const titles = await fetchData(url);
  // The idea is to pass the length of the array as the numerical content of the cart-icon as well as the array itself will contain the id's that I can pass to the cart page in order to reflect what is actually in the cart.
  const gameKeys = [];

  for (let i = 0; i < titles.length; i++) {
    let gameKey = titles[i].id;
    if (localStorage.getItem(gameKey)) {
      gameKeys.push(gameKey);
    } // checking if title.id exists as key in local storage, and if it is, then pushing the id to the array above.
  }
  cartLink.textContent = gameKeys.length;
  return gameKeys;
}
