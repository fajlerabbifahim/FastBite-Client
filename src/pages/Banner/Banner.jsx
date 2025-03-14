import { useState } from "react";
import { FaMapMarkerAlt, FaArrowRight, FaStar } from "react-icons/fa";
import bannerIMG from "../../assets/hero-img/delivery-man.png";

export function Banner() {
  const [location, setLocation] = useState("");

  return (
    <div className="relative overflow-hidden bg-white py-10 md:py-14">
      {/* Background Texture */}
      {/* <div className="absolute inset-0 bg-gray-100 bg-[url('/path-to-texture.png')] bg-cover opacity-20"></div> */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-red-600">Fast, Fresh &amp; Right</span>{" "}
              <span className="text-gray-800">To Your Door</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Order dishes from favorite restaurants near you. Enjoy hot meals
              delivered in minutes.
            </p>
            {/* Search Box */}
            <div className="relative max-w-lg mx-auto md:mx-0">
              <div className="flex flex-col sm:flex-row shadow-lg rounded-xl overflow-hidden">
                <div className="relative flex-grow bg-white">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your delivery address"
                    className="w-full pl-12 pr-4 py-4 border-0 focus:ring-0 focus:outline-none"
                  />
                </div>
                <button className="bg-red-600 text-white font-medium px-6 py-4 flex items-center justify-center hover:bg-red-700 transition-colors">
                  <span className="mr-2">Find Food</span>
                  <FaArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Customer Count */}
            <div className="text-sm text-gray-600 mt-4">
              <span className="font-bold text-red-600">10,000+</span> happy
              customers
            </div>
          </div>

          {/* Right Content - Image & Badges */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-600 to-red-500 rounded-tl-[200px] rounded-br-[200px] lg:rounded-tl-[350px] lg:rounded-br-[350px] -z-10"></div>

            <img
              className="relative z-10 max-w-xs md:max-w-sm lg:max-w-md"
              src={bannerIMG}
              alt="Delivery Man"
            />

            {/* Floating Badges */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white rounded-lg shadow-xl p-3 transform rotate-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    🍕
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">Order Delivered!</div>
                    <div className="text-gray-500">15 mins ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 z-20">
              <div className="bg-white rounded-lg shadow-xl p-3 transform -rotate-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <FaStar />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">4.9 Rating</div>
                    <div className="text-gray-500">Top Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
