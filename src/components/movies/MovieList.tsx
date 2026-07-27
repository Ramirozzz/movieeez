import { Link } from "react-router-dom";
import type { Movie } from "../../types/tmdbApi.types";
import placeholder from "../../assets/images/placeholder.png";

interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-8 mt-10">
      {movies.map((movie) => (
        <div key={movie.id} className="fade-in">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : placeholder
              }
              alt={movie.title}
              className="rounded-lg cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
