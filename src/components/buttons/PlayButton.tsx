import { FaPlay } from "react-icons/fa";

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-font-dark transition-all duration-300 hover:bg-white/80"
    >
      <FaPlay className="text-font-dark" size={20} />

      <span className="text-sm">Play Trailer</span>
    </button>
  );
};

export default PlayButton;
