import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Navigation } from "swiper/modules";
import type { MovieCard } from "../../types/tmdbApi.types";
import type React from "react";
import "../movies/movieSlider.css";

interface MovieSliderProps {
  title: string;
  movies: MovieCard[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ title, movies }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-4">{title}</h2>
      <Swiper
        modules={[Navigation, FreeMode]}
        spaceBetween={15}
        navigation
        speed={800}
        grabCursor={true}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          320: {
            // Mobile
            slidesPerView: 3.3,
            slidesPerGroup: 3,
          },
          640: {
            // tablets
            slidesPerView: 4.5,
            slidesPerGroup: 4,
          },
          1024: {
            // Desktop
            slidesPerView: 7.5,
            slidesPerGroup: 7,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="w-full cursor-pointer">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/images/movie-placeholder.png"
                }
                alt={movie.title}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
