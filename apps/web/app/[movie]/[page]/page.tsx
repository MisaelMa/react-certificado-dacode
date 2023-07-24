import { getMovies } from "../../../common/services/movies.service";
import MoviesPage from "../../components/MoviesPage";

interface PageParams {
  params: {
    movie: string;
    page: string;
  };
}
export const revalidate = 60 * 60
export default async function Page({ params }: PageParams) {
  const { movie, page = '1' } = params;
  const data = await getMovies(movie, {
    page,
  },{
      next: { revalidate: 60 * 60,tags: ['collection']  },
      
  });

  return (
    <>
      <MoviesPage list={movie} page={page} data={data}></MoviesPage>
    </>
  );
}
