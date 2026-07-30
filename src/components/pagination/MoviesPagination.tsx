import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface MoviesPaginationProps {
  page: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
}
const MoviesPagination: React.FC<MoviesPaginationProps> = ({
  page,
  totalPages,
  onNextPage,
  onPrevPage,
  hasNextPage,
  hasPrevPage,
}) => {
  return (
    <div className="flex justify-center gap-4 my-15">
      <button
        className="flex items-center gap-2 text-sm text-font font-bold bg-white/15 px-3 py-2.5 rounded-md disabled:opacity-40 disabled:pointer-events-none"
        disabled={!hasPrevPage}
        onClick={onPrevPage}
      >
        <IoIosArrowBack />
      </button>
      <span className="text-base text-font flex items-center">
        {page} / {totalPages}
      </span>
      <button
        className="flex items-center gap-2 text-sm text-font font-bold bg-white/15 px-3 py-2.5 rounded-md disabled:opacity-40 disabled:pointer-events-none"
        disabled={!hasNextPage}
        onClick={onNextPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MoviesPagination;
