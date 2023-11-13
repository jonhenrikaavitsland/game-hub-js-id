import {
  menuIcon,
  menuCloseIcon,
  overlay,
  openMenu,
  closeMenu,
  closeMenuEsc,
} from "./hamburgerMenu/menu.js";

menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);
