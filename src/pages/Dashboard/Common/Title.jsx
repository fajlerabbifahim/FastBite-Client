import React from "react";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../hooks/ThemeContext";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Title = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div>
      <div className="relative flex justify-between items-center my-2  lg:gap-4">
        <Link to="/dashboard/admin/reports" className="text-center flex">
          <span className="text-3xl font-extrabold text-center ">
            F<span className="text-[#E10101]">i</span>rst B
            <span className="text-[#E10101]">i</span>te
          </span>
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
