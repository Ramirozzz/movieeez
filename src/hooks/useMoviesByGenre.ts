import { useQuery } from "@tanstack/react-query";
import { getAllMovies, getmoviesByGenre } from "../services/movies";
import type { MoviesResponse } from "../types/tmdbApi.types";

export const useMoviesByGenre = (genreId: number | null, page: number) => {
  return useQuery<MoviesResponse>({
    queryKey: ["movies by genre", { genreId, page }],
    queryFn: () =>
      genreId !== null ? getmoviesByGenre(genreId, page) : getAllMovies(page),
  });
};
