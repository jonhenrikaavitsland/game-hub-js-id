// saves status to local storage and changes color of the heart based on status.

export function addFav() {
  const heart = document.querySelector(".fa-heart");
  const id = document.querySelector(".title-section p");
  if (localStorage.getItem(`fav${id.textContent}`) !== "yes") {
    localStorage.setItem(`fav${id.textContent}`, "yes");
    heart.style.color = "var(--fancy-green)";
  } else {
    localStorage.setItem(`fav${id.textContent}`, "no");
    heart.style.color = "var(--white-f2)";
  }
}

// Checks the status of local storage as the page loads and if game is favored by the user in the past we change the color.
export function checkHeart() {
  const heart = document.querySelector(".fa-heart");
  const id = document.querySelector(".title-section p");
  if (localStorage.getItem(`fav${id.textContent}`) === "yes") {
    heart.style.color = "var(--fancy-green)";
  }
}
