import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import Lottie from "react-lottie-player";
import loginAnimation from "../../assets/authLotties/login-animation.json";
import { AuthContext } from "../../providers/AuthProvider";

import { toast } from "react-toastify";
import { saveUser } from "../../api/utils";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // Email Password Signin
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      //User Login
      await signIn(email, pass);
      toast.success("Login Successful");
      const user = { email: email };
      console.log(user.email);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // const handleSubmit = () => {};
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const data = await signInWithGoogle();
      await saveUser(data?.user);
      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
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

          {/* <form onSubmit={handleSignIn}>
            <div className='mt-7 w-10/12 mx-auto '>
              
              <input
                placeholder='Email Address'
                name='email'
                className=' w-full px-4 py-2 text-gray-700 bg-gray-500 border border-white shadow-xl rounded-2xl  '
                type='email'
              />
            </div>

            <div className=' mt-5 w-10/12 mx-auto'>
              <div className='flex justify-between'>
                
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

            </div>
              <SocialLogin></SocialLogin>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <Link
                to="/signup"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign up
              </Link>
            </p>
          </div> */}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>
              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <Link
              to={"/signup"}
              className="text-xs hover:text-blue-500 hover:font-bold text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border m-2 p-2 border-gray-300 border-rounded cursor-pointer rounded-xl"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
