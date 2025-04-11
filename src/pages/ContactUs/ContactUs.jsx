import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../../Components/Shared/SectionHeading';
import img from "../../assets/Contact_Us_img/Contact_Us.jpg";
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
    const contactInfo = [
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: "Phone",
            details: ["+49078-039-23-11", "+49078-028-55-60"],
            color: "text-blue-500"
        },
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: "Email",
            details: ["support@fastbite.com", "info@fastbite.com"],
            color: "text-red-500"
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: "Address",
            details: ["Goldschmidtstraße 13,", "04103 Leipzig, Germany"],
            color: "text-green-500"
        }
    ];

    return (
        <div className="min-h-screen bg-white py-3 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
            <div className="border-auto">
                {/* Animated Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=''
                >
                    <SectionHeading
                        img={img}
                        title="Contact Us"
                        subTitle="Have questions? We're here to help! Reach out to us through any of these channels."
                    />
                </motion.div>

                {/* Animated Contact Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            className="bg-slate-50 hover:border-t-2 hover:border-red-700 duration-500 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform "
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <div className={`${info.color} mb-4`}>
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600 dark:text-gray-300">{detail}</p>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Contact Form */}
                <motion.div
                    className="bg-white max-w-7xl mx-auto dark:bg-gray-800 rounded-lg shadow-lg p-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <form className="space-y-6 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className=" bg-red-600  text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                
                              <IoIosSend className='inline-block  text-[20px]'/>  Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;
