import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaStar } from "react-icons/fa";
import bannerIMG from "../../assets/hero-img/banner_img.png";

export function Banner() {
  const [location, setLocation] = useState("");

  return (
    <div className="relative overflow-hidden lg:mt-16 bg-white dark:bg-gray-800 dark:text-white py-10 md:py-5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-red-600">Fast, Fresh &amp; Right</span>{" "}
              <span className="text-gray-800 dark:text-white">To Your Door</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 dark:text-white max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Order dishes from favorite restaurants near you. Enjoy hot meals delivered in minutes.
            </motion.p>

            {/* Search Box */}
            <motion.div
              className="relative max-w-lg mx-auto md:mx-0"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row shadow-lg rounded-xl overflow-hidden">
                <div className="relative  flex-grow">
                  <div className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-red-500">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your delivery address"
                    className="w-full border-[2px]  hover:border-red-500  shadow  rounded-tl-lg border-red-600  duration-500 pl-12 pr-4 py-4  focus:ring-0 focus:outline-none"
                  />
                </div>
                <button className="bg-red-600 text-white font-medium px-6 py-4 flex items-center justify-center duration-500 hover:bg-red-700 transition-colors">
                  <span className="mr-2">Find Food</span>
                  <FaArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="text-sm text-gray-600 dark:text-white mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="font-bold text-red-600">10,000+</span> happy customers
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full md:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 lg:-right-6 -right-2 w-full h-full bg-gradient-to-br from-red-500 to-gray-600 rounded-tl-[200px] rounded-br-[200px] lg:rounded-tl-[350px] lg:rounded-br-[350px] -z-10"></div>

            <motion.img
              src={bannerIMG}
              alt="Delivery Man"
              className="relative z-10 max-w-x md:max-w-sm lg:max-w-2xl rounded-r-full"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            />

            <motion.div
              className="absolute bottom-1/4 left-0 transform -translate-x-1/2 z-20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-xl p-3 transform -rotate-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <FaStar />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold dark:text-black">4.9 Rating</div>
                    <div className="text-gray-500">Top Service</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
