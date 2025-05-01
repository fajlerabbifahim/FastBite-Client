import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AssignOrderRow = ({ order, refetch }) => {
  const {
    _id,
    food_image,
    food_name,
    quantity,
    price,
    customer_email,
    customer_number,
    status,
  } = order || {};
  console.log(status);
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const handleCategoryChange = async (newStatus) => {
    console.log(order._id);
    if (status === newStatus) return;
    console.log(newStatus);
    try {
      const res = await axiosPublic.patch(`/deliver-item/${order._id}`, {
        status: newStatus,
      });
      console.log(res);
      refetch();
      toast.success("status update");
    } catch (err) {
      toast.error(err.response);
    }
  };
  return (
    order.status !== "Deliver" && (
      <tr>
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
          {order.customer_number}
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
              defaultValue={order.status}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option disabled value="">
                Status
              </option>
              <option value="Handed Over to Rider">Rider</option>
              <option value="Deliver">Deliver</option>
            </select>
          </div>
        </td>
      </tr>
    )
  );
};

export default AssignOrderRow;
