import { useState } from "react";
import { Link } from "react-router-dom";
import type { MoviesResponse } from "../../types/tmdbApi.types";
import Button from "../buttons/Button";
import AddToWatchlist from "../buttons/AddToWatchlist";

interface HeroProps {
  movies: MoviesResponse;
}

const Hero: React.FC<HeroProps> = ({ movies }) => {
  const [random] = useState(() => Math.floor(Math.random() * 1000));

  // Only movies that have a backdrop
  const moviesWithBackdrop = movies.results.filter(
    (movie) => movie.backdrop_path,
  );

  if (!moviesWithBackdrop.length) return null;

  // Get a random movie
  const randomMovie = moviesWithBackdrop[random % moviesWithBackdrop.length];

  // Image URL
  const backdropUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780${randomMovie.poster_path}`;

  if (!randomMovie) return null;

  return (
    <section className="relative h-[720px] overflow-hidden md:h-screen">
      {/* Background image */}
      <picture className="absolute inset-y-0 right-0 h-full w-full lg:w-[70%]">
        <source media="(min-width:768px)" srcSet={backdropUrl} />

        <img
          src={posterUrl}
          alt={randomMovie.title}
          className="h-full w-full object-cover object-top"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 flex h-full max-w-7xl items-center px-4 md:px-8 lg:px-30 pt-5 lg:pt-15">
        <div className="max-w-sm md:max-w-lg lg:max-w-xl">
          <h1 className="mb-5">{randomMovie.title}</h1>

          <p className="mb-10 md:max-w-lg leading-relaxed">
            {(randomMovie.overview ?? "").length > 140
              ? randomMovie.overview!.substring(0, 140) + "..."
              : randomMovie.overview}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to={`/movie/${randomMovie.id}`}>
              <Button title="More info" />
            </Link>

            <AddToWatchlist movie={randomMovie} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="fade-bottom" />
    </section>
  );
};

export default Hero;
