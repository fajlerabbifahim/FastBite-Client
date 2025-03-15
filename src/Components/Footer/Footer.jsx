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
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold mt-4 text-red-600">FastBite</h2>
              <p className="text-gray-400 text-center md:text-left">
                Delivering happiness since 1992
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-red-600" />
                <span>support@fastbite.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600" />
                <span>123 Food Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-600">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "Menu",
                "Order Tracking",
                "Rewards Program",
                "Partner With Us",
                "Download App",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-red-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-600">
              Opening Hours
            </h3>
            <div className="space-y-4">
              {[
                { day: "Monday - Friday", time: "8:00 AM - 11:00 PM" },
                { day: "Saturday - Sunday", time: "9:00 AM - 12:00 AM" },
              ].map((schedule, index) => (
                <div key={index} className="flex items-center gap-3">
                  <BiTime className="text-red-600 text-xl" />
                  <div>
                    <p className="font-medium">{schedule.day}</p>
                    <p className="text-gray-400">{schedule.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-red-600">
              Delivery Areas
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdDeliveryDining className="text-2xl text-red-600" />
                <div>
                  <p className="font-medium">Fast Delivery</p>
                  <p className="text-gray-400">30 mins or free</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-medium mb-2">We Deliver To:</p>
                <ul className="text-gray-400 space-y-1">
                  {["Manhattan", "Brooklyn", "Queens", "The Bronx"].map(
                    (location, index) => (
                      <li key={index}>{location}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-2xl hover:text-red-500 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map(
                (policy, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-red-500 transition"
                  >
                    {policy}
                  </a>
                )
              )}
              <p>© 2024 FastBite. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
