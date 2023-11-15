import { getId } from "./../data/getId.js";
import { url } from "./../data/constants.js";
import { fetchData } from "./../data/fetchApi.js";
import { createErrorMessage } from "./../error/createMessage.js";
import { createTitleHtml } from "../render/renderTitle.js";

const parentTitle = document.querySelector(".title-container");
const title = document.querySelector("title");

export async function createTitle() {
  try {
    const id = getId();
    const newUrl = url + `${id}`;
    const game = await fetchData(newUrl);
    createTitleHtml(game, parentTitle, title);
  } catch (error) {
    console.log("An error occurred", error);
    createErrorMessage(parentTitle, error);
  }
}
