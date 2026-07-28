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
    <section className="relative h-[720px] md:h-screen max-h-screen overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Background image */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={backdropUrl} />

        <img
          src={posterUrl}
          alt={randomMovie.title}
          className="h-full w-full object-cover object-top"
        />
      </picture>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col justify-center pb-5 md:pb-0 lg:pt-15">
        <h1 className="mb-4 md:mb-6 max-w-sm md:max-w-2xl">
          {randomMovie.title}
        </h1>

        <p className="mb-10 max-w-sm md:max-w-xl ">
          {(randomMovie.overview ?? "").length > 120
            ? randomMovie.overview!.substring(0, 120) + "..."
            : randomMovie.overview}
        </p>

        <div className="flex gap-4 md:gap-5">
          <Link to={`/movie/${randomMovie.id}`}>
            <Button title={"More info"} />
          </Link>
          <AddToWatchlist movie={randomMovie} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="fade-bottom" />
    </section>
  );
};

export default Hero;
