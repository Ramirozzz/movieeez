import { useQuery } from "@tanstack/react-query";
import { getRelatedMovies } from "../services/movies";

export const useRelatedMovies = (id: number) => {
  return useQuery({
    queryKey: ["related movies", { id }],
    queryFn: () => getRelatedMovies(id),
  });
};
