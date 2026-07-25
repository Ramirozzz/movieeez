import { useTrending } from "./useTrending";
import { useAllMovies } from "./useAllMovies";
import { useNowplaying } from "./useNowPlaying";
import { usePopularMovies } from "./usePopularMovies";
import { useTopRatedMovies } from "./useTopRated";
import { useUpcomingMovies } from "./useUpcoming";
import type { TrendingTime } from "../types/tmdbApi.types";

export const useHomeMovies = (time: TrendingTime) => {
  const trending = useTrending(time);
  const allMovies = useAllMovies();
  const nowPlaying = useNowplaying();
  const popular = usePopularMovies();
  const topRated = useTopRatedMovies();
  const upcoming = useUpcomingMovies();

  const isLoading =
    trending.isLoading ||
    allMovies.isLoading ||
    nowPlaying.isLoading ||
    popular.isLoading ||
    topRated.isLoading ||
    upcoming.isLoading;

  const isError =
    trending.isError ||
    allMovies.isError ||
    nowPlaying.isError ||
    popular.isError ||
    topRated.isError ||
    upcoming.isError;

  const error =
    trending.error ||
    allMovies.error ||
    nowPlaying.error ||
    popular.error ||
    topRated.error ||
    upcoming.error;

  return {
    trendingMovies: trending.data,
    allMovies: allMovies.data,
    nowPlayingMovies: nowPlaying.data,
    popularMovies: popular.data,
    topRatedMovies: topRated.data,
    upcomingMovies: upcoming.data,
    isLoading,
    isError,
    error,
  };
};
