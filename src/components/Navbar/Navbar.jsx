import React, { useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useDarkMode } from "../../hooks/ThemeContext";
import navlogo from "../../assets/Navbar_logo/navlogo.png";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../features/addToCart/addToCartSlice";
import CartLogo from "../CartLogo/CartLogo";

// Reusable NavLink class generator
const getNavLinkClass = ({ isActive }) =>
  `relative px-2 py-2 mx-3 mt-2 transition-colors duration-700 rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
   ${
     isActive
       ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-full"
       : ""
   }
   before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:w-0 hover:before:w-full
   after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:w-0 hover:after:w-full`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { darkMode, setDarkMode } = useDarkMode();
  const dispatch = useDispatch();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleLogOut = useCallback(() => {
    dispatch(setLogout());
    logOut();
  }, [dispatch, logOut]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/restaurants", label: "Restaurants" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    ...(user ? [{ to: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <div className="sticky top-0 z-[900] bg-white dark:bg-gray-800 dark:text-white">
      <nav className="shadow">
        <div className="w-11/12 py-4  mx-auto">
          <div className="lg:flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <Link to="/">
                <img
                  className=" w-24 lg:w-[120px]"
                  src={navlogo}
                  alt="navlogo"
                />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 30 30"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Navigation Links and Actions */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-4 py-4 transition-all duration-700 lg:static lg:flex lg:items-center lg:p-0 lg:w-auto ${
                isOpen
                  ? "translate-x-0 opacity-100 bg-white dark:bg-gray-800"
                  : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
              }`}
            >
              {/* Nav Links */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:mx-2 xl:mx-4 xl:text-lg">
                {navLinks.map(({ to, label }) => (
                  <NavLink key={to} to={to} className={getNavLinkClass}>
                    {label}
                  </NavLink>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center mt-4 lg:mt-0 gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 cursor-pointer"
                  aria-label="toggle dark mode"
                >
                  {darkMode ? (
                    <IoMdSunny size={30} color="#F04335" />
                  ) : (
                    <MdDarkMode size={30} color="#1E1E1E" />
                  )}
                </button>

                <CartLogo />

                {user?.email ? (
                  <div className="flex items-center gap-3">
                    <button
                      className="flex items-center focus:outline-none"
                      aria-label="toggle profile dropdown"
                    >
                      <a id="not-clickable">
                        <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                          <img
                            referrerPolicy="no-referrer"
                            src={user?.photoURL}
                            className="object-cover w-full h-full"
                            alt="avatar"
                          />
                        </div>
                      </a>
                      <Tooltip anchorSelect="#not-clickable">
                        <div className="px-2 py-1 rounded text-sm">
                          {user?.displayName}
                        </div>
                      </Tooltip>
                    </button>

                    <button
                      onClick={handleLogOut}
                      className="px-4 py-3 text-sm font-medium tracking-wide text-white bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Link
                      to="/signup"
                      className="px-4 py-3 text-sm font-medium tracking-wide text-white bg-[#E10101] rounded-lg"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="px-4 py-3 text-sm font-medium tracking-wide text-white bg-[#E10101] rounded-lg"
                    >
                      Sign in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
