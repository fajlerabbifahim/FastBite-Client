import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rider from "../../../assets/Partner/rider.json";
import Lottie from "react-lottie-player";
const RiderModal = ({ isOpen, setIsOpen, allRider }) => {
  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-10 overflow-y-auto   bg-black/50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <motion.div
                className="relative inline-block p-2 border border-red-500  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Modal Content */}
                <div className="flex items-center justify-center mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 w-full rounded-lg   dark:bg-gray-800 text-center"
                  >
                    <div className="w-full flex justify-center">
                      <Lottie
                        loop
                        animationData={rider}
                        play
                        style={{ width: 400, height: 150 }}
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="mt-5 text-center">
                  <h3
                    className="text-lg font-medium text-gray-800 dark:text-white"
                    id="modal-title"
                  >
                    Select Rider
                  </h3>
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="status"
                    ></label>
                    <select
                      name="status"
                      // onChange={(e) => handleCategoryChange(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                      <option disabled value="">
                        Status
                      </option>

                      {allRider.map((rider) => (
                        <option value={rider}>{rider.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    Cancel
                  </button>

                  <button className="cursor-pointer px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                    Confirm
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RiderModal;
