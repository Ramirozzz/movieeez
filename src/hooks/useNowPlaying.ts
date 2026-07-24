import { useQuery } from "@tanstack/react-query";
import type { MoviesResponse } from "../types/tmdbApi.types";
import { getNowPlayingMovies } from "../services/movies";

export const useNowplaying = () => {
  return useQuery<MoviesResponse>({
    queryKey: ["now playing movies"],
    queryFn: getNowPlayingMovies,
    staleTime: 1000 * 60 * 10,
  });
};
