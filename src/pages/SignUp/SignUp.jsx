import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUpload } from "react-icons/fa";
import Lottie from "react-lottie-player";
import signupAnimation from "../../assets/authLotties/signup-animation.json";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { handleRegister, user, setUser, updateUserProfile, notify } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // const cPassword = form.get('cPassword');

    const hasUppercase = /.*[A-Z].*/;
    const hasLowercase = /.*[a-z].*/;
    const hasValidLength = /.{6,}/;

    if (!hasUppercase.test(password)) {
      setError({ upperCase: "must have one uppercase letter" });
      return;
    }
    if (!hasLowercase.test(password)) {
      setError({ lowerCase: "must have one lowercase letter" });
      return;
    }
    if (!hasValidLength.test(password)) {
      setError({ length: "must be more than 6 character" });
      return;
    }

    handleRegister(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          const userInfo = { name, email, photo, role: "member" };
          axiosPublic.post("/users", userInfo).then((res) => {
            notify("success", `Welcome ${name} your registration successful`);
            navigate("/");
          });
        });
      })
      .catch((error) =>
        notify("error", "Your account was not created successfully")
      );
  };
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
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Your Full Name
              </label>
              <input
                id="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="name"
              />
            </div>
            <div className="mt-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Photo URL
              </label>
              <input
                id="photo-url"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="url"
                name="photo"
              />
            </div>

            <div className="mt-2">
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

            <div className="mt-2">
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

            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-6 py-2 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Register
              </button>
            </div>
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
