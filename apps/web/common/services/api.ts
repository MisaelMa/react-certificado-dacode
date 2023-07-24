import { HttpClient } from "@crea.js/fetch";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjcwNjRiNTYzZDczMWNjOGNiMDhlZTYyMjNiZDk1OCIsInN1YiI6IjY0YmRhNDI0Yjg2NWViMDBjNTg4MzdhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ib0g-9iJEJaHp9kRb5NonA1mAIhgtMHTsi3hfqi2NNQ";
export const isProd = process.env.NODE_ENV !== "production";
export const api = new HttpClient("https://api.themoviedb.org/3", {
  Accept: "*/*",
  "Content-Type": "application/json",
  "X-Custom-Header": "foobar",
  Authorization: `Bearer ${token}`,
});
