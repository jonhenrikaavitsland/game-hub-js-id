export const menuIcon = document.querySelector(".hamburger-wrap");
export const menuMobile = document.querySelector("nav");
export const overlay = document.querySelector(".overlay");
export const menuCloseIcon = document.querySelector(".hamburger-wrap-2");

export function openMenu() {
  menuMobile.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

export function closeMenu() {
  menuMobile.classList.add("hidden");
  overlay.classList.add("hidden");
}

export function closeMenuEsc(e) {
  if (e.key === "Escape") {
    closeMenu();
  }
}
