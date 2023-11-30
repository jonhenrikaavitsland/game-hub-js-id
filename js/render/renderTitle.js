import { titleSection } from "./titleSection.js";
import { titleImage } from "./titleImage.js";
import { purchaseContainer } from "./purchaseContainer.js";
import { productDescription } from "./productDescription.js";

export function renderTitle(game, parent, title, data) {
  // Sets the title tag in head section.
  const titleTag = title;
  titleTag.textContent = "Game Hub | " + game.title;

  // First Section Start
  titleSection(game, parent, data);
  titleImage(game, parent);
  purchaseContainer(game, parent);
  productDescription(game, parent);

  // Product description
}
