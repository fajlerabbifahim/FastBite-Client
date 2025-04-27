import React, { useCallback, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../features/addToCart/addToCartSlice";
import {
  FaHome,
  FaCartPlus,
  FaBox,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaUtensils,
  FaStore,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import Title from "../Common/Title";
import LoadingSpinner from "../../LoadingSpinner";
import useUser from "../../../hooks/useUser";

const AdminMenu = () => {
  const { handleLogout } = useContext(AuthContext);
  const [users, isPending] = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout1 = useCallback(() => {
    handleLogout("s"); // Assuming "s" is for admin logout; adjust if needed
    dispatch(setLogout());
    navigate("/");
  }, [handleLogout, dispatch, navigate]);

  if (isPending) {
    return <LoadingSpinner />;
  }

  const menuItems = [
    { to: "/dashboard/addToCart", label: "Add to Cart", icon: <FaCartPlus /> },
    { to: "/dashboard/orders", label: "My Orders", icon: <FaBox /> },
    {
      to: "/dashboard/admin/reports",
      label: "Revenue Reports",
      icon: <FaChartLine />,
    },
    { to: "/dashboard/admin/users", label: "Manage Users", icon: <FaUsers /> },
    {
      to: "/dashboard/admin/pending-applications",
      label: "Pending Applications",
      icon: <FaFileAlt />,
    },
    {
      to: "/dashboard/admin/ManageAllFoodItems",
      label: "Manage All Food Items",
      icon: <FaUtensils />,
    },
    {
      to: "/dashboard/admin/manageRestaurants",
      label: "Manage Restaurants",
      icon: <FaStore />,
    },
    { to: "/dashboard/profile", label: "My Profile", icon: <FaUser /> },
  ];

  return (
    <div className=" dark:bg-gray-800">
      <aside className="flex flex-col h-full w-64 p-8 bg-gray-50  dark:bg-gray-900 ">
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

export default AdminMenu;
