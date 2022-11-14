const BASE_URL = "/api/videogames";

export async function allGames() {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function eachGame(platform) {
  const res = await fetch(`${BASE_URL}/${platform}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function createGame(gameData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameData),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}
