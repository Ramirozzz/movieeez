import { useQuery } from "@tanstack/react-query";
import { getActorMovies } from "../services/movies";
import type { ActorMoviesResponse } from "../types/tmdbApi.types";

export const useActorMovies = (id: number) => {
  return useQuery<ActorMoviesResponse>({
    queryKey: ["actor movies", { id }],
    queryFn: () => getActorMovies(id),
  });
};
