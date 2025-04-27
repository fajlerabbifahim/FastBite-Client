import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import Payment from "../../Payment/Payment";
import { setLoader } from "../../../features/loader/loaderSlice";
import { useDispatch } from "react-redux";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/orders/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(data);
  const handleDelete = () => {};
  //   console.log(Cart?.cart?.length > 0);
  return (
    <div>
      {data?.length > 0 ? (
        <section className="w-11/12 mx-auto pl-2">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total Items
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {data?.length} Items
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
                          className="px-4 py-3.5 font-normal text-center dark:text-gray-400 text-white text-lg"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 font-normal text-center dark:text-gray-400 text-white text-lg"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 font-normal text-left rtl:text-right dark:text-gray-400 text-white text-lg"
                        >
                          Price
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {data?.map((food, idx) => (
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
                            {food.status === "isPending" ? (
                              <p className="bg-green-400 text-center rounded-2xl py-1">
                                Pending
                              </p>
                            ) : (
                              <p className="bg-green-400 text-center rounded-2xl py-1">
                                {food.status}
                              </p>
                            )}
                          </td>
                          <td className="px-4 py-4 font-semibold text-lg text-center  dark:text-gray-300 whitespace-nowrap">
                            {food.quantity}
                          </td>
                          <td className="px-4 py-4 font-semibold text-lg  dark:text-gray-300 whitespace-nowrap">
                            {food.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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

export default MyOrders;
