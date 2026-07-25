import GenresSlider from "../components/genres/GenresSlider";
import { useGenres } from "../hooks/useGenres";
import QueryWrapper from "../components/Loading/QueryWrapper";
import { useParams, useSearchParams } from "react-router-dom";
import MovieList from "../components/movies/MovieList";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";

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

  const { data: genreMovies } = useMoviesByGenre(selectedGenreId, page);

  const isLoading = isGenresLoading;
  const isError = isGenresError;
  const error = genresError;

  if (!genres || !genreMovies) return null;

  const genreName =
    selectedGenreId === null
      ? "All Movies"
      : genres.genres.find((g) => g.id === selectedGenreId)?.name;

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} error={error}>
      {genres && (
        <section className="section">
          <h1 className=" md:text-4xl text-center mt-35 ">Movies</h1>

          <GenresSlider genres={genres} selectedGenreId={selectedGenreId} />
          <div className="px-4 md:px-8 lg:px-16">
            <h2 className="text-lg mt-6">{genreName}</h2>
            <MovieList genreMovies={genreMovies.results} />
          </div>
        </section>
      )}
    </QueryWrapper>
  );
};

export default MoviesByGenrePage;
