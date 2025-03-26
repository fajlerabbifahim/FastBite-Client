import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";

const ManageRestaurants = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: restaurants,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      const { data } = await axiosPublic("/restaurants");
      console.log("Fetched Data:", data);
      return data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <section className="w-11/12 mx-auto pl-2">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Restaurant
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {restaurants.length}
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Name
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Contact
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Email address
                    </th>
                    <th className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {restaurants.map((restaurant) => (
                    <tr key={restaurant._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-10 h-10 rounded-full"
                            src={restaurant.image}
                            alt="User 1"
                          />
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white">
                              {restaurant.name}
                            </h2>
                            <h3 className="flex items-center gap-1 text-gray-500 ">
                              <FaMapMarkerAlt /> {restaurant.location}
                            </h3>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {restaurant.contact_number}
                      </td>
                      {/* <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {restaurant.status}
                      </td> */}
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <span
                          className={
                            restaurant.status === "open"
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {restaurant.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {restaurant.owner_email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <button className="px-3 py-1 text-white bg-red-600 rounded-lg">
                          Remove
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
    </section>
  );
};

export default ManageRestaurants;
