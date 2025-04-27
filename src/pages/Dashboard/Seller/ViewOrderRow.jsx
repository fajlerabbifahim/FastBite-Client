import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import RiderModal from "./RiderModal";

const ViewOrderRow = ({ order, refetch, allRider }) => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const handleCategoryChange = async (newStatus) => {
    if (order.status === newStatus) return;
    if (newStatus === "Deliver") {
      setIsOpen(true);
      try {
        await axiosPublic.post(`/deliver-item`);
        refetch();
        toast.success("Item successfully delivered to rider");
      } catch (err) {
        toast.error(err.response.data);
      }
    } else {
      try {
        await axiosPublic.patch(`/restaurant-order/${order._id}`, {
          status: newStatus,
        });
        refetch();
        toast.success("status update");
      } catch (err) {
        toast.error(err.response.data);
      }
    }
  };
  return (
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
          <h2 className="font-normal text-xl ">{order.quantity}</h2>
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
          <label className="text-gray-700 dark:text-gray-200" htmlFor="status">
            {/* Category */}
          </label>
          <select
            name="status"
            defaultValue={order.status}
            onChange={(e) => handleCategoryChange(e.target.value)}
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
        <RiderModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          allRider={allRider}
        ></RiderModal>
      </td>
    </tr>
  );
};

export default ViewOrderRow;
