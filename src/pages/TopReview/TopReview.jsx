import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../../Components/Shared/SectionHeading";

const products = [
  {
    name: "Margherita Pizza",
    price: "420TK",
    discount: "520TK",
    rating: 5,
    status: "Save 50%",
    image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
  },
  {
    name: "Spicy Burger",
    price: "550TK",
    discount: "650TK",
    rating: 4.5,
    status: "Save 50%",
    // image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
    image:
      "https://images.pexels.com/photos/29872713/pexels-photo-29872713/free-photo-of-mouthwatering-stacked-bacon-cheeseburger.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Grilled Salmon",
    price: "350TK",
    discount: "450TK",
    rating: 5,
    status: "Save 50%",
    // image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
    image:
      "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Vegan Salad",
    price: "550TK",
    discount: "7550TK",
    rating: 4.8,
    status: "Sold Out",
    // image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
    image:
      "https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "BBQ Chicken Wings",
    price: "450TK",
    discount: "600TK",
    rating: 4.7,
    status: "Sold Out",
    // image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
    image:
      "https://images.pexels.com/photos/9618869/pexels-photo-9618869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TopReview = () => {
  return (
    <div className="p-10 text-center dark:bg-gray-900 dark:text-white">
      <SectionHeading
        title={"Top Reviewed Dishes"}
        subTitle={
          "Discover our most loved dishes that keep our customers coming back for more. Fresh ingredients, authentic flavors, and culinary excellence in every bite."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-red-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-2/5 h-28 object-cover rounded-md mr-4"
            />
            <div className="text-left">
              {product.status && (
                <span
                  className={`px-2 py-1 text-xs font-bold text-white rounded ${
                    product.status === "Sold Out"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {product.status}
                </span>
              )}
              <h3 className="text-lg font-semibold mt-2 dark:text-white">
                {product.name}
              </h3>
              <div className="flex mt-2 text-yellow-500">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-green-600 text-lg font-semibold mt-2 dark:text-green-400">
                {product.price}{" "}
                <span className="text-gray-400 line-through dark:text-gray-500">
                  {product.discount}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopReview;
