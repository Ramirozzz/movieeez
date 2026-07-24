import { api } from "./tmdbApi";
import type { Movie, MoviesResponse } from "../types/tmdbApi.types";

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

// Get trending movies
export const getTrendingMovies = async () => {
  const res = await api.get<MoviesResponse>("/trending/movie/week", {
    params: {
      region: "US",
      include_adult: false,
    },
  });
  return res.data;
};

// Get now playing movies
export const getNowPlayingMovies = async () => {
  const res = await api.get<MoviesResponse>("/movie/now_playing", {
    params: {
      region: "US",
      include_adult: false,
    },
  });
  return res.data;
};

// Get popular movies

export const getPopularMovies = async () => {
  const res = await api.get<MoviesResponse>("/movie/popular", {
    params: {
      region: "US",
      include_adult: false,
    },
  });

  return res.data;
};

// Get Top rated movies
export const getTopRatedMovies = async () => {
  const res = await api.get<MoviesResponse>("/movie/top_rated", {
    params: {
      region: "US",
      include_adult: false,
    },
  });

  return res.data;
};

// Get Upcoming movies
export const getUpcomingMovies = async () => {
  const res = await api.get<MoviesResponse>("/movie/upcoming", {
    params: {
      region: "US",
      include_adult: false,
    },
  });

  return res.data;
};

//Get movie by id

export const getMovie = async (id: number) => {
  const res = await api.get<Movie>(`/movie/${id}`, {
    params: {
      append_to_response: "credits",
    },
  });

  return res.data;
};
