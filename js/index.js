import {
  menuIcon,
  menuCloseIcon,
  overlay,
  openMenu,
  closeMenu,
  closeMenuEsc,
} from "./hamburgerMenu/menu.js";
import { createHome, hideContainer, headingContainer } from "./pages/home.js";
import { createGames } from "./pages/games.js";
import { createTitle } from "./pages/title.js";
import { setNavStyle, landscape } from "./config/setNav.js";
import { addFav, checkHeart } from "./heart/heart.js";
import { getContainer } from "./data/getContainer.js";
import { scrollToSection } from "./scroll/scrollTo.js";
import { createCart } from "./pages/cart.js";
import { button } from "./localStorage/button.js";
import { updateCartLink } from "./localStorage/updateCartLink.js";
import { validateForm } from "../js/formValidation/formValidateContact.js";
import { emptyCartBtn } from "./render/cart/emptyCart.js";

setNavStyle();
landscape.addEventListener("change", setNavStyle);
menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);
updateCartLink();

switch (location.pathname) {
  case "/pages/games/title/":
    createTitle();
    setTimeout(button, 300);
    let heartContainer = "";
    let starsContainer = "";
    setTimeout(() => {
      heartContainer = getContainer(".heart-container");
    }, 1000);
    setTimeout(() => {
      starsContainer = getContainer(".stars-container");
    }, 1000);
    setTimeout(() => checkHeart(), 1000);
    setTimeout(() => {
      heartContainer.addEventListener("click", addFav);
    }, 1000);
    setTimeout(() => {
      starsContainer.addEventListener("click", scrollToSection);
    }, 1000);
    break;
  case "/pages/games/":
    createGames();
    break;
  case "/pages/cart/":
    createCart();
    setTimeout(emptyCartBtn, 1000);
    break;
  case "/pages/cart/success/":
    break;
  case "/pages/about/":
    break;
  case "/pages/contact/":
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    validateForm();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.addEventListener("change", validateForm);
      input.addEventListener("blur", validateForm);
    });
    break;
  case "/pages/account/":
    break;
  case "/index.html":
  case "/":
    createHome();
    headingContainer.addEventListener("click", hideContainer);
}

