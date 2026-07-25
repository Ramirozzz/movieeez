import { useQuery } from "@tanstack/react-query";
import { getActorDetails } from "../services/movies";

export const useGetActorDetails = (id: number) => {
  return useQuery({
    queryKey: ["actor details", { id }],
    queryFn: () => getActorDetails(id),
  });
};
