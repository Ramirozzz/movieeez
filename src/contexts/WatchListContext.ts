import { createContext } from "react";
import type { Movie } from "../types/tmdbApi.types";

interface WatchListContext {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
}

export const WatchListContext = createContext<WatchListContext | null>(null);
