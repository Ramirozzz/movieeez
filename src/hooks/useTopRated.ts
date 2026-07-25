import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../services/movies";
import type { MoviesResponse } from "../types/tmdbApi.types";

export const useTopRatedMovies = () => {
  return useQuery<MoviesResponse>({
    queryKey: ["top rated movies"],
    queryFn: getTopRatedMovies,
  });
};
