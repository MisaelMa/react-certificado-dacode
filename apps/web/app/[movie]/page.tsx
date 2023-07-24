import { getMovies } from "../../common/services/movies.service";
import MoviesPage from "../components/MoviesPage";

interface PageParams {
  params: {
    movie: string;
  };
}
export function generateStaticParams() {
  return [{ movie: 'popular' }, { movie: 'now_playing'}, { movie: 'top_rated' }, { movie: 'upcoming' }]
}
export default async function Page({ params }: PageParams) {
  const { movie } = params;
  const data = await getMovies(movie,{}, {
    next: { revalidate: 60 * 60, tags: ['collection'] },  
  });

  return (
    <>
      <MoviesPage list={movie} page={"1"} data={data}></MoviesPage>
    </>
  );
}
