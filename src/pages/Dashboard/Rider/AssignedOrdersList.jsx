import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../LoadingSpinner";
import AssignOrderRow from "./AssignOrderRow";

const AssignedOrdersList = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: myDeliverItem = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["deliver-item"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/deliver-item/${user?.email}`);
      return data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  // console.log(myDeliverItem);
  const tempDeliver = myDeliverItem.filter((item) => item.status !== "Deliver");
  return (
    <section className="p-4">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Deliver Item
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {tempDeliver.length} Items
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
                        <span className=" text-white font-semibold">Name</span>
                      </div>
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-2">
                        <span className=" text-white font-semibold">
                          Quantity
                        </span>
                      </button>
                    </th>
                    <th className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <button className="flex items-center gap-x-2">
                        <span className=" text-white font-semibold">Price</span>
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
                    <th className="px-2 py-3.5 text-white font-semibold  text-left rtl:text-right  dark:text-gray-400">
                      Customer Email
                    </th>
                    <th className="px-0 py-0  text-white font-semibold text-left rtl:text-right dark:text-gray-400">
                      Contact Number
                    </th>
                    <th className="relative py-3.5 px-2">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {tempDeliver.map((order) => (
                    <AssignOrderRow
                      key={order._id}
                      order={order}
                      refetch={refetch}
                    ></AssignOrderRow>
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

export default AssignedOrdersList;
