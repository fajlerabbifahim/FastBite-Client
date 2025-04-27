import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../assets/Navbar_logo/navlogo.png";

const Title = () => {
  return (
    <div>
      <div className="relative flex justify-between items-center my-2 lg:gap-4">
        <Link to="/dashboard/admin/reports" className="text-center flex">
          <span className="text-3xl font-extrabold text-center ">
            <img className="w-28" src={navLogo} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Title;
