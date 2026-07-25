import { BeatLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen flex-col bg-bg-dark items-center justify-center gap-4 mt-10">
      <BeatLoader color="#ffffff" size={22} speedMultiplier={0.8} />
    </div>
  );
};

export default LoadingSpinner;
