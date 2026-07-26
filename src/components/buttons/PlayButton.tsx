import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="group flex items-center gap-3 rounded-full bg-white px-4 py-2 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 active:scale-95">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors group-hover:bg-neutral-800">
        <FaPlay className="text-white" size={12} />
      </div>

      <span>Play Trailor</span>
    </button>
  );
};

export default PlayButton;
