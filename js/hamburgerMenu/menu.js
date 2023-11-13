export const menuIcon = document.querySelector(".hamburger-wrap");
console.log(menuIcon);

export const menuMobile = document.querySelector(".mobile-navigation");
console.log(menuMobile);

export const overlay = document.querySelector(".overlay");
console.log(overlay);

export const menuCloseIcon = document.querySelector(".hamburger-wrap-2");
console.log(menuCloseIcon);

export const menuAnchor = document.querySelectorAll(".mobile-navigation a");
console.log(menuAnchor);

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
