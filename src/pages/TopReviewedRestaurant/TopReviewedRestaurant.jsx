import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopReviewedRestaurant.css";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../LoadingSpinner";

const TopReviewedRestaurant = () => {
  const axiosPublic = useAxiosPublic();

  const { data: topRestaurants = [], isLoading } = useQuery({
    queryKey: ["topRestaurants"],
    queryFn: async () => {
      const { data } = await axiosPublic("/restaurants/top");
      // console.log("top restaurant data", data);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-10 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        <span className="primary-color">Top Reviewed </span> Restaurants
      </h1>

      <div className="overflow-hidden whitespace-nowrap w-full relative py-6">
        <div className="flex gap-8 animate-marquee">
          {topRestaurants.map((restaurant) => (
            <Link
              key={restaurant._id}
              to={`/restaurantDetails/${restaurant._id}`}
              className="flex gap-4 border border-red-600  rounded-lg shadow-lg bg-white p-3 w-[400px] hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-40 rounded-md"
                src={restaurant.image}
                alt={restaurant.name}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-lg font-semibold">{restaurant.name}</h1>
                  <p className="text-sm text-gray-600">{restaurant.location}</p>
                </div>
                <p className="text-yellow-500 font-medium flex items-center gap-2">
                  <FaStar /> {restaurant.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopReviewedRestaurant;
