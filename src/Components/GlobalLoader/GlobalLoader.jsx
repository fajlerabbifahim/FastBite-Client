import { useSelector } from "react-redux";
import LoadingSpinner from "../../pages/LoadingSpinner";

const GlobalLoader = () => {
  const loading = useSelector((state) => state.loader.loading);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white/70 flex justify-center items-center z-[9999]">
      <LoadingSpinner />
    </div>
  );
};

export default GlobalLoader;
