// the code on this page is rendering html
export function renderRelease(release, parentElement) {
  const releaseHtml = createHtmlObject(release);
  parentElement.append(releaseHtml);
}

export function renderReleases(releases, parentElement) {
  releases.forEach(function (release) {
    renderRelease(release, parentElement);
  });
}

export function createHtmlObject(release) {
  const linkUrl = `./../../games/title/?id=${release.id}`;

  const element = document.createElement("div");
  element.classList.add("game-card");

  const childUpperHalf = document.createElement("div");
  childUpperHalf.classList.add("game-card-img-wrap");
  element.append(childUpperHalf);

  const childImage = document.createElement("img");
  childImage.classList.add("cover");
  childImage.src = `${release.image}`;
  childImage.setAttribute("alt", `cover image of ${release.title}`);
  childUpperHalf.append(childImage);

  const childLowerHalf = document.createElement("section");
  childLowerHalf.classList.add("flex");
  element.append(childLowerHalf);

  const childTitle = document.createElement("h3");
  childTitle.classList.add("titles");
  childTitle.textContent = `${release.title}`;
  childLowerHalf.append(childTitle);

  const childPrice = document.createElement("p");
  childPrice.classList.add("prices");
  childPrice.textContent = `€ ${release.price}`;
  childLowerHalf.append(childPrice);

  const childButton = document.createElement("a");
  childButton.classList.add("cta", "cta-explore");
  childButton.textContent = "explore";
  childButton.href = linkUrl;
  childLowerHalf.append(childButton);

  return element;
}

export function clearReleaseList(parentElement) {
  parentElement.innerHTML = "";
}
