import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {
  setAddToCart,
  setError,
  setLoading,
} from "../../features/addToCart/addToCartSlice";
import { setLoader } from "../../features/loader/loaderSlice";

const CartLogo = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  const { addToCart, isLoading } = useSelector((state) => state.addToCart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axiosPublic(`/addToCart/${user?.email}`);
        dispatch(setAddToCart(res.data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    if (user?.email) {
      fetchData();
    }
  }, [dispatch, user?.email, axiosPublic]);

  useEffect(() => {
    dispatch(setLoader(isLoading));
  }, [isLoading, dispatch]);

  const cartItemCount =
    addToCart?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <div className="relative">
      <Link to="/dashboard/addToCart" className="relative group">
        <div className="w-12 h-12 flex items-center justify-center rounded-full  transition-transform group-hover:scale-110 duration-300">
          <FiShoppingCart className="text-[28px]" />
        </div>
        {cartItemCount > 0 && (
          <span className="absolute -top-0 -right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
            {cartItemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartLogo;
