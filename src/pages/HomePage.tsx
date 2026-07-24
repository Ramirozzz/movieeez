import Hero from "../components/hero/Hero";
import MovieSlider from "../components/movies/MovieSlider";
import { useNowplaying } from "../hooks/useNowPlaying";
import { usePopularMovies } from "../hooks/usePopularMovies";
import QueryWrapper from "../components/Loading/QueryWrapper";
import { useAllMovies } from "../hooks/useAllMovies";
import { useTopRatedMovies } from "../hooks/useTopRated";
import { useUpcomingMovies } from "../hooks/useUpcoming";
import { useTrending } from "../hooks/useTrending";

const HomePage = () => {
  const {
    data: allMovies,
    isLoading: isLoadingAllMovies,
    isError: isErrorAllMovies,
    error: errorAllMovies,
  } = useAllMovies();

  const {
    data: trendingMovies,
    isLoading: isLoadingTrendingMovies,
    isError: isErrorTrendingMovies,
    error: errorTrendingMovies,
  } = useTrending();

  const {
    data: nowPlayingMovies,
    isLoading: isLoadingNowPlaying,
    isError: isErrorNowPlaying,
    error: errorNowPlaying,
  } = useNowplaying();

  const {
    data: popularMovies,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
    error: errorPopular,
  } = usePopularMovies();

  const {
    data: topRatedMovies,
    isLoading: isLoadingTopRatedMovies,
    isError: isErrorTopRatedMovies,
    error: errorTopRatedMovies,
  } = useTopRatedMovies();

  const {
    data: upcomingMovies,
    isLoading: isLoadingUpcomingMovies,
    isError: isErrorUpcomingMovies,
    error: errorUpcomingMovies,
  } = useUpcomingMovies();

  const isLoading =
    isLoadingAllMovies ||
    isLoadingTrendingMovies ||
    isLoadingNowPlaying ||
    isLoadingPopular ||
    isLoadingTopRatedMovies ||
    isLoadingUpcomingMovies;
  const isError =
    isErrorAllMovies ||
    isErrorTrendingMovies ||
    isErrorNowPlaying ||
    isErrorPopular ||
    isErrorTopRatedMovies ||
    isErrorUpcomingMovies;
  const error =
    errorAllMovies ||
    errorTrendingMovies ||
    errorNowPlaying ||
    errorPopular ||
    errorTopRatedMovies ||
    errorUpcomingMovies;

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} error={error}>
      {allMovies &&
        trendingMovies &&
        nowPlayingMovies &&
        popularMovies &&
        topRatedMovies &&
        upcomingMovies && (
          <>
            <Hero movies={allMovies} />

            <div className="mt-8 pl-4 lg:pl-16">
              <MovieSlider title="Trending" movies={trendingMovies.results} />
              <MovieSlider
                title="Now Playing"
                movies={nowPlayingMovies.results}
              />

              <MovieSlider title="Top Rated" movies={topRatedMovies.results} />
              <MovieSlider
                title="Most Popular"
                movies={popularMovies.results}
              />
              <MovieSlider title="Upcoming" movies={upcomingMovies.results} />
            </div>
          </>
        )}
    </QueryWrapper>
  );
};

export default HomePage;
