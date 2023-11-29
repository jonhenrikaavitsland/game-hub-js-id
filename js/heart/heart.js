export function addFav() {
  if ((heart.style.color = "var(--white-f2)")) {
    heart.style.color = "var(--rating18)";
  } else {
    heart.style.color = "var(--white-f2)";
  }
}

// Rewrite to use local storage to show either white or red color.
// When you click the icon you then save to local storage or if it is already saved we change it.
// Also we need to put the heart icon inside a div so that it is possible to target it due to aria-hidden.
