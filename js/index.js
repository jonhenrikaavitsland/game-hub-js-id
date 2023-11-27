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
import { setNavStyle } from "./config/setNav.js";

menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);
setNavStyle();

switch (location.pathname) {
  case "/pages/games/title/":
    // createTitle();
    break;
  case "/pages/games/":
    // createGames();
    break;
  default:
    createHome();
    headingContainer.addEventListener("click", hideContainer);
}


