import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../services/movies";
import type { MoviesResponse } from "../types/tmdbApi.types";

export const useUpcomingMovies = () => {
  return useQuery<MoviesResponse>({
    queryKey: ["upcoming movies"],
    queryFn: getUpcomingMovies,
  });
};
