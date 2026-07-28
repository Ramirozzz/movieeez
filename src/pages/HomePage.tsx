import Hero from "../components/hero/Hero";
import MovieSlider from "../components/movies/MovieSlider";
import QueryWrapper from "../components/Loading/QueryWrapper";
import { useSearchParams } from "react-router-dom";
import type { TrendingTime } from "../types/tmdbApi.types";
import TrendingSlider from "../components/movies/TrendingSlider";
import { useHomeMovies } from "../hooks/useHomeMovies";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const time = (searchParams.get("time") as TrendingTime) || "day";

  //Update title based on selected trending time
  const trendingTitle =
    time === "day" ? "Trending today" : "Trending this week";

  const setTime = (value: TrendingTime) => {
    setSearchParams({
      time: value,
    });
  };

  const {
    trendingMovies,
    allMovies,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    isLoading,
    isError,
    error,
  } = useHomeMovies(time);

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

            <div className="py-8 pl-4 lg:pl-16">
              <TrendingSlider
                title={trendingTitle}
                movies={trendingMovies.results}
                time={time}
                onSwitch={setTime}
              />

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
