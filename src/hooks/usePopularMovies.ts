import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/movies";

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ["popular movies"],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 10,
  });
};
