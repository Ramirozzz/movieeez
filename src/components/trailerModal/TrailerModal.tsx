import { IoClose } from "react-icons/io5";

interface TrailerModalProps {
  trailerKey: string;
  onClose: () => void;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ trailerKey, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative aspect-video w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-3xl text-white"
        >
          <IoClose size={35} />
        </button>

        <iframe
          className="h-full w-full rounded-xl"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TrailerModal;
