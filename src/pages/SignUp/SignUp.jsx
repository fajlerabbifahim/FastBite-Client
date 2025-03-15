import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUpload } from "react-icons/fa";
import Lottie from "react-lottie-player";
import signupAnimation from "../../assets/authLotties/signup-animation.json";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white rounded-3xl mt-10 shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row items-center">
        {/* Left Side - Animation */}
        <div className="md:w-1/2 w-full flex justify-center p-6">
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
            className="flex gap-2 items-center justify-center text-red-600"
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
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col items-center border-2 border-dashed p-4 rounded-lg hover:border-red-500 transition-colors">
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
              <label htmlFor="image" className="cursor-pointer text-center">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <>
                    <FaUpload className="h-10 w-10 text-gray-400 mx-auto hover:text-red-500 transition-colors" />
                    <span className="mt-2 block text-sm text-gray-600">
                      Upload your photo
                    </span>
                  </>
                )}
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className=" cursor-pointer w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Sign up
            </button>

            {/* Google Signup */}
            <button
              type="button"
              className=" cursor-pointer w-full flex items-center justify-center py-2 border rounded-md"
            >
              <FcGoogle className="h-5 w-5 mr-2 " /> Continue with Google
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 hover:text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
