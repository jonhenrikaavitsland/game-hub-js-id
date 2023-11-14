import {
  menuIcon,
  menuCloseIcon,
  overlay,
  openMenu,
  closeMenu,
  closeMenuEsc,
} from "./hamburgerMenu/menu.js";
import { createHome } from "./pages/home.js";
import { createGames } from "./pages/games.js";

menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);

switch (location.pathname) {
  case "/pages/games/title/":
    //
    break;
  case "/pages/games/":
    createGames();
    break;
  default:
    createHome();
}

