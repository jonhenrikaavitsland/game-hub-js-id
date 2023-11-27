const windowInnerWidth = document.documentElement.clientWidth;
const navElement = document.querySelector("nav");
const navBar = document.querySelector("nav ul");
const navBarLink = document.querySelectorAll("nav ul li");
const navBarAnchor = document.querySelectorAll("nav ul li a");
const closeButton = document.querySelector(".hamburger-wrap-2");
const linkCart = document.querySelector(".link-cart");
const linkAccount = document.querySelector(".link-acc");
const topRightLinks = document.querySelector(".heading-right");

export function setNavStyle() {
  if (windowInnerWidth >= 800) {
    navElement.classList.remove("hidden");
    closeButton.classList.add("hidden");
    navElement.style.backgroundColor = "var(--dark-green)";
    navElement.style.position = "static";
    navElement.style.padding = 0;
    linkCart.classList.add("hidden");
    linkAccount.classList.add("hidden");
    navElement.style.height = "auto";
    navBar.classList.remove("flex-col");
    navBar.style.gap = 0;
    navBarLink.forEach(function (li) {
      li.style.border = "2px solid";
      li.style.borderRadius = "25px 25px 0 0";
      li.style.padding = "1rem 2rem";
      li.style.borderColor = "var(--dark-blue)";
    });
    navBarAnchor.forEach(function (a) {
      a.style.padding = 0;
    });
    topRightLinks.classList.remove("hidden");
  } else {
  }
}
