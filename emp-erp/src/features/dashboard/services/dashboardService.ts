import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function getEmployees() {
  const response = await axios.get(`${BASE_URL}/users`);

  return response.data;
}