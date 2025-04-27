import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../hooks/ThemeContext";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../pages/LoadingSpinner";
import { useNavigate } from "react-router-dom"; // Add useNavigate for logout functionality
import CustomerMenu from "../pages/Dashboard/Customer/CustomerMenu";
import SellerMenu from "../pages/Dashboard/Seller/SellerMenu";
import AdminMenu from "../pages/Dashboard/Admin/AdminMenu";
import RiderMenu from "../pages/Dashboard/Rider/RiderMenu";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // Manage profile dropdown
  const navigate = useNavigate();
  const [role, isPending] = useRole();
  const { darkMode, setDarkMode } = useDarkMode();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen); // Toggle profile menu
  };

  const handleLogout = () => {
    // Logic to clear user data or token and navigate to login page
    localStorage.clear(); // Example: clear localStorage
    navigate("/login");
  };

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className="lg:grid grid-cols-12   lg:mt-0 ">
      <div
        className={`lg:col-span-3 absolute inset-x-0 z-20 w-full lg:px-0 transition-all duration-700 ease-in-out lg:mt-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex ${
          isMenuOpen
            ? "translate-x-0 opacity-100 bg-slate-400 dark:text-white"
            : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
        }`}
      >
        <nav className=" p-8 bg-gray-50 w-[90%]">
          {/* Menu Items based on Role */}
          {role === "admin" && <AdminMenu />}
          {role === "customer" && <CustomerMenu />}
          {role === "seller" && <SellerMenu />}
          {role === "rider" && <RiderMenu />}
        </nav>
      </div>

      <div className={`lg:col-span-9  pt-8 pr-8  ${!isMenuOpen && ""}`}>
        <div className="flex justify-between items-center shadow-[0px_2px_0px_-1px_rgba(0,_0,_0,_0.2)]  dark:bg-gray-800 ">
          <button
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer fixed top-2 left-1 text-lg z-50 bg-gray-800 text-white p-4 rounded-full shadow-md"
          >
            {isMenuOpen ? <RxCross1 /> : <FaBars />}
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-0 rounded-full bg-white dark:bg-gray-700 mr-16  lg:-mr-0 cursor-pointer"
            >
              {darkMode ? (
                <IoMdSunny size={40} color="#F04335" />
              ) : (
                <MdDarkMode size={40} color="#1E1E1E" />
              )}
            </button>

            {/* Profile Icon */}
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="w-10 h-10 rounded-full border-2 border-white"
              >
                <img
                  src="https://i.ibb.co/2Y7y69v/profile.png" // Example Profile Pic URL
                  alt="Profile"
                  className="w-full h-full rounded-full"
                />
              </button>

              {/* Profile Dropdown */}
              {profileMenuOpen && (
                <div className="absolute top-12 right-0 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md shadow-md w-40">
                  <ul>
                    <li>
                      <Link
                        to="/dashboard/profile"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Outlet for page content */}
        <Outlet isMenuOpen={isMenuOpen}></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
