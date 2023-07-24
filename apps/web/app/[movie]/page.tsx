import { getMovies } from "../../common/services/movies.service";
import MoviesPage from "../components/MoviesPage";

interface PageParams {
  params: {
    movie: string;
  };
}

const geData =async  (movie: string)=> {
return await getMovies(movie,{}, {
    next: { revalidate: 60 * 60, tags: ['collection'] },  
  });
} 
export default async function Page({ params }: PageParams) {
  const { movie } = params;
  const data = await geData(movie)

  return (
    <>
      <MoviesPage list={movie} page={"1"} data={data}></MoviesPage>
    </>
  );
}
