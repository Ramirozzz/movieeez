import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../services/movies";
import type { Movie } from "../types/tmdbApi.types";

export const useMovie = (id: number) => {
  return useQuery<Movie>({
    queryKey: ["movie", { id }],
    queryFn: () => getMovie(id),
    staleTime: 1000 * 60 * 10,
  });
};
