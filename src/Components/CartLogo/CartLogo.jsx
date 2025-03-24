import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CartLogo = () => {
    const {cart}= useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto bg-transparent">
            <div className=" flex justify-end my-4 relative">
                <Link to={`/order-details`} className=" cursor-pointer">
                    <div className="p-6 border-4 rounded-full border-amber-400 w-12 h-12 flex justify-center items-center bg-white dark:bg-black">
                        <span className="text-3xl">
                            <IoMdCart />
                        </span>
                        <p className="absolute min-w-5 min-h-5 bg-red-600 p-1 rounded-4xl -top-[12%] -right-[0.2%] text-xs text-center text-white" >{cart}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CartLogo;