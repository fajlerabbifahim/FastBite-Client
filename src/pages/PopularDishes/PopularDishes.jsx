import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import the star icons
import SectionHeading from "../../Components/Shared/SectionHeading";

const RatingStars = ({ rating }) => {
  const numRating = parseFloat(rating); // Using parseFloat to support decimals

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(numRating)) {
        stars.push(<FaStar key={i} className="text-orange-400" />); // Full star
      } else if (i - 0.5 === numRating) {
        stars.push(<FaStarHalfAlt key={i} className="text-orange-400" />); // Half star
      } else {
        stars.push(<FaRegStar key={i} className="text-orange-400" />); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="flex justify-center items-center space-x-1">
      {renderStars()}
    </div>
  );
};

const PopularDishes = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("/public/foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        console.log("food data", data);
      });
  }, []);

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
              <RatingStars rating={dish.rating} />
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
    </div>
  );
};

export default PopularDishes;
