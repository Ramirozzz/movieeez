import { useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import QueryWrapper from "../components/Loading/QueryWrapper";
import MovieDetails from "../components/movies/MovieDetails";
import MovieSlider from "../components/movies/MovieSlider";

const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const {
    data: movie,
    isLoading: isMovieLoading,
    isError: isMovieError,
    error: movieError,
  } = useMovie(movieId);

  return (
    <QueryWrapper
      isLoading={isMovieLoading}
      isError={isMovieError}
      error={movieError}
    >
      {movie && (
        <section>
          <MovieDetails movie={movie} />
          <div className=" pl-4 lg:pl-14 pb-15">
            {/* <div className="relative pb-4">
              <ActorsSlider title="Cast" actors={movie.credits.cast} />
            </div> */}
            {/* <div className="relative py-4 mt-5">
              <MovieSlider
                title="Related movies"
                movies={relatedMovies.results}
              />
            </div> */}
          </div>
        </section>
      )}
    </QueryWrapper>
  );
};

export default MoviePage;
