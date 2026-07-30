import { Link } from "react-router-dom";
import type { MovieCard } from "../../types/tmdbApi.types";
import type React from "react";
import placeholder from "../../assets/images/placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "../movies/movieSlider.css";

interface MovieSliderProps {
  title: string;
  movies: MovieCard[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ title, movies }) => {
  return (
    <div className="mb-4 md:mb-8">
      <h2 className="mb-2 md:mb-4">{title}</h2>
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        grabCursor
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 1.35,
          momentumVelocityRatio: 1.2,
          momentumBounce: false,
          sticky: false,
          minimumVelocity: 0.02,
        }}
        touchRatio={1.2}
        resistance
        resistanceRatio={0.8}
        followFinger={true}
        speed={600}
        className="mySwiper"
        breakpoints={{
          320: {
            // Mobile
            slidesPerView: 3.5,
            slidesPerGroup: 3,
            spaceBetween: 8,
          },
          640: {
            // tablets
            slidesPerView: 4.5,
            slidesPerGroup: 4,
            spaceBetween: 12,
          },
          1024: {
            // Desktop
            slidesPerView: 6.3,
            slidesPerGroup: 6,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className=" group w-full rounded-lg overflow-hidden cursor-pointer ">
                <img
                  className="aspect-[2/3] object-cover bg-zinc-800 poster-hover"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : placeholder
                  }
                  alt={movie.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-bg/5 to-bg/10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
