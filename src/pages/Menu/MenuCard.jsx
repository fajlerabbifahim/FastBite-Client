import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MenuCard = ({ food }) => {
  return (
    <div>
      <div className="bg-white border-t-2 border-l-2 border-r-2 border-red-500 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div className="h-64 overflow-hidden">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col pt-4 pb-0">
          <div className="flex justify-between items-center px-2  mb-2">
            <h3 className=" font-semibold text-gray-900 dark:text-white ">
              {food.name}
            </h3>
            <h3 className="flex justify-center items-center font-bold  dark:text-white">
              {food.price} TK
            </h3>
          </div>
          <Link
            to={`/food-details/${food._id}`}
            className="text-center btn capitalize px-6 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
          >
            view details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
