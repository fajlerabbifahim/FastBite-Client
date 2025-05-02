import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Offer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="flex items-center justify-center relative    "
    >
      <div className="relative bg-gradient-to-r from-red-100 to-orange-200 p-6 md:p-12 w-full overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-red-500 opacity-20 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500 opacity-20 rounded-tl-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center drop-shadow-md">
          Exclusive Membership Offer! 🎉
        </h2>
        <p className="text-gray-800 text-center mt-3 text-lg font-medium">
          Enjoy special discounts up to
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
          <button
            onClick={handleModalToggle}
            className="cursor-pointer px-8 py-2.5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transform transition-all"
          >
            Become a Member
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative border-2 border-red-300">
            <button
              onClick={handleModalToggle}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl"
            >
              <HiX />
            </button>
            <h3 className="text-2xl font-bold text-center text-red-600 mb-6">
              Become a Premium Member - $10
            </h3>
            <form className="space-y-4 text-red-700">
              <div>
                <label className="block font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Card Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded-md font-semibold hover:scale-105 transition-all"
              >
                Submit & Pay $10
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
