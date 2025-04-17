import React from "react";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../hooks/ThemeContext";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import navlogo from "../../../assets/Navbar_logo/navlogo.png";

const Title = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div>
      <div className="relative shadow- flex justify-between items-center m-2 lg:gap-4">
        <Link to={"/"}>
            {" "}
            <img className="w-32" src={navlogo} alt="navlogo" />
          </Link>

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
      </div>
    </div>
  );
};

export default Title;
