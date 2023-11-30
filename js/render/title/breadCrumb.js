export function breadCrumbTitle(game, parent) {
  const breadCrumbContainer = document.createElement("div");
  breadCrumbContainer.classList.add("bread-crumb-wrap");

  const breadCrumb = document.createElement("p");
  breadCrumb.classList.add("flex");
  breadCrumbContainer.append(breadCrumb);

  const linkHome = document.createElement("a");
  linkHome.href = "../../../";
  linkHome.textContent = "Home";
  breadCrumb.appendChild(linkHome);

  const separator = document.createTextNode(" > ");
  const separatorTwo = document.createTextNode(" > ");

  breadCrumb.appendChild(separator);

  const linkGames = document.createElement("a");
  linkGames.href = "../";
  linkGames.textContent = "Games";
  breadCrumb.appendChild(linkGames);

  breadCrumb.appendChild(separatorTwo);

  const linkTitle = document.createElement("span");
  linkTitle.textContent = game.title;
  linkTitle.style.color = "var(--fancy-green)";
  breadCrumb.appendChild(linkTitle);

  parent.append(breadCrumbContainer);
}
