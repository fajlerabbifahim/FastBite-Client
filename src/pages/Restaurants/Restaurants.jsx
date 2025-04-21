import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";
import LoadingSpinner from "../LoadingSpinner";
import StarRatings from "react-star-ratings";

const Restaurants = () => {
  const [restaurants, isPending] = useRestaurant();

  if (isPending) {
    return <LoadingSpinner />;
  }
  // console.log(restaurants)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Top Restaurants
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant._id}
            to={`/restaurantDetails/${restaurant._id}`}
          >
            {" "}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-200">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  {restaurant.name}
                </h2>
                <p className="text-gray-500 text-sm">{restaurant.location}</p>

                {/* Description (Max 60 words) */}
                <p className="mt-3 text-gray-700 text-sm line-clamp-3">
                  {restaurant.description.length > 60
                    ? `${restaurant.description.slice(0, 60)}...`
                    : restaurant.description}
                </p>

                {/* Rating */}
                {/* <div className="flex items-center mt-3">
                  <span className="text-yellow-500 text-lg">
                    <FaStar />
                  </span>
                  <span className="text-gray-600 text-sm ml-2">
                    ({restaurant.rating.toFixed(1)})
                  </span>
                </div> */}

                <div className="mt-2">
                  <StarRatings
                    rating={restaurant.rating}
                    starRatedColor="#FBBF24"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                  <span className="ml-2 text-gray-600 text-sm">
                    {restaurant.rating}
                  </span>
                </div>

                {/* Status */}
                {/* <span
                  className={`inline-block px-4 py-1 text-sm font-medium rounded-full mt-4 ${
                    restaurant.status === "open"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {restaurant.status.toUpperCase()}
                </span> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
