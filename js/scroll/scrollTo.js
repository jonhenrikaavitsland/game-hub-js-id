export function scrollToSection() {
  const targetSection = document.querySelector(".title-reviews-container");

  const targetOffset = targetSection.getBoundingClientRect().top;

  window.scrollTo({
    top: targetOffset + window.scrollY,
    behavior: "smooth",
  });
}
