import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../../Components/Shared/SectionHeading";

const products = [
  {
    name: "Margherita Pizza",
    price: "1299",
    discount: "299",
    rating: 5,
    status: "Save 50%",
    image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
  },
  {
    name: "Spicy Burger",
    price: "849",
    discount: "199",
    rating: 4.5,
    status: "Save 50%",
    image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
  },
  {
    name: "Grilled Salmon",
    price: "1899",
    discount: "79",
    rating: 5,
    status: "Save 50%",
    image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
  },
  {
    name: "Vegan Salad",
    price: "675",
    discount: "1350",
    rating: 4.8,
    status: "Sold Out",
    image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
  },
  {
    name: "BBQ Chicken Wings",
    price: "1099",
    discount: "299",
    rating: 4.7,
    status: "Sold Out",
    image: "https://i.ibb.co.com/Q3H5jDrc/370860292-11475286.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TopReview = () => {
  return (
    <div className="p-10 text-center dark:bg-gray-900 dark:text-white">
      {/* <SectionHeading
        title={"Top Reviewed Dishes"}
        subTitle={
          "Discover our most loved dishes that keep our customers coming back for more. Fresh ingredients, authentic flavors, and culinary excellence in every bite."
        }
      /> */}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-2/5 h-28 object-cover rounded-md mr-4"
              whileHover={{ y: -5, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="text-left">
              {product.status && (
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className={`px-2 py-1 text-xs font-bold text-white rounded ${
                    product.status === "Sold Out"
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {product.status}
                </motion.span>
              )}
              <h3 className="text-lg font-semibold mt-2 dark:text-white">
                {product.name}
              </h3>
              <div className="flex mt-2 text-yellow-500">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <FaStar />
                  </motion.div>
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
      </motion.div>
    </div>
  );
};

export default TopReview;
