import { useWatchlist } from "../hooks/useWatchList";
import MovieList from "../components/movies/MovieList";

const WatchlistPage = () => {
  const { watchlist } = useWatchlist();
  return (
    <section className="min-h-screen px-4 py-20 lg:px-16">
      <h2 className=" md:text-2xl font-bold mt-20 ">My Wishlist</h2>

      {watchlist.length === 0 ? (
        <p className="text-lg md:text-xl text-muted text-center pt-35">
          No movies added yet.
        </p>
      ) : (
        <MovieList movies={watchlist} />
      )}
    </section>
  );
};

export default WatchlistPage;
