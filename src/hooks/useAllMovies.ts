import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../services/movies";
import type { MoviesResponse } from "../types/tmdbApi.types";

export const useAllMovies = () => {
  return useQuery<MoviesResponse>({
    queryKey: ["movies"],
    queryFn: () => getAllMovies(),
  });
};
