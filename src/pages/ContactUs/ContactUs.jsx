import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from '../../Components/Shared/SectionHeading';

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
        <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    title="Contact Us"
                    subTitle="Have questions? We're here to help! Reach out to us through any of these channels."
                />

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className={`${info.color} mb-4`}>
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600 dark:text-gray-300">{detail}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <form className="space-y-6">
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
                                className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
