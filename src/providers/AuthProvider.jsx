/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
import auth from "../firebase/firebase.config";
import axios from "axios";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState(0);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("CurrentUser-->", currentUser?.email);
      if (currentUser?.email) {
          setUser(currentUser)

          // const {data = {}} = await axios.get(`${import.meta.env.VITE_Server}/cartItems?email=${currentUser.email}`)
          // let totalQuantity = 0;
          // Object.keys(data).forEach(key =>{
          //   if(key !== 'email' && key !=='_id')
          //   {
          //     totalQuantity = totalQuantity + data[key];
          //   }
          // });
          // setCart(totalQuantity);

          // console.log('cartdata ---- > ', data);
          // Get JWT token
      //     await axios.post(
      //         `${import.meta.env.VITE_API_URL}/jwt`,
      //         {
      //             email: currentUser?.email,
      //         },
      //         { withCredentials: true }
      //     )
      // } else {
      //     setUser(currentUser)
      //     await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      //         withCredentials: true,
      //     })
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    menuItems,
    setMenuItems,
    cart,
    setCart,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
