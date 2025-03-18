import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Lottie from "react-lottie-player";
import loginAnimation from "../../assets/authLotties/login-animation.json";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center">
        {/* Left Side - Lottie Animation */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <Lottie
            loop
            animationData={loginAnimation}
            play
            style={{ width: 250, height: 250 }}
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 space-y-8 px-6">
          <div className="text-center">
            <Link to="/" className="flex gap-1 items-center justify-center">
              <FaHome className="text-red-600" />
              <h1 className="text-red-600 font-medium">Back to home</h1>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to continue to FastBite
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-sm w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <button
                  type="button"
                  className="cursor-pointer font-medium text-red-600 hover:text-red-500"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Sign in
              </button>

              <button
                type="button"
                className=" cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-sm shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
