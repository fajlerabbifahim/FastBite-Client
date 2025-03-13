import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        <aside className="flex flex-col items-center text-center">
          <img
            src="https://img.freepik.com/premium-photo/food-logo-icon_925121-2625.jpg"
            alt="FastBite Logo"
            className="w-24 h-24 mb-3 rounded-full border-4 border-white"
          />
          <p className="text-lg font-semibold">FastBite</p>
          <p className="text-sm text-gray-400">
            Delivering happiness since 1992
          </p>
        </aside>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title text-lg font-semibold">Services</h6>
          <a className="link link-hover">Food Delivery</a>
          <a className="link link-hover">Catering</a>
          <a className="link link-hover">Custom Orders</a>
          <a className="link link-hover">24/7 Support</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title text-lg font-semibold">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="footer-title text-lg font-semibold">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <nav className="flex flex-col items-center gap-3 mt-5 sm:mt-0">
          <h6 className="footer-title text-lg font-semibold">Follow Us</h6>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-2xl text-white hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-blue-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
