import { clearReleaseList, renderReleases } from "./../render/renderLists.js";
import { url } from "./../data/constants.js";
import { fetchData } from "./../data/fetchApi.js";
import { filterNewReleases, filterTrendingNow } from "./../data/data.js";
import { createErrorMessage } from "../error/createMessage.js";

const parentNewReleases = document.querySelector(".new-releases-container");
const parentTrendingNow = document.querySelector(".trending-now-container");


export async function createHome() {
  try {
    const games = await fetchData(url);
    const newReleases = filterNewReleases(games);
    const trendingNow = filterTrendingNow(games);
    clearReleaseList(parentNewReleases);
    renderReleases(newReleases, parentNewReleases, "home");
    clearReleaseList(parentTrendingNow);
    renderReleases(trendingNow, parentTrendingNow, "home");
  } catch (error) {
    console.log("An error occurred", error);
    createErrorMessage(parentNewReleases, error, parentTrendingNow);
  }
}

export const headingContainer = document.querySelector(".headings");
const headingH2 = document.querySelector(".headings h2");

// Hides the alternating container of game-cards.
export function hideContainer() {
  if (headingH2.textContent === "New releases") {
    headingH2.textContent = "Trending now";
    parentNewReleases.classList.add("hidden");
    parentTrendingNow.classList.remove("hidden");
  } else {
    headingH2.textContent = "New releases";
    parentTrendingNow.classList.add("hidden");
    parentNewReleases.classList.remove("hidden");
  }
}