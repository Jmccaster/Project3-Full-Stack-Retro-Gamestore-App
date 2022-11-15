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

export async function createGame(gameData) {
  const response = await videoGamesAPI.createGame(gameData);
  console.log(response);
  return response;
}

export async function editGame(gameData, gameId) {
  console.log("service");
  const response = await videoGamesAPI.editGame(gameData, gameId);
  console.log(response);
  return response;
}
