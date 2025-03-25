import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Lottie from "react-lottie-player";
import signupAnimation from "../../assets/authLotties/signup-animation.json";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
  
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

           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
