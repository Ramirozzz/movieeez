import { Link } from "react-router-dom";
import type { MovieCard, TrendingTime } from "../../types/tmdbApi.types";
import placeholder from "../../assets/images/placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Navigation } from "swiper/modules";
// import { useTrending } from "../../hooks/useTrending";
// import { useSearchParams } from "react-router-dom";
// import type { TrendingTime } from "../../types/tmdbApi.types";
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
    <div className="mb-8">
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
        spaceBetween={15}
        navigation
        speed={800}
        grabCursor={true}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          320: {
            // Mobile
            slidesPerView: 3.5,
            slidesPerGroup: 3,
          },
          640: {
            // tablets
            slidesPerView: 4.5,
            slidesPerGroup: 4,
          },
          1024: {
            // Desktop
            slidesPerView: 5.5,
            slidesPerGroup: 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="group overflow-hidden w-full rounded-xl cursor-pointer">
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
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingSlider;
