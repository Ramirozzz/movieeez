import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import { useWatchlist } from "../../hooks/useWatchList";
import type { Movie } from "../../types/tmdbApi.types";

interface AddToWatchlistProps {
  movie: Movie;
}

const AddToWatchlist: React.FC<AddToWatchlistProps> = ({ movie }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const isSaved = isInWatchlist(movie.id);
  return (
    <div className="group relative inline-block">
      <button
        className="bg-white/15 rounded-full p-3 hover:bg-white/20 transition-all duration-300 "
        onClick={() =>
          isSaved ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
        }
        aria-label={`Add ${movie.title} to watchlist`}
      >
        {isSaved ? <FaCheck size={22} /> : <FiPlus size={22} />}
      </button>
      <span
        className=" absolute
    left-1/2
    top-full
    mt-2
    -translate-x-1/2
    translate-y-1
    whitespace-nowrap
    rounded-lg
    bg-neutral-900
    px-3
    py-1.5
    text-xs
    text-white
    opacity-0
    transition-all
    duration-200
    group-hover:translate-y-0
    group-hover:opacity-100"
      >
        Watchlist
      </span>
    </div>
  );
};

export default AddToWatchlist;
