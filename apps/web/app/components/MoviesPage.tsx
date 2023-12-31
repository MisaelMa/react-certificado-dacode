import { Movie, Pagination } from "../../common/services/movies.service";
import MoviesList from "./MoviesList";
import PaginationComponent from "./PaginationComponent";

interface MoviesProps {
  data: Pagination,
  list?: string
  page: string
}
const MoviePage: React.FC<MoviesProps> = (props) => {
  const { data, list = 'now_playing', page } = props;
  const {results:movies, total_pages,total_results} = data
  const transformMovieName = (movieName) => {
  const formattedName = movieName.replace(/_/g, ' ').toLowerCase();
  return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
};
  return (
    <>
      <h1 className="text-white text-3xl font-bold my-10">{transformMovieName(list)}</h1>
      <MoviesList movies={movies}></MoviesList>

      <PaginationComponent list={list} page={parseInt(page)} total_pages={total_pages}/>
    </>
  );
};
export default MoviePage;
