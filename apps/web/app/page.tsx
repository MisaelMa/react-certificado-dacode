import { Button, Header } from "@ui/react";
import Image from "next/image";
import { getMovies } from "../common/services/movies.service";
import StarRating from "./components/Ratings";
import MoviesList from "./components/MoviesList";
import MoviesPage from "./components/MoviesPage";

export default async function Page() {
  const data  = await getMovies("now_playing",{},  {
      next: { revalidate: 60 * 60 },
    });
  return (
    <>
      <MoviesPage page={'1'} data={data} ></MoviesPage>
    </>
  );
}
