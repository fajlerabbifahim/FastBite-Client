import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = ({ Cart, setIsOpen, totalPrice }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();

  // console.log(skill)

  return (
    <div className=" ">
      {/* <h1 className="text-center text-xl font-semibold italic">Payment Page</h1> */}
      <div className="w-full">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            Cart={Cart}
            totalPrice={totalPrice}
            // handlePurchase={handlePurchase}
            setIsOpen={setIsOpen}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
