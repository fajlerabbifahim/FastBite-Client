import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RestaurantDetails = () => {
  const { id } = useParams();

  const axiosPublic = useAxiosPublic();

  const { data: restaurant } = useQuery({
    queryKey: ["restaurantDetails"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/restaurantDetails/${id}`);
      return data;
    },
  });

  if (!restaurant) {
    return (
      <h2 className="text-center text-red-500 text-2xl">
        Restaurant Not Found
      </h2>
    );
  }

  return (
    <div className="w-full">
      {/* Cover Image */}
      <div className="relative w-full h-72 md:h-96">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold shadow-lg bg-black/40 px-4 py-2 rounded-lg">
            {restaurant.name}
          </h1>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto p-6 md:p-12">
        {/* Name, Location & Rating */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {restaurant.name}
            </h2>
            <p className="text-gray-600 text-lg">{restaurant.location}</p>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <span className="text-yellow-500 text-2xl">
              <FaStar />
            </span>
            <span className="text-gray-700 text-lg ml-2">
              ({restaurant.rating.toFixed(1)})
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          {restaurant.description}
        </p>

        {/* Contact & Status */}
        <div className="mt-6 flex flex-col md:flex-row md:justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-medium text-gray-800 flex items-center gap-2">
            <BsTelephone /> Contact:{" "}
            <span className="text-blue-600">{restaurant.contact_number}</span>
          </p>
          <span
            className={`px-4 py-2 text-lg font-medium rounded-full ${
              restaurant.status === "open"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {restaurant.status.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
