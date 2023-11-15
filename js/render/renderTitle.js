export function createTitleHtml(details, parent, title) {
  parent.innerHTML = `<div class="flex breadcrumb">
  <p><a href="./../../../index.html">Home</a> > <a href="../">Games</a> > <span>${details.title}</span>
  </div>`;

  parent.innerHTML += `<div class="title-image">
  <img src="${details.image}" alt="cover image for ${details.title}">
</div>
<section>
  <h1>${details.title}</h1>
  <p>Released: ${details.released}</p>
  <p>${details.description}</p>
  <p>Price: € ${details.price}</p>
  <p>Genre: ${details.genre}</p>
  <p>Age rating: ${details.ageRating}</p>
  <p><a href="../../account/" class="add-fancy">Login</a> and save € ${
    details.onSale ? `${details.price - details.discountedPrice}` : "0"
  }</p>
  <button class="cta cta-sale">ADD <i class="fa-solid fa-cart-plus add-fancy"></i></button>
</section>`;
  title.innerHTML = `Game Hub | ${details.title}`;
}
