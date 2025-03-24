
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Lottie from "react-lottie-player";
import { useForm } from "react-hook-form";
import signupAnimation from "../../assets/authLotties/signup-animation.json";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
const { register, handleSubmit, reset, formState: { errors }, } = useForm();const { createUser, updateUserProfile } = useContext(AuthContext);
const navigate = useNavigate()
   
  const onSubmit = data => {
  ;
        createUser(data.email, data.password)
            .then(resul => {
                const loggedUser = resul.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL) 
                    .then(() => {
                        // create user entry in the database
                      
                       
                        const res =  userinfo
                         .then(res => {
                          if (res.data.insertedId) {
                          console.log('user added to the database');     
                          reset()
                          navigate('/');
                           Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "User create successfully",
                           showConfirmButton: false,
                           timer: 1500
                           });
                           
                           }
                           })
                       
                    })
                .catch(error=> console.log(error))
        })
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
             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
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
            <SocialLogin></SocialLogin>
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
