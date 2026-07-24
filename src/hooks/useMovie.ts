import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../services/movies";

export const useMovie = (id: number) => {
  return useQuery({
    queryKey: ["movie", { id }],
    queryFn: () => getMovie(id),
    staleTime: 1000 * 60 * 10,
  });
};
