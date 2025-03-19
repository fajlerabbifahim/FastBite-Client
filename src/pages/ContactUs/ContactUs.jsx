const ContactUs = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#e10101] dark:text-red-400">
                    Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-3">
                    Have questions or need assistance? We're here to help!
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left: Contact Form */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Send Us a Message</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e10101] dark:focus:ring-red-400" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e10101] dark:focus:ring-red-400" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300">Message</label>
                                <textarea className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#e10101] dark:focus:ring-red-400" rows="4" placeholder="Write your message"></textarea>
                            </div>
                            <button className="w-full bg-[#e10101] dark:bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Feel free to reach out to us for any inquiries, support, or feedback!
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-700 dark:text-gray-300">
                                📍 <span className="ml-2">123 Food Street, City, Country</span>
                            </p>
                            <p className="flex items-center text-gray-700 dark:text-gray-300">
                                📞 <span className="ml-2">+123 456 7890</span>
                            </p>
                            <p className="flex items-center text-gray-700 dark:text-gray-300">
                                ✉️ <span className="ml-2">support@fastbite.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

