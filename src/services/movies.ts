import { api } from "./tmdbApi";
import type {
  ActorMoviesResponse,
  ActorDetails,
  Movie,
  MoviesResponse,
  GenresResponse,
  TrendingTime,
} from "../types/tmdbApi.types";

// Get all movies
export const getAllMovies = async (page = 1) => {
  const res = await api.get<MoviesResponse>("/discover/movie", {
    params: {
      region: "US",
      page,
      include_adult: false,
    },
  });
  return res.data;
};

// Get trending movies
export const getTrendingMovies = async (time: TrendingTime) => {
  const res = await api.get<MoviesResponse>(`/trending/movie/${time}`, {
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
      append_to_response: "credits,videos",
    },
  });

  return res.data;
};

// Get actor details

export const getActorDetails = async (id: number) => {
  const res = await api.get<ActorDetails>(`/person/${id}`);

  return res.data;
};

// Get related movies

export const getRelatedMovies = async (id: number) => {
  const res = await api.get<MoviesResponse>(`/movie/${id}/similar`, {
    params: {
      include_adult: false,
    },
  });

  return res.data;
};

// Get actor movies

export const getActorMovies = async (id: number) => {
  const res = await api.get<ActorMoviesResponse>(
    `/person/${id}/movie_credits`,
    {
      params: {
        include_adult: false,
      },
    },
  );

  return res.data;
};

// Get genres

export const getGenres = async () => {
  const res = await api.get<GenresResponse>("/genre/movie/list", {
    params: {
      region: "US",
    },
  });

  return res.data;
};

// Get movies by genre

export const getmoviesByGenre = async (genreId: number, page = 1) => {
  const res = await api.get<MoviesResponse>("/discover/movie", {
    params: {
      region: "US",
      with_genres: genreId,
      page,
      include_adult: false,
    },
  });

  return res.data;
};

// Search movies

export const searchMovies = async (query: string, page = 1) => {
  const res = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
    },
  });

  return res.data;
};

//Get movie Videos/ trailer

// export const getMovieVideos = async (movieId: number) => {
//   const res = await api.get<MovieVideosResponse>(`/movie/${movieId}?append_to_response=videos`, {
//     params: {
//       language: "en-US",
//     },
//   });
// };
