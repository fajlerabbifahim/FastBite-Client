import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import Payment from "../../Payment/Payment";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../features/loader/loaderSlice";
import GlobalLoader from "../../../components/GlobalLoader/GlobalLoader";

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

  const closeModal = () => {
    setIsOpen(false);
  };
  // console.log(data);
  const totalPrice = Cart?.cart?.reduce((sum, item) => sum + item.price, 0);
  const handleDelete = () => {};
  //   console.log(Cart?.cart?.length > 0);
  return (
    <div>
      {Cart?.cart?.length > 0 ? (
        <section className="w-11/12 mx-auto pl-2">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total Items
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {Cart?.totalQuantity} Items
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
                          className="px-4 py-3.5 font-normal text-left rtl:text-right dark:text-gray-400 text-white text-lg"
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
                      {Cart?.cart?.map((food, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-10 h-10 rounded-full"
                                  src={food.image}
                                  alt=""
                                />

                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white ">
                                    {food.name}
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
                      // handlePurchase={handlePurchase}
                      setIsOpen={setIsOpen}
                    ></Payment>
                    {/* <div className="text-lg font-medium text-center leading-6 text-gray-900">
                  <h1> Review Info Before Purchase</h1>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Plant: {name} </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Category: {category} </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Customer: {user?.displayName}
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">Price: ${price} </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Available Quantity: {quantity}

                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="quantity" className="mr-4 text-gray-600">
                    <strong>Quantity</strong>
                  </label>
                  <input
                    // max={quantity}
                    value={totalQuantity}
                    onChange={(e) => handleQuantity(parseInt(e.target.value))}
                    className=" p-2 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                    name="quantity"
                    id="quantity"
                    type="number"
                    placeholder="quantity"
                    required
                  />
                </div> */}
                    {/* <div className="space-y-1 text-sm">
                  <label htmlFor="address" className="block text-gray-600">
                    <strong>Address</strong>
                  </label>
                  <textarea
                    // max={5}
                    className="w-full p-2 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                    name="address"
                    onChange={(e) =>
                      setPurchaseInfo((prev) => {
                        return { ...prev, address: e.target.value };
                      })
                    }
                    id="address"
                    type="text"
                    placeholder="Shipping address..."
                    required
                  />
                </div> */}
                    {/* <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-full cursor-pointer px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                      >
                        cancel
                      </button>
                      <button
                        onClick={handlePurchase}
                        className="w-full cursor-pointer  px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      >
                        {`Pay $${totalPrice}`}
                      </button>
                    </div> */}
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
