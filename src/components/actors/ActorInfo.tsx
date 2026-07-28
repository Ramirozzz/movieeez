import type React from "react";
import { useState } from "react";
import type { ActorDetails } from "../../types/tmdbApi.types";
import placeholder from "../../assets/images/placeholder.png";

interface ActorInfoProps {
  actorDetails: ActorDetails;
}

const ActorInfo: React.FC<ActorInfoProps> = ({ actorDetails }) => {
  const [textExpanded, setTextExpanded] = useState(false);

  // Truncate long text
  const isLong = actorDetails.biography.length > 500;

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-16 p-4 md:p-8 lg:p-13">
      <div className="relative hidden lg:block">
        <img
          className="w-full h-auto rounded-xl object-cover "
          src={
            actorDetails.profile_path
              ? `https://image.tmdb.org/t/p/w300${actorDetails.profile_path}`
              : placeholder
          }
          alt={actorDetails.name}
        />

        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#0c0c12]" />
      </div>

      <div className="lg:px-5 py-4 lg:py-6 w-full lg:w-4xl">
        <div className="leading-relaxed">
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-md border border-accent/30 bg-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs uppercase text-accent">Actor</span>
          </div>
          <div className="flex justify-start items-center gap-8 md:gap-8 py-4">
            <div className="block lg:hidden w-28 h-28">
              <img
                className="w-full h-full rounded-full object-cover"
                src={`https://image.tmdb.org/t/p/w300${actorDetails.profile_path}`}
                alt={actorDetails.name}
              />
            </div>

            <h1 className="text-4xl md:text-7xl font-normal">
              {actorDetails.name}
            </h1>
          </div>

          <p className="italic text-sm mb-5">
            Known for {actorDetails.known_for_department}
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-6">
            <div className="px-3 py-2.5 rounded-lg bg-white/4 border border-white/10">
              <p className="text-xs tracking-[0.1em] mb-1 uppercase">Born</p>
              <p className="text-sm text-font ">
                {actorDetails.place_of_birth}
              </p>
            </div>

            <div className="px-3 py-2.5 rounded-lg bg-white/4 border border-white/10">
              <p className="text-xs tracking-[0.1em] uppercase mb-1">
                Birthday
              </p>
              <p className="text-sm text-font">{actorDetails.birthday}</p>
            </div>

            <div className="px-3 py-2.5 rounded-lg bg-white/4 border border-white/10 sm:col-span-2 md:col-span-1">
              <p className="text-xs tracking-[0.1em] uppercase mb-1">
                Popularity
              </p>
              <p className="text-sm text-font ">
                {actorDetails.popularity.toFixed(1)}
              </p>
            </div>
          </div>

          <div className="max-w-4xl  ">
            {actorDetails.biography ? (
              <p className="text-sm leading-7">
                {textExpanded || !isLong
                  ? actorDetails.biography
                  : `${actorDetails.biography.slice(0, 500)}...`}{" "}
              </p>
            ) : (
              <p className="text-base leading-7">Details not found</p>
            )}

            {isLong && (
              <button
                onClick={() => setTextExpanded(!textExpanded)}
                className="text-accent text-sm font-semibold mt-3 hover:underline"
              >
                {textExpanded ? "show less" : "show more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
