import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../services/movies";

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ["top rated movies"],
    queryFn: getTopRatedMovies,
  });
};
