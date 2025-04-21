import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user, notify } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["food"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/food/${user?.email}`);
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
    <section className="w-11/12 px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Foods
        </h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          {foods.length} foods
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr className="bg-green-600">
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center  text-xl font-semibold text-white gap-x-3">
                        <span>Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2 text-xl font-semibold text-white">
                        <span>Category</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex  items-center  text-xl font-semibold text-white gap-x-2">
                        <span>Quantity</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2 text-xl font-semibold text-white">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5  text-left rtl:text-right    text-xl font-semibold text-white"
                    >
                      Actions
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {foods?.map((food) => (
                    <tr key={food._id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-20 h-20 rounded-full"
                              src={food.image}
                              alt=""
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white text-lg">
                                {food.name}
                              </h2>
                              <p className="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-left px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">
                          {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> */}
                          <h2 className="text-lg font-semibold ">
                            {food.category}
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">
                          {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> */}
                          <h2 className="text-lg font-semibold ">
                            {food.quantity}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-lg font-semibold whitespace-nowrap">
                        {food.price}
                      </td>
                      <td className="px-4 py-4 text-lg whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(food._id)}
                          className="flex cursor-pointer items-center px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500 transition duration-300"
                        >
                          <span className="mr-2 font-semibold">Remove</span>
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
    </section>
  );
};

export default ManageMyFoods;
