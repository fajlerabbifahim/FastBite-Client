import React from "react";
import SectionHeading from "../../Components/Shared/SectionHeading";
// import img1 from '../../assets/popularDish/img1.jpg'
// import img2 from '../../assets/popularDish/img2.jpg'
// import img3 from '../../assets/popularDish/img3.jpg'
const popularDishesData = [
  {
    id: 1,
    name: "Horse Gram",
    rating: "4",
    price: "$4.69",

    image: "https://i.postimg.cc/C1h0f0Ly/img3.jpg",
  },
  {
    id: 2,
    name: "Coco Cookies",
    rating: "5",
    price: "$2.54",
    image: "https://i.postimg.cc/g0qdJjpq/img2.jpg",
  },
  {
    id: 3,
    name: "Vetch Seeds",
    rating: "4",
    price: "$9.64",
    image: "https://i.postimg.cc/65gBbFzR/img1.jpg",
  },
  {
    id: 1,
    name: "Horse Gram",
    rating: "4",
    price: "$4.69",

    image: "https://i.postimg.cc/C1h0f0Ly/img3.jpg",
  },
  {
    id: 2,
    name: "Coco Cookies",
    rating: "5",
    price: "$2.54",
    image: "https://i.postimg.cc/g0qdJjpq/img2.jpg",
  },
  {
    id: 3,
    name: "Vetch Seeds",
    rating: "4",
    price: "$9.64",
    image: "https://i.postimg.cc/65gBbFzR/img1.jpg",
  },
  {
    id: 2,
    name: "Coco Cookies",
    rating: "5",
    price: "$2.54",
    image: "https://i.postimg.cc/g0qdJjpq/img2.jpg",
  },
  {
    id: 3,
    name: "Vetch Seeds",
    rating: "4",
    price: "$9.64",
    image: "https://i.postimg.cc/65gBbFzR/img1.jpg",
  },
];

const RatingStars = ({ rating }) => {
  const numRating = parseInt(rating);
  return (
    <div className="rating rating-sm  dark:bg-gray-800 dark:text-white ">
      {[1, 2, 3, 4, 5].map((star, idx) => (
        <input
          key={idx}
          type="radio"
          name={`rating-${star}`}
          className="mask mask-star-2 bg-orange-400   "
          checked={star <= numRating}
          readOnly
          aria-label={`${star} star`}
        />
      ))}
    </div>
  );
};

const PopularDishes = () => {
  return (
    <div className="container mx-auto w-11/12 py-12">
      {/* sheared heading  components use */}

      <SectionHeading
        title={"Our Popular Dishes"}
        subTitle={
          "Discover our most loved dishes that keep our customers coming back for more. Fresh ingredients, authentic flavors, and culinary excellence in every bite."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {popularDishesData.map((dish, idx) => (
          <div
            // key={dish.id}
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
              <p className="text-gray-600 font-bold text-lg  dark:text-white">
                {dish.price}
              </p>
              <button className=" cursor-pointer mt-4 rounded-full bg-red-600 text-white py-2  hover:bg-red-500 transition-colors px-10">
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
