import { RequestBase } from "@crea.js/fetch/base";
import { api } from "./api";

export interface Pagination {
  page: number;
  results?: Movie[] | null;
  total_pages: number;
  total_results: number;
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const point = "movie";

/**
 *
 * @param query
 */
export const getMovies = async (
  type: string,
  query = {},
  options: RequestBase = {}
) => {
  const params = new URLSearchParams(query);
  return api
    .get<Pagination>(`${point}/${type}?${params}`, options)
    .then((res) => res);
};
