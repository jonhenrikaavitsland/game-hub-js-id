import { titleSection } from "./titleSection.js";
import { titleImage } from "./titleImage.js";
import { purchaseContainer } from "./purchaseContainer.js";

export function renderTitle(game, parent, title, data) {
  // Location to append.
  const parentContainer = parent;
  console.log(data);

  // Sets the title tag in head section.
  const titleTag = title;
  titleTag.textContent = `Game Hub | ${game.title}`;

  // First Section Start
  titleSection(game, parentContainer, data);
  titleImage(game, parentContainer);
  purchaseContainer(game, parentContainer);

  // Product description
}
