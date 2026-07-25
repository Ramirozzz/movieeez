import { useQuery } from "@tanstack/react-query";
import { getActorMovies } from "../services/movies";

export const useActorMovies = (id: number) => {
  return useQuery({
    queryKey: ["actor movies", { id }],
    queryFn: () => getActorMovies(id),
  });
};
