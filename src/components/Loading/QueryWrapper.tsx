import type { ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface QueryWrapperProps {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  children: ReactNode;
}

const QueryWrapper = ({
  isLoading,
  isError,
  error,
  children,
}: QueryWrapperProps) => {
  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <p>Something went wrong: {error?.message}</p>;
  }

  return <>{children}</>;
};

export default QueryWrapper;
