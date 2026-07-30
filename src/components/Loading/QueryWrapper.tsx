import { useState, useEffect } from "react";
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
  const [showLoading, setShowLoading] = useState(isLoading);
  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
      return;
    }

    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  if (showLoading) return <LoadingSpinner />;

  if (isError) {
    return <p>Something went wrong: {error?.message}</p>;
  }

  return <>{children}</>;
};

export default QueryWrapper;
