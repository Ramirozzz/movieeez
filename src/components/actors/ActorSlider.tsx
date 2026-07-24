import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Navigation } from "swiper/modules";
import type { Actor } from "../../types/tmdbApi.types";
import { IoPerson } from "react-icons/io5";

interface ActorSliderProps {
  title: string;
  actors: Actor[];
}

const ActorSlider: React.FC<ActorSliderProps> = ({ title, actors }) => {
  return (
    <div>
      <h2 className="mb-4">{title}</h2>
      <Swiper
        modules={[Navigation, FreeMode]}
        spaceBetween={8}
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
            slidesPerGroup: 5,
          },
          1024: {
            // Desktop
            slidesPerView: 8.7,
            slidesPerGroup: 7,
          },
        }}
      >
        {actors.map((actor) => (
          <SwiperSlide key={actor.id}>
            <Link to={`/actor/${actor.id}`}>
              <div className="mb-2">
                {actor.profile_path ? (
                  <img
                    className="aspect-[2/3] overflow-hidden rounded-lg object-cover "
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <div className="flex items-center justify-center aspect-[2/3] overflow-hidden rounded-lg bg-zinc-800">
                    <IoPerson size={120} />
                  </div>
                )}
              </div>

              <div className="text-center text-sm mt-2 cursor-pointer ">
                {actor.name}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActorSlider;
