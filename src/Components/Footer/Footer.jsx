import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail, MdDeliveryDining } from "react-icons/md";
import { BiTime } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-base-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl text-black font-bold">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600">
                Get special offers and latest updates!
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg flex-1 border md:w-80 text-gray-900"
              />
              <button className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              {/* <img
                src="https://img.freepik.com/premium-photo/food-logo-icon_925121-2625.jpg"
                alt="FastBite Logo"
                className="w-10 h-10 rounded-full border-4 border-orange-500"
              /> */}
              <h2 className="text-2xl font-bold mt-4">FastBite</h2>
              <p className="text-gray-400 text-center md:text-left">
                Delivering happiness since 1992
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-orange-500" />
                <span>support@fastbite.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>123 Food Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Rewards Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Opening Hours
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BiTime className="text-orange-500 text-xl" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BiTime className="text-orange-500 text-xl" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p className="text-gray-400">9:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-500">
              Delivery Areas
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdDeliveryDining className="text-2xl text-orange-500" />
                <div>
                  <p className="font-medium">Fast Delivery</p>
                  <p className="text-gray-400">30 mins or free</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-medium mb-2">We Deliver To:</p>
                <ul className="text-gray-400 space-y-1">
                  <li>Manhattan</li>
                  <li>Brooklyn</li>
                  <li>Queens</li>
                  <li>The Bronx</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                <FaYoutube />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                Cookie Policy
              </a>
              <p>© 2024 FastBite. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
