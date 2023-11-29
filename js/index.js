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

setNavStyle();
landscape.addEventListener("change", setNavStyle);
menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);

switch (location.pathname) {
  case "/pages/games/title/":
    createTitle();
    let heartContainer = "";
    setTimeout(() => {
      heartContainer = getContainer(".heart-container");
    }, 1000);
    setTimeout(() => checkHeart(), 1000);
    setTimeout(() => {
      heartContainer.addEventListener("click", addFav);
    }, 1000);
    break;
  case "/pages/games/":
    createGames();
    break;
  case "/pages/cart/":
    break;
  case "/pages/cart/success/":
    break;
  case "/pages/about/":
    break;
  case "/pages/contact/":
    break;
  case "/pages/account/":
    break;
  default:
    createHome();
    headingContainer.addEventListener("click", hideContainer);
}

import { reviews } from "./data/getReviews.js";
console.log(reviews);


