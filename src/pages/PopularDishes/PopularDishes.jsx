import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaMinus, FaPlus, } from "react-icons/fa"; // Import the star icons
import SectionHeading from "../../Components/Shared/SectionHeading";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


// const RatingStars = ({ rating }) => {
//   const numRating = parseFloat(rating); // Using parseFloat to support decimals

//   const renderStars = () => {
//     let stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= Math.floor(numRating)) {
//         stars.push(<FaStar key={i} className="text-orange-400" />); // Full star
//       } else if (i - 0.5 === numRating) {
//         stars.push(<FaStarHalfAlt key={i} className="text-orange-400" />); // Half star
//       } else {
//         stars.push(<FaRegStar key={i} className="text-orange-400" />); // Empty star
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="flex justify-center items-center space-x-1">
//       {renderStars()}
//     </div>
//   );
// };

const PopularDishes = () => {
  // const [foods, setFoods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_Server}/menu`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFoods(data);
  //       console.log("food data", data);
  //     });
  // }, []);

  const { data:foods = []} = useQuery({
    queryKey: ["popular-dishes"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_Server}/menu`);
      return data.slice().sort((a, b) => b.sellCount - a.sellCount);
    },
  });
  

  const handleAddToCart = async(food) =>{
    const cartItemsAdd = {
        [food?._id] : quantity,
        email: user.email
    }

    const {data} = await axios.put(`${import.meta.env.VITE_Server}/cartItems?email=${user?.email}`, cartItemsAdd);

    // console.log(cartItems);
    console.log(data);
    setCart(prev => prev+quantity);
    setIsOpen(false);
    cartItemRefetch();

    Swal.fire({
        title: "Added",
        text: "Items added to cart",
        icon: "success"
      });
}

  return (
    <div className="mx-auto w-11/12 py-12">
      {/* sheared heading  components use */}

      <SectionHeading
        title={"Our Popular Dishes"}
        subTitle={
          "Discover our most loved dishes that keep our customers coming back for more. Fresh ingredients, authentic flavors, and culinary excellence in every bite."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {foods.slice(0, 8).map((food, idx) => (
          <div key={idx} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all hover:shadow-xl flex flex-col justify-between h-full">
            <div>
              <img className="w-full h-48 object-cover" src={food?.image} alt={food?.name} />
              <div className="p-4">
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">{food?.name}</h2>
                    <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-lg">{food?.category}</span>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    {food?.shortDescription}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">${food?.price}</span>
                  <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                    <FaStar className="w-5 h-5" /> {food?.rating}/5
                  </span>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm">
                  <span className="text-gray-500">Stock: {food?.stock}</span>
                  <span className="text-gray-500">Sold: {food?.sellCount}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2 p-4 pt-0">
              <button className="flex-1 flex items-center gap-2 px-4 py-2 border-2 border-red-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-red-600">
                <FaInfoCircle className="w-4 h-4" /> <p className="font-bold">Details</p>
              </button>
              <button onClick={()=>setIsOpen(true)} className="flex-1 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold p-2 rounded-lg transition-all">
                <FaShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>



            {/* Modal-> add to cart */}
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/10">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 shadow-lg">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 pb-6">{food?.name}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-200 pb-3">Quantity:</p>
                  <div className="flex gap-2 justify-between mt-2 pb-4">
                    <button className="py-1 px-3 rounded-lg font-bold bg-gray-200 dark:bg-gray-700 text-center cursor-pointer" onClick={() => {
                      if (quantity > 1) {
                        setQuantity(prev => prev - 1)
                      }
                    }}> <FaMinus />
                    </button>
                    <p className="bg-red-200 dark:bg-red-800 w-full text-center rounded-lg text-lg font-medium">{quantity}</p>
                    <button className="py-1 px-3 rounded-lg font-bold bg-gray-200 text-center cursor-pointer dark:bg-gray-700" onClick={() => {
                      if (quantity < food?.stock) {
                        setQuantity(prev => prev + 1)
                      }
                    }}> <FaPlus />
                    </button>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={()=>handleAddToCart(food)}
                      className="px-4 py-2 bg-red-600 text-white hover:bg-red-800 rounded-lg cursor-pointer"
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => {
                        setQuantity(1);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
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
