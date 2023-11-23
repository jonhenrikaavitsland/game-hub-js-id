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
    renderReleases(newReleases, parentNewReleases);
    clearReleaseList(parentTrendingNow);
    renderReleases(trendingNow, parentTrendingNow);
  } catch (error) {
    console.log("An error occurred", error);
    createErrorMessage(parentNewReleases, error, parentTrendingNow);
  }
}
