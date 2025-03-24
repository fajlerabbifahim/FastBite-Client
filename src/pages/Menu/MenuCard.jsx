import React from "react";
import { FaStar } from "react-icons/fa6";
const MenuCard = ({ food }) => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div className="h-64 overflow-hidden">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center py-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {food.name}
          </h3>
          <FaStar />
          <p className="text-gray-600 font-bold text-lg dark:text-white">
            ${food.price}
          </p>
          <button className="cursor-pointer mt-4 rounded-full bg-red-600 text-white py-2 hover:bg-red-500 transition-colors px-10">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
