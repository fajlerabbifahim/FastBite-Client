import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Lottie from "react-lottie-player";
import { useForm } from "react-hook-form";
import signupAnimation from "../../assets/authLotties/signup-animation.json";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";
import { imageUpload, saveUser } from "../../api/utils";

const SignUp = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  // const { createUser, updateUserProfile } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   createUser(data.email, data.password).then((result) => {
  //     const loggedUser = result.user;
  //     console.log(loggedUser);
  //     updateUserProfile(data.name, data.photoURL)
  //       .then(() => {
  //         // create user entry in the database

  //         const res = userinfo.then((res) => {
  //           if (res.data.insertedId) {
  //             console.log("user added to the database");
  //             reset();
  //             navigate("/");
  //             Swal.fire({
  //               position: "top-end",
  //               icon: "success",
  //               title: "User create successfully",
  //               showConfirmButton: false,
  //               timer: 1500,
  //             });
  //           }
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   });
  // };
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();
  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const image_url = await imageUpload(image);

    try {
      //2. User Registration
      const result = await createUser(email, password);

      //3. Save username & profile photo
      await updateUserProfile(name, image_url);
      // console.log(result)
      // save user info in db if the user is new
      await saveUser({
        ...result?.user,
        displayName: name,
        photoURL: image_url,
      });

      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
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

          {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-sm  border-gray-300"
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
                {...register("email", { required: true })}
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-sm border-gray-300"
              />
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
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
          </form> */}
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-2 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              {/* <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                />
              </div> */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm dark:text-gray-300"
                >
                  Select Image:
                </label>

                <input
                  type="file"
                  required
                  id="image"
                  name="image"
                  accept="image/*"
                  className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-red-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button className="w-full px-6 py-2.5 text-sm cursor-pointer font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center pt-0 space-x-1 ">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center space-x-2 border m-2 p-2 border-gray-300 border-rounded cursor-pointer rounded-xl"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?
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
