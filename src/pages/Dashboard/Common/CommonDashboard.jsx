import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from '../../providers/AuthProvider'
import { CiLogout } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
const CommonDashboard = () => {
  // const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout1 = () => {
    // handleLogout("s");
    // navigate("/");
  };
  return (
    <div className="border border-red-700 w-full bg-slate-300 lg:bg-white dark:bg-gray-900 dark:text-white ">
      <div>
        <p className="border-b-2 border-blue-600 my-5"></p>
      </div>
      <div className="flex flex-col justify-center items-start my-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative flex justify-center in-center px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                              ${
                                isActive
                                  ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-16 z-10"
                                  : ""
                              }
        
                              before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                              after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                              `
          }
        >
          <FaHome className="text-2xl mr-2" /> Home
        </NavLink>
        <button
          onClick={handleLogout1}
          className="cursor-pointer px-2 -ml-1 mt-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <span className="text-xl text-white flex justify-center items-center gap-2">
            <span className="text-white">
              <CiLogout />
            </span>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default CommonDashboard;
