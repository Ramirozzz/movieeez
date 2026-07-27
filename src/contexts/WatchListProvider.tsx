import { WatchListContext } from "./WatchListContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Movie } from "./../types/tmdbApi.types";

const WatchlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [watchlist, setWatchlist] = useLocalStorage<Movie[]>("wishlist", []);

  const addToWatchlist = (movie: Movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  const isInWatchlist = (id: number) => {
    return watchlist.some((movie) => movie.id === id);
  };

  return (
    <WatchListContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchlistProvider;
