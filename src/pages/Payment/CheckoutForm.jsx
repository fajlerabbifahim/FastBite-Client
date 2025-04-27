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
  // console.log(users);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, totalPrice]);

  // console.log(clientSecret);
  const handlePurchase = async (e) => {
    // console.log("hello");
    e.preventDefault();

    const contact = e.target.contact.value;
    const address = e.target.address.value;

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
          customer_name: users?.name,
          customer_email: users?.email,
          transactionId: paymentIntent.id,
          contact_number: contact,
          address: address,
          price: totalPrice,
          Cart: Cart,
        };
        const res = await axiosPublic.post("/orders", payment);
        // console.log("83", res);

        if (res.data.acknowledged) {
          notify("success", "Your payment successful");
          // const res1 = await axiosPublic.patch(`/class-update/${id}`);
          setIsOpen(false);
          navigate("/dashboard/orders");
        }
      }
    }
  };

  return (
    <div className="my-2">
      <form onSubmit={handlePurchase}>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              <strong>Name</strong>
            </label>
            <input
              className="w-full p-2 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md bg-white"
              name="name"
              id="name"
              type="text"
              value={users?.name}
              readOnly
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              <strong>Email</strong>
            </label>
            <input
              className="w-full p-2 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md bg-white"
              name="email"
              id="email"
              type="email"
              value={users?.email}
              readOnly
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="contact" className="block text-gray-600">
              <strong>Contact Number</strong>
            </label>
            <input
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
          <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full cursor-pointer px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
            >
              cancel
            </button>
            <button
              type="submit"
              className="w-full cursor-pointer  px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40"
            >
              {`Pay $${totalPrice}`}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
