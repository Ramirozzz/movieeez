import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/movies";
import type { GenresResponse } from "../types/tmdbApi.types";

export const useGenres = () => {
  return useQuery<GenresResponse>({
    queryKey: ["genres"],
    queryFn: getGenres,
  });
};
