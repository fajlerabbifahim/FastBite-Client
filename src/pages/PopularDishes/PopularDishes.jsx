import React from "react";
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
];

const RatingStars = ({ rating }) => {
  const numRating = parseInt(rating);
  return (
    <div className="rating rating-sm">
      {[1, 2, 3, 4, 5].map((star) => (
        <input
          key={star}
          type="radio"
          name={`rating-${star}`}
          className="mask mask-star-2 bg-orange-400"
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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Popular Dishes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most loved dishes that keep our customers coming back for
          more. Fresh ingredients, authentic flavors, and culinary excellence in
          every bite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularDishesData.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center text-center py-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {dish.name}
              </h3>
              <RatingStars rating={dish.rating} />
              <p className="text-green-600 font-bold text-lg">{dish.price}</p>
              <button className="mt-4 rounded-full bg-green-500 text-white py-2  hover:bg-green-600 transition-colors px-10">
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
