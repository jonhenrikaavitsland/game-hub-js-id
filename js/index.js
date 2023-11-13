import {
  menuIcon,
  menuCloseIcon,
  overlay,
  openMenu,
  closeMenu,
  closeMenuEsc,
  menuAnchor,
} from "./hamburgerMenu/menu.js";

menuIcon.addEventListener("click", openMenu);
menuCloseIcon.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenuEsc);
overlay.addEventListener("click", closeMenu);

// for (let i = 0; i < menuAnchor.length; i++) {
//   menuAnchor[i].addEventListener("click", closeMenu);
// }