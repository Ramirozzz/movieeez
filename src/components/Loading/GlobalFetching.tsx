import { useIsFetching } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

const GlobalFetching = () => {
  const isFetching = useIsFetching();
  if (isFetching === 0) return null;

  return <LoadingSpinner />;
};

export default GlobalFetching;
