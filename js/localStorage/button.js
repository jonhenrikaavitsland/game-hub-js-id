import { getId } from "../data/getId.js";
import { url } from "../data/constants.js";
import { fetchData } from "../data/fetchApi.js";
import { findKey, findValue } from "./findVariables.js";
import { updateCartLink } from "./updateCartLink.js";

export async function button() {
  const id = getId();
  const newUrl = url + id;
  const game = await fetchData(newUrl);

  const updatedButton = "CHECKOUT";
  const titleButton = document.querySelector(".cta-sale");

  let gameKey = findKey(game);
  let gameValue = findValue(game);

  // if the button changes it now sends the customer to the cart.
  function buttonRedirect() {
    if (titleButton.innerHTML === updatedButton) {
      location.href = "../../cart/";
    }
  }

  // adds the title to local storage, then updates the button and cart link in the top.
  function buttonAction() {
    localStorage.setItem(gameKey, gameValue);
    checkToUpdateButton();
    updateCartLink();
  }

  // updates the buttons textContent if the games title has been stored in local storage.
  function checkToUpdateButton() {
    if (localStorage.getItem(gameKey)) {
      titleButton.textContent = updatedButton;
    }
  }

  checkToUpdateButton();
  titleButton.addEventListener("click", buttonRedirect);
  titleButton.addEventListener("click", buttonAction);
}
