import { useQuery } from "@tanstack/react-query";
import type { MoviesResponse } from "../types/tmdbApi.types";
import { searchMovies } from "../services/movies";

export const useSearchMovies = (query: string, page: number) => {
  return useQuery<MoviesResponse>({
    queryKey: ["search movies", { query, page }],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
  });
};
