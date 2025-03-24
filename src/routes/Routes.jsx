import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Restaurants from "../pages/Restaurants/Restaurants";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminStatistics from "../pages/Dashboard/Admin/AdminStatistics";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import ManageAllFoodItems from "../pages/Dashboard/Admin/ManageAllFoodItems";
import ManageRestaurants from "../pages/Dashboard/Admin/ManageRestaurants";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";
import Roll from "./Roll";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import Profile from "../pages/Dashboard/Common/Profile";
import BecomeSeller from "../pages/Dashboard/Customer/BecomeSeller";
import BecomeMember from "../pages/Dashboard/Common/BecomeMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/restaurants",
        element: <Restaurants></Restaurants>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/RestaurantDetails/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: (
          // <PrivateRoute>
          <Roll />
          // </PrivateRoute>
        ),
      },
      {
        path: "admin/reports",
        element: <AdminStatistics></AdminStatistics>,
      },
      {
        path: "admin/users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "admin/ManageAllFoodItems",
        element: <ManageAllFoodItems></ManageAllFoodItems>,
      },
      {
        path: "admin/manageRestaurants",
        element: <ManageRestaurants></ManageRestaurants>,
      },
      {
        path: "customer/orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "customer/profile",
        element: <Profile></Profile>,
      },
      {
        path: "customer/becomeMember",
        element: <BecomeMember></BecomeMember>,
      },
    ],
  },
]);

export default router;
