const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
    </div>
  );
};

export default LoadingSpinner;
