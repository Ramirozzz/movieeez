import { useQuery } from "@tanstack/react-query";
import { getAllMovies, getmoviesByGenre } from "../services/movies";

export const useMoviesByGenre = (genreId: number | null, page: number) => {
  return useQuery({
    queryKey: ["movies by genre", { genreId, page }],
    queryFn: () =>
      genreId !== null ? getmoviesByGenre(genreId, page) : getAllMovies(),
  });
};
