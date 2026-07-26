import { Link } from "react-router-dom";
import type { MoviesResponse } from "../../types/tmdbApi.types";
import placeholder from "../../assets/images/placeholder.png";

interface SearchResultsProps {
  searchResults: MoviesResponse;
}
const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-8">
      {searchResults.results.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : placeholder
              }
              alt={movie.title}
              className="rounded-md cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
