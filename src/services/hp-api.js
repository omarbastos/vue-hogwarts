import axios from "axios";
const baseUrl = "http://hp-api.herokuapp.com/api";
/*
 *  Fetch list of the top 50 stories
 *  returns stories[].
 */
export async function getAllCharacters() {
  let characters = [];
  const response = await axios.get(`${baseUrl}/characters`, {});
  characters = response.data;
  return characters;
}
