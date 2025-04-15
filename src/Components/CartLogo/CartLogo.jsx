import { useContext, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../pages/LoadingSpinner";

const CartLogo = () => {
  // const { cart } = useContext(AuthContext);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: Cart = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["addToCart"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/addToCart/${user?.email}`);
      return data;
    },
  });

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="w-11/12 mx-auto bg-transparent">
      <div className="flex justify-end my-4 relative">
        <Link to={`/dashboard/customer/addToCart`} className=" cursor-pointer">
          <div className="p-6 border-4 rounded-full border-amber-400 w-12 h-12 flex justify-center items-center bg-white dark:bg-black">
            <span className="text-3xl">
              <IoMdCart />
            </span>
            <p className="absolute min-w-5 min-h-5 bg-red-600 p-1 rounded-4xl -top-[12%] -right-[0.2%] text-xs text-center text-white">
              {Cart?.cart?.length}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartLogo;
