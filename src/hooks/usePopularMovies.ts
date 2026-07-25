import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/movies";
import type { MoviesResponse } from "../types/tmdbApi.types";

export const usePopularMovies = () => {
  return useQuery<MoviesResponse>({
    queryKey: ["popular movies"],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 10,
  });
};
