import GenresSlider from "../components/genres/GenresSlider";
import { useGenres } from "../hooks/useGenres";
import QueryWrapper from "../components/Loading/QueryWrapper";
import { useParams, useSearchParams } from "react-router-dom";
import MovieList from "../components/movies/MovieList";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";
import MoviesPagination from "../components/pagination/MoviesPagination";
import { IoIosArrowForward } from "react-icons/io";

const MoviesByGenrePage = () => {
  const { genreId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const selectedGenreId = genreId ? Number(genreId) : null;

  const {
    data: genres,
    isLoading: isGenresLoading,
    isError: isGenresError,
    error: genresError,
  } = useGenres();

  const {
    data: genreMovies,
    isLoading: isgenreMoviesLoading,
    isError: isGenreMoviesError,
    error: genreMoviesError,
  } = useMoviesByGenre(selectedGenreId, page);

  const isLoading = isGenresLoading || isgenreMoviesLoading;
  const isError = isGenresError || isGenreMoviesError;
  const error = genresError || genreMoviesError;

  if (!genres || !genreMovies) return null;

  // Handle pagination
  const handleNextPage = () => {
    if (page >= genreMovies.total_pages) return;
    setSearchParams({
      page: String(page + 1),
    });
  };

  const handlePrevPage = () => {
    setSearchParams({
      page: String(Math.max(1, page - 1)),
    });
  };

  const genreName =
    selectedGenreId === null
      ? "All Movies"
      : genres.genres.find((g) => g.id === selectedGenreId)?.name;

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} error={error}>
      {genres && genreMovies && (
        <section className="section">
          <h2 className=" flex items-center gap-2 md:text-2xl text-muted text-start pl-16 mt-40 ">
            Movies <IoIosArrowForward />{" "}
            <span className=" text-font font-bold">{genreName}</span>
          </h2>

          <GenresSlider genres={genres} selectedGenreId={selectedGenreId} />
          <div className="px-4 md:px-8 lg:px-16">
            {/* <h2 className="text-lg mt-6">{genreName}</h2> */}
            <MovieList genreMovies={genreMovies.results} />
          </div>

          <MoviesPagination
            page={genreMovies.page}
            totalPages={genreMovies.total_pages}
            hasPrevPage={genreMovies.page > 1}
            hasNextPage={genreMovies.page < genreMovies.total_pages}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        </section>
      )}
    </QueryWrapper>
  );
};

export default MoviesByGenrePage;
