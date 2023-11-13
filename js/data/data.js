export function filterNewReleases(data) {
  const games = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].released >= 2008) {
      games.push(data[i]);
    }
  }
  games.shift();
  return games;
}

export function filterTrendingNow(data) {
  const games = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].favorite) {
      games.push(data[i]);
    }
  }
  games.push(games[0]);
  return games;
}

export function filterGames(data) {
  const games = data;
  games.push(data[0]);
  games.push(data[1]);
  return games;
}

// export const newReleases = filterNewReleases(games);
// export const trendingNow = filterTrendingNow(games);
// export const listOfGames = filterGames(games);
