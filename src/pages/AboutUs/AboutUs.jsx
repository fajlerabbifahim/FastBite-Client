import { motion } from "framer-motion";
import aboutusimg from "../../assets/AboutUs_img/About.Us.img.jpg";
import aboutusbannerimg from "../../assets/AboutUs_img/AboutUs_banner_img.jpg";
import aboutusbannerimg2 from "../../assets/AboutUs_img/aboutusbannerimg2.jpg";

const AboutUs = () => {
    return (
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Banner Section */}
            <div className="relative">
                <motion.img 
                    src={aboutusbannerimg} 
                    className="w-full h-72 shadow-inner object-cover"
                    alt="About Us Banner" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                {/* Centered Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.h1 
                        className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Get to Know Us
                    </motion.h1>
                    <motion.p 
                        className="mt-4 text-sm md:text-lg text-white max-w-2xl leading-relaxed drop-shadow-md"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        At <span className="font-semibold">Fast Bite</span>, we are passionate about bringing delicious food straight to your doorstep.
                    </motion.p>
                </div>
            </div>

            {/* Who We Are Section */}
            <div className="w-11/12 mx-auto px-6 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <motion.img 
                        src={aboutusimg} 
                        className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
                        alt="Who We Are"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.05 }}
                    />
                    {/* Right: Text Content */}
                    <motion.div 
                        className="text-center lg:text-left"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#e10101] dark:text-red-400">
                            Who We Are
                        </h1>
                        <p className="py-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            We believe in making food delivery effortless, quick, and enjoyable.
                        </p>
                        <ul className="text-gray-700 dark:text-gray-400 space-y-2">
                            <li> A Wide Selection - Hundreds of restaurants and cuisines.</li>
                            <li> Fast & Reliable Delivery - Your food, fresh and on time.</li>
                            <li> Easy & Secure Payments - Multiple payment options.</li>
                            <li> Customer Satisfaction - We prioritize quality service.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="bg-gray-100 dark:bg-gray-800 py-12 lg:py-20">
                <div className="w-11/12 mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
                    
                    {/* Left: Text Content */}
                    <motion.div 
                        className="text-center lg:text-left"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#e10101] dark:text-red-400">
                            Our Mission
                        </h1>
                        <p className="py-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            We’re on a mission to redefine food delivery!
                        </p>
                        <ul className="text-gray-700 dark:text-gray-400 space-y-2">
                            <li> Diverse Menu - From local favorites to international cuisines.</li>
                            <li> Speedy Delivery - Real-time tracking and fast service.</li>
                            <li> Flexible Payments - Pay via cash, card, or digital wallets.</li>
                        </ul>
                    </motion.div>
                    
                    {/* Right: Image */}
                    <motion.img 
                        src={aboutusbannerimg2} 
                        className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
                        alt="Our Mission"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </div>
            </div>

            {/* Join Us Section */}
            <div className="py-12 lg:py-20">
                <div className="w-11/12 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Text Content */}
                    <motion.div 
                        className="w-full lg:w-1/2 text-center lg:text-left"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#e10101] dark:text-red-400">
                            Join Our Journey
                        </h1>
                        <p className="py-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            We’re revolutionizing food delivery! Whether you’re a foodie, a restaurant owner, or a delivery partner, join us in making every meal memorable.
                        </p>
                    </motion.div>
                    
                    {/* Right: Features List */}
                    <motion.div 
                        className="w-full lg:w-1/2 text-center lg:text-left"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#e10101] dark:text-red-400">
                            Why Choose Us?
                        </h1>
                        <ul className="text-gray-700 dark:text-gray-400 text-lg mt-2 space-y-2">
                            <li> Diverse Menu - Local favorites & international cuisines.</li>
                            <li> Speedy Delivery - Real-time tracking & quick service.</li>
                            <li> Secure Payments - Multiple payment options available.</li>
                            <li> Customer Support - 24/7 assistance for a seamless experience.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
