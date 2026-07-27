import { useState } from "react";
import type { Movie } from "../../types/tmdbApi.types";
import PlayButton from "../buttons/PlayButton";
import TrailerModal from "../trailerModal/TrailerModal";

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  //Convert relaease date to year
  const getYear = (date: string | null) => {
    if (!date) return "N/A";
    return new Date(date).getFullYear();
  };

  // Image URL
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;

  const trailer =
    movie.videos?.results.find(
      (video) =>
        video.site === "YouTube" && video.type === "Trailer" && video.official,
    ) ??
    movie.videos?.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    );

  return (
    <section className="relative min-h-130 lg:min-h-160 bg-cover bg-center flex flex-col justify-center">
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={backdropUrl} />

        <img
          src={posterUrl}
          alt={movie.title}
          className="h-full w-full object-cover object-top"
        />
      </picture>
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 lg:mt-30 py-10">
        <div className="space-y-4 lg:space-y-3 w-full max-w-4xl px-4 lg:px-16">
          <h1>{movie.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted">
            <div className="text-yellow-400 ">
              ⭐ {movie.vote_average.toFixed(1)}
            </div>

            <span>{getYear(movie.release_date)}</span>
            <span>{movie.runtime} min</span>

            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="flex items-center gap-2">
                  <span>•</span>
                  <span>{genre.name}</span>
                </span>
              ))}
            </div>
          </div>

          <p className="mb-10 mt-8 leading-relaxed">{movie.overview}</p>

          {trailer && <PlayButton onClick={() => setIsTrailerOpen(true)} />}
        </div>
      </div>

      {isTrailerOpen && trailer && (
        <TrailerModal
          trailerKey={trailer.key}
          onClose={() => setIsTrailerOpen(false)}
        />
      )}

      {/* Bottom fade */}
      <div className="fade-bottom" />
    </section>
  );
};

export default MovieDetails;
