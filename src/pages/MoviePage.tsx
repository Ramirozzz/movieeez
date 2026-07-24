import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { useRelatedMovies } from "../hooks/useRelatedMovies";
import QueryWrapper from "../components/Loading/QueryWrapper";
import MovieDetails from "../components/movies/MovieDetails";
import MovieSlider from "../components/movies/MovieSlider";
import ActorSlider from "../components/actors/ActorSlider";

const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const {
    data: movie,
    isLoading: isMovieLoading,
    isError: isMovieError,
    error: movieError,
  } = useMovie(movieId);

  const {
    data: relatedMovies,
    isLoading: isRelatedMoviesLoading,
    isError: isRelatedMovieError,
    error: relatedMovieError,
  } = useRelatedMovies(movieId);

  const isLoading = isMovieLoading || isRelatedMoviesLoading;

  const isError = isMovieError || isRelatedMovieError;

  const error = movieError || relatedMovieError;

  if (!movie || !relatedMovies) return null;

  return (
    <QueryWrapper isLoading={isLoading} isError={isError} error={error}>
      {movie && relatedMovies && (
        <section>
          <MovieDetails movie={movie} />
          <div className=" pl-4 lg:pl-14 pb-15">
            <div className="relative py-4">
              <ActorSlider title="Movie Cast" actors={movie.credits.cast} />
            </div>
            <div className="relative py-4 mt-5">
              <MovieSlider
                title="Related movies"
                movies={relatedMovies.results}
              />
            </div>
          </div>
        </section>
      )}
    </QueryWrapper>
  );
};

export default MoviePage;
