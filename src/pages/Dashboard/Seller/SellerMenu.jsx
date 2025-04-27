import React, { useCallback, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../features/addToCart/addToCartSlice";
import {
  FaHome,
  FaCartPlus,
  FaBox,
  FaUtensils,
  FaUser,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import Title from "../Common/Title";

const SellerMenu = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout1 = useCallback(() => {
    handleLogout("s");
    dispatch(setLogout());
    navigate("/");
  }, [handleLogout, dispatch, navigate]);

  const menuItems = [
    { to: "/dashboard/addToCart", label: "Add to Cart", icon: <FaCartPlus /> },
    { to: "/dashboard/orders", label: "My Orders", icon: <FaBox /> },
    { to: "/dashboard/seller-orders", label: "View Orders", icon: <FaList /> },
    {
      to: "/dashboard/seller",
      label: "Sales and Orders",
      icon: <FaUtensils />,
    },
    {
      to: "/dashboard/seller-addFood",
      label: "Add New Food Item",
      icon: <FaUtensils />,
    },
    {
      to: "/dashboard/manage-my-foods",
      label: "Manage My Foods",
      icon: <FaList />,
    },
    { to: "/dashboard/profile", label: "My Profile", icon: <FaUser /> },
  ];

  return (
    <div className="h-screen  dark:bg-gray-800">
      <aside className="flex flex-col h-full w-64   dark:bg-gray-900 ">
        <Title />
        <nav className="flex flex-col gap-2 flex-1 mt-4">
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
            className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-300 hover:bg-red-100 dark:hover:bg-gray-700"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default SellerMenu;
