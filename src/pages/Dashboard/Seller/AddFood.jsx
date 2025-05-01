import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { imageUpload } from "../../../api/utils";
import { Navigate, useNavigate } from "react-router-dom";

const AddFood = () => {
  const { user, notify } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { data: restaurant = [], isPending } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/owner/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  // console.log(restaurant);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.image.files[0];
    const image = await imageUpload(imageFile);

    const food = {
      email: user?.email,
      restaurantId: restaurant[0]?._id,
      name: form.name.value,
      price: parseFloat(form.price.value),
      category,
      image,
      rating: parseFloat(form.rating.value),
      quantity: parseInt(form.quantity.value),
      origin: form.origin.value,
      shortDescription: form.shortDescription.value,
      details: form.details.value,
    };
    const res = await axiosPublic.post("/addNewFood", food);
    console.log(res);
    if (res.data.insertedId) {
      notify("success", "add new food item successful");
      navigate("/dashboard/manage-my-foods");
    }
  };
  return (
    <section className="max-w-4xl mb-5 border-2 border-red-600 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-2xl underline underline-offset-4 decoration-red-500 font-semibold text-center text-gray-700 capitalize dark:text-white">
        Add new food item
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-3 gap-x-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">
              Price (TK)
            </label>
            <input
              id="price"
              type="number"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="category"
            >
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option disabled value="">
                Select category
              </option>
              <option value="Salad">Salad</option>
              <option value="Pizza">Pizza</option>
              <option value="Drinks">Drinks</option>
              <option value="Pasta">Pasta</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>
          <div>
            <label
              className="text-gray-700 capitalize dark:text-gray-200"
              htmlFor="select-image"
            >
              Select Food Image
            </label>
            <input
              type="file"
              required
              id="image"
              name="image"
              accept="image/*"
              className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              id="rating"
              type="number"
              step="0.1"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="origin"
            >
              Origin
            </label>
            <input
              id="origin"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="shortDescription"
            >
              Short Description
            </label>
            <input
              id="shortDescription"
              type="text"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="details"
            >
              Details
            </label>
            <textarea
              id="details"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              rows="3"
            />
          </div>
        </div>
        <div className="mt-6 w-full ">
          <button
            type="submit"
            className="px-8 font-semibold cursor-pointer w-full py-2.5 text-lg leading-5 text-white  duration-300 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 active:scale-90 transition-transform"
          >
            Save
          </button>
          {/* <div className="flex justify-end mt-6">
          <button
            type="button"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AddFood;
