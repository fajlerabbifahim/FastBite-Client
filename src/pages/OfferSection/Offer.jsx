import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Offer = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-gradient-to-r from-red-100 to-orange-200 shadow-2xl rounded-lg p-8 md:p-12 w-full max-w-7xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-red-500 opacity-20 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500 opacity-20 rounded-tl-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center drop-shadow-md">
          Exclusive Membership Offer! 🎉
        </h2>
        <p className="text-gray-800 text-center mt-3 text-lg font-medium">
          Enjoy special discounts up to{" "}
          <span className="font-extrabold text-red-500">30% OFF</span> as a
          premium member!
        </p>

        {/* Offer Highlights */}
        <div className="mt-6 space-y-3 text-lg">
          <p className="flex items-center text-gray-900">
            <FaCheckCircle className="text-red-500 mr-3" /> Early Access to
            Deals
          </p>
          <p className="flex items-center text-gray-900">
            <FaCheckCircle className="text-red-500 mr-3" /> Extra Discounts on
            Special Days
          </p>
          <p className="flex items-center text-gray-900">
            <FaCheckCircle className="text-red-500 mr-3" /> Free Delivery for
            Members
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className=" cursor-pointer px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transform transition-all">
            Become a Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
