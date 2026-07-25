import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../services/movies";
import type { MoviesResponse, TrendingTime } from "../types/tmdbApi.types";

export const useTrending = (time: TrendingTime) => {
  return useQuery<MoviesResponse>({
    queryKey: ["trending movies", { time }],
    queryFn: () => getTrendingMovies(time),
    staleTime: 1000 * 60 * 10,
    placeholderData: (previousData) => previousData,
  });
};
