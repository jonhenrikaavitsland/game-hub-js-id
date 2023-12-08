export function emptyCartBtn() {
  const emptyBtn = document.querySelector(".empty-btn");
  const parent = document.querySelector(".cart-container");
  emptyBtn.addEventListener("click", function () {
    localStorage.clear();
    parent.innerHTML = "";

    const element = document.createElement("div");

    const childHeading = document.createElement("h1");
    childHeading.textContent = "Your cart is empty!";
    childHeading.classList.add("empty-cart-heading");
    element.append(childHeading);

    const childAnchor = document.createElement("a");
    childAnchor.textContent = "click to continue shopping";
    childAnchor.classList.add("empty-cart-link");
    childAnchor.href = "../games/";
    element.append(childAnchor);

    parent.append(element);
  });
}
