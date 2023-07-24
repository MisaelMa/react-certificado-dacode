import { Movie } from "../../common/services/movies.service";
import StarRating from "./Ratings";

interface MoviesProps {
  movies: Movie[]
}
const MoviesList: React.FC<MoviesProps> = (props) => {
  const {movies} = props
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2   gap-6">
      {movies.map((m, index) => (
        <div className="relative rounded-3xl overflow-hidden shadow-lg h-80 w-[13rem]" key={index}>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${m.poster_path}`}
            className="h-80 w-[13rem] bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-105"
            alt={m.title}
          />
          <div className="absolute inset-0 flex p-5 justify-center h-full bg-opacity-75 bg-[#5141EA] opacity-0 hover:opacity-100 transition duration-300">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold mt-5">{m.title}</h2>
              <p className="text-xs mt-5 text-left line-clamp-7">
                {m.overview}
              </p>
              <div className="absolute bottom-0 left-0 w-full p-5 bg-opacity-75 bg-[#5141EA]">
                <StarRating
                  vote_average={m.vote_average}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MoviesList;
