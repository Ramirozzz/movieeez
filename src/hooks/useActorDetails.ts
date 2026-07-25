import { useQuery } from "@tanstack/react-query";
import { getActorDetails } from "../services/movies";
import type { ActorDetails } from "../types/tmdbApi.types";

export const useGetActorDetails = (id: number) => {
  return useQuery<ActorDetails>({
    queryKey: ["actor details", { id }],
    queryFn: () => getActorDetails(id),
  });
};
