import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select1 from "react-select";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner";
import useRole from "../../hooks/useUser";
const CheckoutForm = ({ Cart, setIsOpen, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [customError, setCustomError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { user, notify } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [users, isPending] = useRole();

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  console.log(users);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, totalPrice]);

  console.log(clientSecret);
  const handlePurchase = async (e) => {
    console.log("hello");
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCustomError(error.message);
    } else {
      setCustomError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      // console.log('confirmError', confirmError)
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          customerName: users?.name,
          customerEmail: users?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          Cart: Cart,
        };
        const res = await axiosPublic.post("/orders", payment);

        // console.log(classID)
        // let id = "";
        // if (classID) {
        //   id = classID;
        // } else {
        //   const res = await axiosPublic.get(
        //     `/class-name/${selectedClass.value}`
        //   );
        //   id = res.data._id;
        // }

        if (res.data.insertedId) {
          notify("success", "Your payment successful");
          // const res1 = await axiosPublic.patch(`/class-update/${id}`);
          // console.log(res1)
          navigate("/");
        }
      }
    }
  };

  return (
    <div className="my-2">
      <form onSubmit={handlePurchase}>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          {/* {!classData && (
            <div className="mb-4 flex-1 ">
              <label className="block text-sm font-medium text-gray-700">
                Select class
              </label>
              <Select1
                className="mt-1 block w-full text-xl rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                options={addClass}
                defaultValue={selectedClass}
                onChange={setSelectedClass}
              />
            </div>
          )} */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              <strong>Name</strong>
            </label>
            <input
              // max={5}
              className="w-full p-2 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md bg-white"
              name="name"
              id="name"
              type="text"
              // placeholder="Contact Number"
              value={users?.name}
              readOnly
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              <strong>Email</strong>
            </label>
            <input
              // max={5}
              className="w-full p-2 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md bg-white"
              name="email"
              id="email"
              type="email"
              // placeholder="Contact Number"
              value={users?.email}
              readOnly
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="contact" className="block text-gray-600">
              <strong>Contact Number</strong>
            </label>
            <input
              // max={5}
              className="w-full p-2 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md bg-white"
              name="contact"
              id="contact"
              type="number"
              placeholder="Contact Number"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-gray-600">
              <strong>Address</strong>
            </label>
            <textarea
              // max={5}
              className="w-full p-2 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md bg-white"
              name="address"
              id="address"
              type="text"
              placeholder="Shipping address..."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="card-element"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Card Details
            </label>
            <div className="w-full p-3 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "gray",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
          </div>
          {/* <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Pay Now
          </button> */}
          <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full cursor-pointer px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
            >
              cancel
            </button>
            <button
              onClick={handlePurchase}
              className="w-full cursor-pointer  px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
            >
              {`Pay $${totalPrice}`}
            </button>
          </div>
        </div>
        {/* {customError} <p className='text-red-500 font-semibold'>{customError}</p>
                {transactionId && <p className='text-green-500 font-semibold'>{transactionId}</p>} */}
      </form>
    </div>
  );
};

export default CheckoutForm;
