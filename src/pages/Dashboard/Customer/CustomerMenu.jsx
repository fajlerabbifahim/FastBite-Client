// import React, { useContext, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import CommonDashboard from "../Common/CommonDashboard";
// import Title from "../Common/Title";
// import { FaHome } from "react-icons/fa";
// import { CiLogout } from "react-icons/ci";
// import useUser from "../../../hooks/useUser";
// import LoadingSpinner from "../../LoadingSpinner";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useDispatch } from "react-redux";
// import { setLogout } from "../../../features/addToCart/addToCartSlice";
// import { setLoader } from "../../../features/loader/loaderSlice";
// const CustomerMenu = () => {
//   const { user, handleLogout, notify } = useContext(AuthContext);
//   const [users, isPending] = useUser();
//   const navigate = useNavigate();
//   const axiosPublic = useAxiosPublic();
//   const dispatch = useDispatch();
//   const {
//     data: users1 = [],
//     isPending: isPending1,
//     refetch,
//   } = useQuery({
//     queryKey: ["MyApplication", user?.email],
//     queryFn: async () => {
//       const { data } = await axiosPublic(`/become-member/${user?.email}`);
//       return data;
//     },
//   });
//   if (isPending || isPending1) {
//     return <LoadingSpinner></LoadingSpinner>;
//   }

//   // console.log(users1);

//   const handleLogout1 = () => {
//     handleLogout("s");
//     navigate("/");
//     dispatch(setLogout());
//   };
//   return (
//     <div className="h-screen container mx-auto pl-2 ">
//       <Title></Title>
//       <aside className="flex flex-col h-full  px-2 lg:-mr-8 py-2 overflow-y-auto">
//         <div className="flex flex-col items-center mt-3">
//           {users?.image && (
//             <img
//               referrerPolicy="no-referrer"
//               className="object-cover w-24 h-24 mx-2 rounded-full"
//               src={users?.image}
//               alt="avatar"
//             />
//           )}
//           <h4 className="mx-0 capitalize mt-2 text-2xl font-medium dark:text-white">
//             {users?.name}
//           </h4>
//           <p className="mx-2 mt-1 bg-yellow-400 px-2 py-1 rounded-2xl text-sm font-medium dark:text-white">
//             {users.role}
//           </p>
//         </div>

//         {/* <div className=""> */}
//         <nav className="flex flex-col gap-1 flex-1 lg:mt-6 ">
//           <NavLink
//             to="/dashboard/addToCart"
//             className={({ isActive }) =>
//               `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
//                               ${
//                                 isActive
//                                   ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-20 z-10"
//                                   : ""
//                               }

//                               before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
//                               after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
//                               `
//             }
//           >
//             Add to Cart
//           </NavLink>
//           <NavLink
//             to="/dashboard/orders"
//             className={({ isActive }) =>
//               `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
//                               ${
//                                 isActive
//                                   ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-20 z-10"
//                                   : ""
//                               }

//                               before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
//                               after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
//                               `
//             }
//           >
//             My Orders
//           </NavLink>
//           {users1 && (
//             <NavLink
//               to="/dashboard/customer/my-application"
//               className={({ isActive }) =>
//                 `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
//                               ${
//                                 isActive
//                                   ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-30 z-10"
//                                   : ""
//                               }

//                               before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-30 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
//                               after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-30 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
//                               `
//               }
//             >
//               My Application
//             </NavLink>
//           )}

//           {!users1 && (
//             <NavLink
//               to="/dashboard/customer/becomeMember"
//               className={({ isActive }) =>
//                 `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
//                               ${
//                                 isActive
//                                   ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-30 z-10"
//                                   : ""
//                               }

//                               before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-30 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
//                               after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-30 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
//                               `
//               }
//             >
//               Become Member
//             </NavLink>
//           )}
//           <NavLink
//             to="/dashboard/profile"
//             className={({ isActive }) =>
//               `relative inline-block px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
//                               ${
//                                 isActive
//                                   ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-20 z-10"
//                                   : ""
//                               }

