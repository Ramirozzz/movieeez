import { api } from "./tmdbApi";
import type { MoviesResponse } from "../types/tmdbApi.types";

// Get all movies
export const getAllMovies = async () => {
  const res = await api.get<MoviesResponse>("/discover/movie", {
    params: {
      region: "SE",
      include_adult: false,
    },
  });
  return res.data;
};

// Get now playing movies
export const getNowPlayingMovies = async () => {
  const res = await api.get<MoviesResponse>("/movie/now_playing", {
    params: {
      region: "SE",
      include_adult: false,
    },
  });
  return res.data;
};
