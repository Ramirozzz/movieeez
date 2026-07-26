import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-font-dark transition-all duration-300 hover:bg-white/90 ">
      <FaPlay className="text-font-dark" size={20} />

      <span className="text-sm ">Play Trailor</span>
    </button>
  );
};

export default PlayButton;
