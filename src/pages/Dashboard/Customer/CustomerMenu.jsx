import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CommonDashboard from "../Common/CommonDashboard";
import Title from "../Common/Title";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const CustomerMenu = () => {
  // const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout1 = () => {
    // handleLogout("s");
    // navigate("/");
  };
  return (
    <div className="h-screen container mx-auto pl-2 ">
      <Title></Title>
      <aside className="flex flex-col h-full  px-2 lg:-mr-8 py-2 overflow-y-auto">
        <div className="flex flex-col items-center mt-3">
          <img
            referrerPolicy="no-referrer"
            className="object-cover w-24 h-24 mx-2 rounded-full"
            // src={user?.photoURL}
            src={
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            }
            alt="avatar"
          />
          <h4 className="mx-0 mt-2 text-2xl font-medium dark:text-white">
            {/* {user?.displayName} */}
            William Son
          </h4>
          <p className="mx-2 mt-1 bg-yellow-400 px-2 py-1 rounded-2xl text-sm font-medium dark:text-white">
            customer
          </p>
        </div>

        {/* <div className=""> */}
        <nav className="flex flex-col gap-1 flex-1 lg:mt-6 ">
          <NavLink
            to="/dashboard/customer/orders"
            className={({ isActive }) =>
              `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                              ${
                                isActive
                                  ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-20 z-10"
                                  : ""
                              }
        
                              before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                              after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                              `
            }
          >
            My Orders
          </NavLink>

          <NavLink
            to="/dashboard/customer/becomeMember"
            className={({ isActive }) =>
              `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                              ${
                                isActive
                                  ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-30 z-10"
                                  : ""
                              }
        
                              before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-30 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                              after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-30 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                              `
            }
          >
            Become Member
          </NavLink>
          <NavLink
            to="/dashboard/customer/profile"
            className={({ isActive }) =>
              `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
                              ${
                                isActive
                                  ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-20 z-10"
                                  : ""
                              }
        
                              before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
                              after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
                              `
            }
          >
            My Profile
          </NavLink>
          <div className="mr-5 mt-5">
            <p className="border-b-2 border-blue-600"></p>
          </div>
          <div className="flex flex-col justify-center items-start my-2 ">
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
              className="cursor-pointer px-2 -ml-1 mt-4 py-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <span className="text-xl text-white flex justify-center items-center gap-2">
                <span className="text-white">
                  <CiLogout />
                </span>
                Logout
              </span>
            </button>
          </div>
        </nav>
        {/* </div> */}
      </aside>
    </div>
  );
};

export default CustomerMenu;
