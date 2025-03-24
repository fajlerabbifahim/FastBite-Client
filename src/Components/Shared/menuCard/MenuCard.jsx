import { use, useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const MenuCard = ({ menu }) => {

    const {cart, setCart} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);


    const handleAddToCart = () =>{
        const cartItems = {
            [menu?._id] : quantity,
        }
        console.log(cartItems);
        setCart(prev => prev+quantity);
    }


    return (
        <div>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300  hover:shadow-xl">
                <img
                    className="w-full h-48 object-cover"
                    src={menu?.image}
                    alt="Cheese Burger"
                />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{menu?.name}</h2>
                        <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-lg">
                            {menu?.category}
                        </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                        {menu?.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600 dark:text-green-400">${menu?.price}</span>
                        <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${menu?.stock > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                                }`}
                        >
                            {menu?.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>

                    <div className="flex gap-4 justify-between">
                        <button className="mt-4 w-full bg-red-600 text-white font-semibold py-2 rounded-lg transition-all cursor-pointer">
                            View Details
                        </button>
                        <button onClick={() => setIsOpen(true)} className="mt-4 w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 rounded-lg transition-all cursor-pointer">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>


            {/* Modal-> add to cart */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-800">{menu?.name}</h2>
                        <p className="mt-2 text-gray-600">Quantity:</p>
                        <div className="flex gap-2 justify-between mt-2">
                            <button className="py-1 px-3 rounded-lg font-bold bg-gray-200 text-center cursor-pointer" onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(prev => prev - 1)
                                }
                            }}> <FaMinus />
                            </button>
                            <p className="bg-red-200 w-full text-center rounded-lg text-lg font-medium">{quantity}</p>
                            <button className="py-1 px-3 rounded-lg font-bold bg-gray-200 text-center cursor-pointer" onClick={() => {
                                if (quantity < menu?.stock) {
                                    setQuantity(prev => prev + 1)
                                }
                            }}> <FaPlus />
                            </button>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={handleAddToCart}
                                className="px-4 py-2 bg-red-600 text-white hover:bg-red-800 rounded-lg cursor-pointer"
                            >
                                Add To Cart
                            </button>
                            <button
                                onClick={() => {
                                    setQuantity(1);
                                    setIsOpen(false);
                                }}
                                className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MenuCard;