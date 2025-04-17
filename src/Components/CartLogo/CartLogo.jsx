import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CartLogo = () => {
  const { cart } = useContext(AuthContext);
  return (
    <div className="w-11/12  mx-auto -mr-12 lg:-mr-1 -mt-3 lg:-mt-0 bg-transparent">
      <div className="flex justify-end my-4 relative">
        <Link to={`/order-details`} className=" cursor-pointer">
          <div className="lg:p-6 p-4 lg:border-4 border-2  rounded-full border-gray-700 lg:w-12 lg:h-12 w-[4px] h-[3px] flex justify-center items-center hover:bg-stone-300 duration-300 bg-white dark:bg-black">
            <span className="lg:text-3xl text-xl">
              <IoMdCart />
            </span>
            <p className="absolute lg:w-5 lg:h-6 w-4 h-4  bg-red-600 p-1  -top-[14%] -right-[0.2%] lg:text-xs text-[7px] text-center text-white rounded-full">
              {cart}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartLogo;
