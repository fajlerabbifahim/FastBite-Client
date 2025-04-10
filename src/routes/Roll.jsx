import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../pages/LoadingSpinner";

const Roll = () => {
  const [role, isPending] = useRole();
  // const role = "admin";
  // const role = "customer";
  // const role = "seller";
  // const role = "rider";
  if (isPending) return <LoadingSpinner></LoadingSpinner>;
  if (role === "customer")
    return <Navigate to="/dashboard/customer/orders"></Navigate>;
  // if (role === "seller")
  //   return <Navigate to="/dashboard/my-inventory"></Navigate>;
  if (role === "rider")
    return <Navigate to="/dashboard/rider/rider-status"></Navigate>;
  else return <Navigate to="/dashboard/admin/reports"></Navigate>;
};

export default Roll;
