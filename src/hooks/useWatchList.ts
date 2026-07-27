import { useContext } from "react";
import { WatchListContext } from "../contexts/WatchListContext";

export const useWatchlist = () => {
  const context = useContext(WatchListContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
};
