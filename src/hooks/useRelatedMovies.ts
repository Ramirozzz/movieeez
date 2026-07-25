import { useQuery } from "@tanstack/react-query";
import { getRelatedMovies } from "../services/movies";
import type { MoviesResponse } from "../types/tmdbApi.types";

export const useRelatedMovies = (id: number) => {
  return useQuery<MoviesResponse>({
    queryKey: ["related movies", { id }],
    queryFn: () => getRelatedMovies(id),
  });
};
