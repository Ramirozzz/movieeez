// Movie types used almost on all movies
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  adult: boolean;
  video: boolean;
  genre_ids: number[];
  genres: { id: number; name: string }[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
  runtime: number;
  poster_path: string;
  backdrop_path: string | null;
  credits: CreditsResponse;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface CreditsResponse {
  id: number;
  cast: Actor[];
}

export type TrendingTime = "day" | "week";

// Types for genres
export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Genre[];
}

// Types for actor

export interface Actor {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

//  types for actor details
export interface ActorDetails {
  id: number;
  name: string;
  biography: string;
  birthday: string | null;
  deathday: string | null;
  place_of_birth: string | null;
  profile_path: string | null;
  popularity: number;
  known_for_department: string;
}

// Types for actor movies
export interface ActorMoviesResponse {
  cast: Movie[];
}

// Types for movie card used for movie sliders
export interface MovieCard {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path?: string | null;
}
