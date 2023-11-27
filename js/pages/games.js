import { url } from "./../data/constants.js";
import { fetchData } from "./../data/fetchApi.js";
import { filterGames } from "./../data/data.js";
import { clearReleaseList } from "./../render/renderLists.js";
import { renderReleases } from "./../render/renderLists.js";
import { createErrorMessage } from "./../error/createMessage.js";

const parentGames = document.querySelector(".games-list-container");
const headingGames = "Available Games";

function renderHeading(heading, parent) {
  parent.innerHTML = `<h1>${heading}</h1>`;
}

export async function createGames() {
  try {
    const games = await fetchData(url);
    const listOfGames = filterGames(games);
    clearReleaseList(parentGames);
    renderHeading(headingGames, parentGames);
    renderReleases(listOfGames, parentGames, "games");
  } catch (error) {
    console.log("An error occurred", error);
    createErrorMessage(parentGames, error);
  }
}
