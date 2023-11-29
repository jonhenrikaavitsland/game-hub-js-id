import { getId } from "./../data/getId.js";
import { url } from "./../data/constants.js";
import { fetchData } from "./../data/fetchApi.js";
import { createErrorMessage } from "./../error/createMessage.js";
import { renderTitle } from "../render/renderTitle.js";
import { reviews } from "../data/getReviews.js";
import { createStars } from "../data/createStars.js";
import { clearReleaseList } from "./../render/renderLists.js";

const parentTitle = document.querySelector(".title-container");
const title = document.querySelector("title");

export async function createTitle() {
  try {
    const id = getId();
    const newUrl = url + `${id}`;
    const game = await fetchData(newUrl);
    const stars = createStars(reviews, game);
    clearReleaseList(parentTitle);
    renderTitle(game, parentTitle, title, stars);
  } catch (error) {
    console.log("An error occurred", error);
    createErrorMessage(parentTitle, error);
  }
}
