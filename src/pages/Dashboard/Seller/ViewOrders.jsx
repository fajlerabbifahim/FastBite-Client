import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ViewOrders = () => {
  const { user, notify } = useAuth();
  const axiosPublic = useAxiosPublic();

  const [status, setStatus] = useState("");
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["restaurant-order"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/restaurant-order/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  // console.log(orders);
  const handleCategoryChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <section className="w-11/12  px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Orders
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {orders.length} orders
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className=" dark:bg-gray-800 bg-green-600">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-x-3">
                        <span className="text-lg text-white font-semibold">
                          Name
                        </span>
                      </div>
                    </th>
                    <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-2">
                        <span className="text-lg text-white font-semibold">
                          Quantity
                        </span>
                      </button>
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-2">
                        <span className="text-lg text-white font-semibold">
                          Price
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        ></svg>
                      </button>
                    </th>
                    <th className="px-4 py-3.5 text-lg text-white font-semibold  text-left rtl:text-right  dark:text-gray-400">
                      Customer Email
                    </th>
                    <th className="px-4 py-3.5 text-lg text-white font-semibold text-left rtl:text-right dark:text-gray-400">
                      Contact Number
                    </th>
                    <th className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-20 h-20 rounded-full"
                              src={order.food_image}
                              alt="Arthur Melo"
                            />
                            <div>
                              <h2 className="font-medium text-lg text-gray-800 dark:text-white">
                                {order.food_name}
                              </h2>
                              <p className="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">
                          {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> */}
                          <h2 className="font-normal text-xl ">
                            {order.quantity}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-lg dark:text-gray-300 whitespace-nowrap">
                        {order.price}
                      </td>
                      <td className="px-4 py-4 text-lg dark:text-gray-300 whitespace-nowrap">
                        {order.customer_email}
                      </td>
                      <td className="px-4 py-4 text-lg  dark:text-gray-300 whitespace-nowrap">
                        {order.contact}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div>
                          <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="status"
                          >
                            {/* Category */}
                          </label>
                          <select
                            name="status"
                            value={status}
                            onChange={handleCategoryChange}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          >
                            <option disabled value="">
                              Status
                            </option>
                            <option value="isPending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Deliver">Deliver</option>
                          </select>
                        </div>
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
  );
};

export default ViewOrders;
