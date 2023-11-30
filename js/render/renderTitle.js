import { titleSection } from "./title/titleSection.js";
import { titleImage } from "./title/titleImage.js";
import { purchaseContainer } from "./title/purchaseContainer.js";
import { productDescription } from "./title/productDescription.js";
import { communityUserReviews } from "./title/communityUserReviews.js";
import { breadCrumbTitle } from "./title/breadCrumb.js";

export function renderTitle(game, parent, title, data) {
  // Sets the title tag in head section.
  const titleTag = title;
  titleTag.textContent = "Game Hub | " + game.title;

  // First Section Start
  breadCrumbTitle(game, parent);
  titleSection(game, parent, data);
  titleImage(game, parent);
  purchaseContainer(game, parent);
  productDescription(game, parent);
  communityUserReviews(game, parent, data);
}
