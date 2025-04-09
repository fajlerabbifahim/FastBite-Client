import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import the star icons
import SectionHeading from "../../Components/Shared/SectionHeading";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PopularDishes = () => {
  const axiosPublic = useAxiosPublic();

  const { data: foods = [] } = useQuery({
    queryKey: ["popularDishes"],
    queryFn: async () => {
      const { data } = await axiosPublic("/popularDishes");
      return data;
    },
  });

  return (
    <div className="container mx-auto w-11/12 py-12">
      {/* sheared heading  components use */}

      <SectionHeading
        title={"Our Popular Dishes"}
        subTitle={
          "Discover our most loved dishes that keep our customers coming back for more. Fresh ingredients, authentic flavors, and culinary excellence in every bite."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {foods.map((dish, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center py-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {dish.name}
              </h3>
              <p className="text-gray-600 font-bold text-lg dark:text-white">
                ${dish.price}
              </p>
              <button className="cursor-pointer mt-4 rounded-full bg-red-600 text-white py-2 hover:bg-red-500 transition-colors px-10">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/menu"}>
        <button className=" flex items-center mx-auto mt-10 cursor-pointer px-8 py-2.5 bg-gradient-to-r from-red-600 to-red-900 text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transform transition-all">
          Explore More
        </button>
      </Link>
    </div>
  );
};
export default PopularDishes;
