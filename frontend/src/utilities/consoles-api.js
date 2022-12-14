const BASE_URL = "/api/consoles";

export async function allConsoles() {
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

export async function eachConsole(platform) {
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
