const TrackOrder = ({ food, onClose }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-2xl rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full">
          <div className="flex items-center justify-center mx-auto">
            <img
              className="w-full h-76 rounded-lg"
              src={food.food_image}
              alt=""
            />
          </div>
          <ProgressBarControl food={food} />
          <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
            <button
              onClick={onClose}
              className="px-8 w-full font-semibold cursor-pointer py-2.5 text-lg leading-5 text-white bg-red-500 rounded-md hover:bg-red-600 active:scale-90"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
