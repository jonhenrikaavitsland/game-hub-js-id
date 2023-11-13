import {
  menuIcon,
  menuCloseIcon,
  overlay,
  openMenu,
  closeMenu,
  closeMenuEsc,
} from "./hamburgerMenu/menu.js";
import { createHome } from "./pages/home.js";

menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);

createHome();