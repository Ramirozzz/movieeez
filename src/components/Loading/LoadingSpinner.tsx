import { BeatLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg">
      <BeatLoader color="#fff" size={22} speedMultiplier={0.8} />
    </div>
  );
};

export default LoadingSpinner;
