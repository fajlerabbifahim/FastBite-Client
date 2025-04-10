
// import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  
  // const navigate = useNavigate()
  const handleGoogleSingIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
        // const userInfo = {
        //   email: result.user?.email,
        //   name: result.user?.displayName,
        //   role: 'member'
        // }
        // axiosPublic.post('/users', userInfo)
        //   .then(res => {
        //   console.log(res.data);
        //   navigate('/')
        // })
        
    })
}
  return (
    <div className="flex justify-center">
       <div className="divider"></div>
    
   
      <button
        onClick={handleGoogleSingIn}
                type="button"
                className=" cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-sm shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
    </div>
  );
};

export default SocialLogin;