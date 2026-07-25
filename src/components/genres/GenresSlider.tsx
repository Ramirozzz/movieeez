import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Navigation } from "swiper/modules";
import type { GenresResponse } from "../../types/tmdbApi.types";

interface GenresSliderProps {
  genres: GenresResponse;
  selectedGenreId: number | null;
}

const GenresSlider: React.FC<GenresSliderProps> = ({
  genres,
  selectedGenreId,
}) => {
  return (
    <div className="py-4 lg-py-10 pl-4 md:pl-8 lg:pl-16 mt-6">
      <Swiper
        className="genres-swiper"
        modules={[Navigation, FreeMode]}
        spaceBetween={12}
        navigation
        speed={800}
        grabCursor={true}
        breakpoints={{
          320: {
            // Mobile
            slidesPerView: 3.7,
            slidesPerGroup: 3,
          },
          640: {
            // tablets
            slidesPerView: 5.5,
            slidesPerGroup: 4,
          },
          1024: {
            // Desktop
            slidesPerView: 9.5,
            slidesPerGroup: 6,
          },
        }}
      >
        <SwiperSlide>
          <Link to="/movies">
            <div
              className={`w-full h-10 flex items-center justify-center text-sm border rounded-full ${
                selectedGenreId === null
                  ? " text-font-dark font-semibold bg-accent  "
                  : "text-muted border-white/20 hover:border-accent transition-all duration-300"
              }`}
            >
              All Movies
            </div>
          </Link>
        </SwiperSlide>

        {genres.genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <Link to={`/movies/genre/${genre.id}`}>
              <div
                className={`w-full h-11 flex items-center justify-center text-sm border rounded-full ${
                  genre.id === selectedGenreId
                    ? "text-font-dark font-semibold  bg-accent  "
                    : "text-muted  border-white/20 hover:border-accent transition-all duration-300"
                }`}
              >
                {genre.name}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GenresSlider;
