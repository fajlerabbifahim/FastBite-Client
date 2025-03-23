import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Lottie from "react-lottie-player";
import loginAnimation from "../../assets/authLotties/login-animation.json";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
 const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'
  const { signIn, } = useContext(AuthContext)

   // Email Password Signin
  const handleSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
   
    try {
      //User Login
      await signIn(email, pass)
      toast.success('Login Successful')
      const user = { email: email }
      console.log(user.email);
      navigate(from, { replace: true })
      
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

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

         <form onSubmit={handleSignIn}>
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

            <input
                name='password'
                placeholder='Password'
                className=' w-full px-4 py-2  border rounded-3xl text-white bg-gray-500 border-white shadow-xl'
                
              />
            </div>
            <div className='flex justify-between w-10/12  mx-auto text-white my-4'>
              <div><h2>Remember me</h2></div>
              <div><h2>Forgot password</h2></div>
            </div>
            <div className='mt-6 w-10/12 mx-auto '>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-bold tracking-wide text-black capitalize transition-colors duration-300 transform bg-white hover:bg-slate-300 focus:outline-none focus:ring focus:ring-gray-300 rounded-2xl'
              >
                Sign In
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
