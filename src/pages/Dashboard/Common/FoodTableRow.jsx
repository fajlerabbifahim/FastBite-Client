import React, { useState } from "react";
import ProgressBarControl from "./ProgressBarControl";

const FoodTableRow = ({ food }) => {
  const { food_name, food_image, status, quantity, price } = food || {};
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(status);
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={food_image}
              alt=""
            />

            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {food_name}
              </h2>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4   dark:text-gray-300 whitespace-nowrap">
        <p className="bg-green-400 text-center rounded-2xl px-3 py-2">
          {status}
        </p>
      </td>
      <td className="px-4 py-4 font-semibold  text-center  dark:text-gray-300 whitespace-nowrap">
        {quantity}
      </td>
      <td className="px-4 py-4 font-semibold text-lg  dark:text-gray-300 whitespace-nowrap">
        {price}
      </td>
      <td className="px-4 py-4 flex justify-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <button
          onClick={openModal}
          className="px-8 font-semibold cursor-pointer py-2.5 text-lg leading-5 text-white  duration-300 transform bg-red-500 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600 active:scale-90 transition-transform"
        >
          Track Order
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto bg-black/70 flex  justify-center items-center"
            aria-modal="true"
          >
            <div className="flex items-end justify-center px-4 pt-4 pb-20 text-center">
              <span
                className="hidden sm:inline-block sm:align-middle "
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-2xl rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full">
                <div className="flex items-center justify-center mx-auto">
                  <img
                    className="w-full h-76 rounded-lg"
                    src={food_image}
                    alt=""
                  />
                </div>
                <ProgressBarControl status={status} />

                <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                  <button
                    onClick={closeModal}
                    className="px-8 w-full font-semibold cursor-pointer py-2.5 text-lg leading-5 text-white bg-red-500 rounded-md hover:bg-red-600 active:scale-90"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default FoodTableRow;
