import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// import { Menu } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import CustomerMenu from "../pages/Dashboard/Customer/CustomerMenu";
import SellerMenu from "../pages/Dashboard/Seller/SellerMenu";
import AdminMenu from "../pages/Dashboard/Admin/AdminMenu";
import RiderMenu from "../pages/Dashboard/Rider/ReiderMenu";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../hooks/ThemeContext";
const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // console.log(isMenuOpen)
  const role = "admin";

  // const role = "customer";
  // const role = "seller";
  // const role = "rider";

  return (
    <div className="lg:grid grid-cols-12 gap-4">
      <div
        className={`lg:col-span-2 absolute inset-x-0 z-20 w-full -mt-12 lg:px-0 transition-all duration-700 ease-in-out  lg:mt-0  lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${
          isMenuOpen
            ? "translate-x-0 opacity-100 bg-slate-400  dark:text-white"
            : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
        }`}
      >
        <nav>
          {/*  Menu Items */}
          {role === "admin" && <AdminMenu />}
          {role === "customer" && <CustomerMenu />}
          {role === "seller" && <SellerMenu />}
          {role === "rider" && <RiderMenu />}
        </nav>
      </div>
      <button
        onClick={toggleMenu}
        className="lg:hidden cursor-pointer fixed top-2 right-1 text-lg z-50 bg-gray-800 text-white p-4 rounded-full shadow-md"
      >
        {isMenuOpen ? <RxCross1 /> : <FaBars />}
      </button>
      <div className="lg:col-span-10 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