//                               before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
//                               after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
//                               `
//             }
//           >
//             My Profile
//           </NavLink>
//           <div className="mr-5 mt-5">
//             <p className="border-b-2 border-blue-600"></p>
//           </div>
//           <div className="flex flex-col justify-center items-start my-2 ">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `relative flex justify-center in-center px-0 py-2 mx-0 mt-2 transition-colors duration-700 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#E10101] font-semibold
//                                         ${
//                                           isActive
//                                             ? "text-[#E10101] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-[#E10101] after:w-16 z-10"
//                                             : ""
//                                         }

//                                         before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:bg-[#E10101] before:transition-all before:duration-300 before:ease-in-out before:w-0 hover:before:w-20 hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out
//                                         after:content-[''] after:absolute after:left-0 after:bottom-[5px] after:h-[2px] after:bg-[#E10101] after:transition-all after:duration-300 after:ease-in-out after:w-0 hover:after:w-20 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out
//                                         `
//               }
//             >
//               <FaHome className="text-2xl mr-2" /> Home
//             </NavLink>
//             <button
//               onClick={handleLogout1}
//               className="cursor-pointer  px-3 -ml-1 mt-4 py-2 w-[98%] text-sm font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
//             >
//               <span className="text-xl  text-white flex justify-center items-center gap-2">
//                 <span className="text-white">
//                   <CiLogout />
//                 </span>
//                 Logout
//               </span>
//             </button>
//           </div>
//         </nav>
//         {/* </div> */}
//       </aside>
//     </div>
//   );
// };

// export default CustomerMenu;

import React, { useCallback, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../features/addToCart/addToCartSlice";
import {
  FaHome,
  FaCartPlus,
  FaBox,
  FaUser,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import Title from "../Common/Title";
import LoadingSpinner from "../../LoadingSpinner";
import useUser from "../../../hooks/useUser";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CustomerMenu = () => {
  const { handleLogout } = useContext(AuthContext);
  const [users, isPending] = useUser();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();

  const { data: users1 = [], isPending: isPending1 } = useQuery({
    queryKey: ["MyApplication", users?.email],
    queryFn: async () => {
      const { data } = await axiosPublic(`/become-member/${users?.email}`);
      return data;
    },
    enabled: !!users?.email,
  });

  const handleLogout1 = useCallback(() => {
    handleLogout("s"); // Assuming "s" is for customer logout; adjust if needed
    dispatch(setLogout());
    navigate("/");
  }, [handleLogout, dispatch, navigate]);

  if (isPending || isPending1) {
    return <LoadingSpinner />;
  }

  const menuItems = [
    { to: "/dashboard/addToCart", label: "Add to Cart", icon: <FaCartPlus /> },
    { to: "/dashboard/orders", label: "My Orders", icon: <FaBox /> },
    ...(users1
      ? [
          {
            to: "/dashboard/customer/my-application",
            label: "My Application",
            icon: <FaFileAlt />,
          },
        ]
      : [
          {
            to: "/dashboard/customer/becomeMember",
            label: "Become Member",
            icon: <FaFileAlt />,
          },
        ]),
    { to: "/dashboard/profile", label: "My Profile", icon: <FaUser /> },
  ];

  return (
    <div className="h-screen  dark:bg-gray-800">
      <aside className="flex flex-col h-full w-64 px-4 py-6  dark:bg-gray-900 ">
        <Title />

        <nav className="flex flex-col gap-2 flex-1 mt-6">
          {menuItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300 hover:bg-red-100 dark:hover:bg-gray-700 ${
                  isActive
                    ? "bg-red-100 dark:bg-gray-700 text-red-600 dark:text-red-400"
                    : ""
                }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
          <hr className="my-4 border-gray-200 dark:border-gray-700" />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300 hover:bg-red-100 dark:hover:bg-gray-700 ${
                isActive
                  ? "bg-red-100 dark:bg-gray-700 text-red-600 dark:text-red-400"
                  : ""
              }`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
          <button
            onClick={handleLogout1}
            className="cursor-pointer flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300 hover:bg-red-100 dark:hover:bg-gray-700"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default CustomerMenu;
