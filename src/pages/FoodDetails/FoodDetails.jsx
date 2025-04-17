import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { footer } from "framer-motion/client";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const FoodDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1);
  const [purchaseInfo, setPurchaseInfo] = useState({});
  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axiosPublic(`/users/${user?.email}`);
  //     setUserInfo(data);
  //   }
  //   fetchData();
  // }, [user?.email]);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["food-details"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/food-details/${id}`);
      return data;
    },
  });

  if (isPending || !user?.email) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  // console.log(data);
  const food = data.food;
  const restaurant = data.restaurant;
  const owner = data.owner;
  // console.log(restaurant);

  const addToCart = async () => {
    const orderInfo = {
      email: user?.email,
      food: {
        foodId: food._id,
        foodImage: food.image,
      },
    };

    try {
      const res = await axiosPublic.post("/addToCart", orderInfo);
      if (res.data.acknowledged || res.data.modifiedCount > 0) {
        refetch(); // Update cart UI
        toast.success("Add to cart Successful");
      }
    } catch (error) {
      console.error("Order failed", error);
    }
  };
  return (
    <div className="w-11/12 mx-auto bg-white dark:bg-gray-800  my-5 flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl shadow-md border-2 hover:border-red-400 transition duration-500 ">
      <img
        src={food.image}
        alt="Chicken Biryani"
        className="w-full md:w-1/2 h-72 object-cover rounded-lg"
      />

      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold dark:text-white">
          <strong>{food.name}</strong>{" "}
        </h2>
        <p className="dark:text-white">
          <strong>Category :</strong> {food.category}
        </p>
        <p className=" dark:text-white">
          <strong>Details :</strong> {food.details}
        </p>
        <div
          className="
                flex 
                flex-row 
                items-center
                gap-2
              "
        >
          <strong>Seller:</strong>{" "}
          <span className="font-semibold">{owner.name}</span>
          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            referrerPolicy="no-referrer"
            src={owner.image}
          />
        </div>
        <p className="text-sm ">
          <strong>Restaurant Name : </strong>
          <span className="font-semibold">{restaurant.name}</span>
        </p>

        <p className="font-semibold">
          <span className="text-lg font-semibold">Quantity :</span>{" "}
          <span className="text-lg font-semibold"> {food.quantity}</span>
        </p>

        <div className="text-xl font-bold">
          Price:{" "}
          <span className="text-gray-800 dark:text-white">{food.price} TK</span>
        </div>

        {food.quantity > 0 ? (
          <button
            onClick={addToCart}
            className="bg-red-500 btn cursor-pointer text-white font-semibold px-5 py-2 rounded hover:bg-red-600 capitalize"
          >
            add to cart
          </button>
        ) : (
          <button className="bg-red-500 btn  cursor-not-allowed text-white font-semibold px-5 py-2 rounded hover:bg-red-600 capitalize">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
