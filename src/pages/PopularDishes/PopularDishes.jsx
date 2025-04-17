import React, { useEffect, useState } from "react";

import SectionHeading from "../../Components/Shared/SectionHeading";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../LoadingSpinner";

const PopularDishes = () => {
  const axiosPublic = useAxiosPublic();

  const { data: foods = [], isPending } = useQuery({
    queryKey: ["popularDishes"],
    queryFn: async () => {
      const { data } = await axiosPublic("/popularDishes");
      return data;
    },
  });
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  console.log(foods);
  return (
    <div className="container mx-auto w-11/12 py-12">
      {/* sheared heading  components use */}

      {/* <SectionHeading
        title={"Our Popular Dishes"}
        subTitle={
          "Discover our most loved dishes that keep our customers coming back for more. Fresh ingredients, authentic flavors, and culinary excellence in every bite."
        }
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {foods.map((dish, idx) => (
          <div
            key={idx}
            className="bg-white border-t-2 border-l-2 border-r-2 border-red-500 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg overflow-hidden transition-transform "
          >
            <div className="h-64 overflow-hidden p-2">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col pt-4 pb-0">
              <div className="flex justify-between  px-2 items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {dish.name}
                </h3>
                <p className=" font-bold text-lg dark:text-white">
                  <span className="text-2xl">৳</span> {dish.price}
                </p>
              </div>
              <Link
                to={`/food-details/${dish._id}`}
                className="text-center btn capitalize px-6 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
              >
                view details
              </Link>
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
