import type { ReactNode } from "react";

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
  if (isLoading)
    return (
      <p className="text-lg flex justify-center items-center h-screen">
        LOADING...
      </p>
    );

  if (isError) {
    return <p>Something went wrong: {error?.message}</p>;
  }

  return <>{children}</>;
};

export default QueryWrapper;
