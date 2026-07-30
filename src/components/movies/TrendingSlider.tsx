import { Link } from "react-router-dom";
import type { MovieCard, TrendingTime } from "../../types/tmdbApi.types";
import placeholder from "../../assets/images/placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "../movies/movieSlider.css";

interface MoviesSliderProps {
  title: string;
  movies: MovieCard[];
  time: TrendingTime;
  onSwitch: (value: TrendingTime) => void;
}

const TrendingSlider: React.FC<MoviesSliderProps> = ({
  title,
  movies,
  time,
  onSwitch,
}) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="flex items-center gap-4 mb-4">
        <h2>{title}</h2>
        <div className="w-fit border border-white/20 rounded-md ">
          <button
            onClick={() => onSwitch("day")}
            className={
              time === "day"
                ? "text-sm bg-accent text-font-dark px-3 py-1 rounded"
                : "text-sm text-font px-3 py-1"
            }
          >
            Today
          </button>

          <button
            onClick={() => onSwitch("week")}
            className={
              time === "week"
                ? "text-sm bg-accent text-font-dark px-3 py-1 rounded"
                : "text-sm text-font px-3 py-1"
            }
          >
            Week
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        grabCursor={true}
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
            slidesPerView: 5.3,
            slidesPerGroup: 5,
            spaceBetween: 20,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="group overflow-hidden w-full rounded-lg cursor-pointer">
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

export default TrendingSlider;
