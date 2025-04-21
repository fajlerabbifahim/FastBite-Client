import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../LoadingSpinner";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageAllFoodItems = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axiosPublic("/foods");
      // console.log("popular dishes food here", data);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
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
        const res = await axiosPublic.delete(`/food/${id}`);
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
  return (
    <section className="w-11/12 mx-auto pl-2">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Items
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {foods.length} Items
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                {/* Sticky thead */}
                <thead className="bg-green-500 dark:bg-gray-800 text-white sticky top-0 z-10">
                  <tr>
                    <th className="py-3.5 px-4 text-center text-lg font-medium">
                      <div className="flex items-center text-center gap-x-3">
                        <span className="">Name</span>
                      </div>
                    </th>
                    <th className="px-4 py-3.5 text-right text-lg font-medium">
                      Quantity
                    </th>
                    <th className="px-4 py-3.5 text-center text-lg font-medium">
                      Price
                    </th>
                    <th className="px-4 py-3.5 text-center text-lg font-medium">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* Scrollable tbody with fixed height */}
              </table>

              {/* tbody placed in scrollable container */}
              <div className="max-h-[450px] overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {foods.map((food, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-20 h-20 rounded-full"
                              src={food.image}
                              alt=""
                            />
                            <span className="font-medium text-gray-800 dark:text-white">
                              {food.name}
                            </span>
                          </div>
                        </td>

                        <td className="px-4 py-4 font-semibold text-lg  dark:text-gray-300 whitespace-nowrap">
                          {food.quantity}
                        </td>
                        <td className="px-4 py-4 font-semibold text-lg  dark:text-gray-300 whitespace-nowrap">
                          {/* {food.quantity} */}
                        </td>
                        <td className="px-4 py-4 font-semibold text-lg dark:text-gray-300 whitespace-nowrap">
                          {food.price}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(food._id)}
                            className="flex cursor-pointer items-center px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500 transition duration-300"
                          >
                            <span className="mr-2">Remove</span>
                            <MdDelete />
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
      </div>
    </section>
  );
};

export default ManageAllFoodItems;
