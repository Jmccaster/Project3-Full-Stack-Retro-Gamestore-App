import * as videoGamesAPI from "./videoGames-api";

export async function allGames() {
  const response = await videoGamesAPI.allGames();
  return response;
}

export async function eachGame(platform) {
  const response = await videoGamesAPI.eachGame(platform);
  console.log(response);
  return response;
}
