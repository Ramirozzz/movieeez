import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../services/movies";

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: ["upcoming movies"],
    queryFn: getUpcomingMovies,
  });
};
