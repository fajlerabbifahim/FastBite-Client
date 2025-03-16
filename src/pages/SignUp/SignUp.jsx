import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUpload } from "react-icons/fa";
import Lottie from "react-lottie-player";
import signupAnimation from "../../assets/authLotties/signup-animation.json";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black px-4">
      <div className="bg-white rounded-3xl mt-10 shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row items-center">
        {/* Left Side - Animation (Hidden on Mobile) */}
        <div className="md:w-1/2 w-full hidden md:flex justify-center p-6">
          <Lottie
            loop
            animationData={signupAnimation}
            play
            className="w-64 h-64"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-8 space-y-6">
          <Link
            to="/"
            className="flex gap-2 items-center justify-center text-red-600 hover:text-red-700 transition-colors"
          >
            <FaHome /> <span className="font-medium">Back to home</span>
          </Link>

          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Create your account
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Join FastBite and start ordering delicious food
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-sm  border-gray-300"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-sm border-gray-300"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-sm border-gray-300"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-sm border-gray-300"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="cursor-pointer w-full py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors"
            >
              Sign up
            </button>

            {/* Google Signup */}
            <button
              type="button"
              className="cursor-pointer w-full flex items-center border-gray-300 justify-center py-2 border rounded-sm hover:text-red-600 transition-colors"
            >
              <FcGoogle className="h-5 w-5 mr-2" /> Continue with Google
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:text-red-500 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
