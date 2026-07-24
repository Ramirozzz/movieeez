import Hero from "../components/hero/Hero";
import MovieSlider from "../components/movies/MovieSlider";
import { useNowplaying } from "../hooks/useNowPlaying";
import { usePopularMovies } from "../hooks/usePopularMovies";
import QueryWrapper from "../components/Loading/QueryWrapper";
import { useAllMovies } from "../hooks/useAllMovies";

const HomePage = () => {
  const {
    data: allMovies,
    isLoading: isLoadingAllMovies,
    isError: isErrorAllMovies,
    error: errorAllMovies,
  } = useAllMovies();

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

  const isLoading =
    isLoadingAllMovies || isLoadingNowPlaying || isLoadingPopular;
  const isError = isErrorAllMovies || isErrorNowPlaying || isErrorPopular;
  const error = errorAllMovies || errorNowPlaying || errorPopular;

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} error={error}>
      {allMovies && nowPlayingMovies && popularMovies && (
        <>
          <Hero movies={allMovies} />

          <div className="mt-8 pl-4 lg:pl-16">
            <MovieSlider
              title="Now Playing"
              movies={nowPlayingMovies.results}
            />

            <MovieSlider title="Most Popular" movies={popularMovies.results} />
          </div>
        </>
      )}
    </QueryWrapper>
  );
};

export default HomePage;
