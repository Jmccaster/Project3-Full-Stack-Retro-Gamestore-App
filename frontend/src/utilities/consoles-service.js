import * as consolesAPI from "./consoles-api";

export async function allConsoles() {
  const response = await consolesAPI.allConsoles();
  return response;
}

export async function eachConsole(platform) {
  const response = await consolesAPI.eachConsole(platform);
  console.log(response);
  return response;
}
