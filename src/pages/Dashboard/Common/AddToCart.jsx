import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import Payment from "../../Payment/Payment";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../features/loader/loaderSlice";
import GlobalLoader from "../../../components/GlobalLoader/GlobalLoader";
import { MdDelete } from "react-icons/md";
import {
  setAddToCart,
  setLoading,
} from "../../../features/addToCart/addToCartSlice";
import Swal from "sweetalert2";

const AddToCart = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    data: Cart = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["addToCart"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/addToCart/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  // const { addToCart, isLoading, error } = useSelector(
  //   (state) => state.addToCart
  // );
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       dispatch(setLoading(true));
  //       const res = await axiosPublic(`/addToCart/${user?.email}`);
  //       dispatch(setAddToCart(res.data));
  //     } catch (error) {
  //       dispatch(setError(error.message));
  //     }
  //   };
  //   if (user?.email) {
  //     fetchData();
  //   }
  // }, [dispatch, user?.email, axiosPublic]);

  // useEffect(() => {
  //   if (isLoading) {
  //     dispatch(setLoader(true));
  //   } else {
  //     dispatch(setLoader(false));
  //   }
  // }, [isLoading]);

  // console.log("77", addToCart);
  const cart = Cart?.reduce((current, item) => item.quantity + current, 0);
  const totalPrice = Cart?.reduce((sum, item) => sum + item.price, 0);
  const closeModal = () => {
    setIsOpen(false);
  };
  // console.log(data);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/deleteCartItem/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch();
        // console.log(res)
      }
    });
  };
  //   console.log(Cart?.cart?.length > 0);
  return (
    <div>
      {Cart?.length > 0 ? (
        <section className="w-11/12 mx-auto pl-2">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total Items
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {cart} Items
            </span>
          </div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-green-500 text-white dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3 text-white text-lg">
                            <span>Name</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 font-normal text-left rtl:text-right text-white text-lg"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 font-normal text-left rtl:text-right text-white text-lg"
                        >
                          Price
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {Cart?.map((food, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-10 h-10 rounded-full"
                                  src={food.food_image}
                                  alt=""
                                />

                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {food.food_name}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 font-semibold text-lg  dark:text-gray-300 whitespace-nowrap">
                            {food.quantity}
                          </td>
                          <td className="px-4 py-4 font-semibold text-lg  dark:text-gray-300 whitespace-nowrap">
                            {food.price}
                          </td>
                          <td className="px-4 py-4 flex justify-center text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <button
                              onClick={() => handleDelete(food._id)}
                              className="btn cursor-pointer flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                            >
                              <span className="mr-2">remove</span>
                              <MdDelete className="text-xl" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-end gap-20 mr-20 mt-2 items-center">
            <h1 className="font-semibold">Total Price</h1>
            <h1 className="font-semibold"> = {totalPrice} TK</h1>
            <button
              onClick={() => setIsOpen(true)}
              className="btn bg-red-600 text-xl text-white"
            >
              Pay
            </button>
          </div>
          <div className="relative flex justify-center">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="fixed  inset-0 z-10 flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center bg-black/40 bg-opacity-100 sm:block sm:p-0"
                  role="dialog"
                  aria-modal="true"
                >
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="border-2 border-red-600 relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                    <Payment
                      Cart={Cart}
                      totalPrice={totalPrice}
                      setIsOpen={setIsOpen}
                    ></Payment>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      ) : (
        <div className="w-11/12 mx-auto my-10">
          <h1 className="text-red-700 font-bold text-2xl">No Cart Available</h1>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
