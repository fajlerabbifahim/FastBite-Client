import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import LoadingSpinner from "../../LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useDispatch } from "react-redux";
const BecomeMember = () => {
  const [users, isPending] = useUser();
  const { notify } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("username");
    const email = form.get("email");
    const role = form.get("role");
    const contactNumber = form.get("contactNumber");
    const address = form.get("address");

    const memberInfo = {
      name,
      email,
      image: users?.image,
      role,
      contactNumber,
      address,
      isApprove: false,
    };
    const res = await axiosPublic.post("/become-member", memberInfo);
    // console.log(res.data.insertedId);
    if (res.data.insertedId) {
      notify("success", "your application successful");
      navigate("/dashboard/customer/my-application");
    }
  };
  return (
    <section className="w-11/12 my-5 lg:max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border  hover:border-red-600 transition duration-300">
      <h2 className="text-xl lg:text-2xl underline underline-offset-4 decoration-red-500 text-center font-semibold text-gray-700 capitalize dark:text-white">
        Become a Seller or Delivery Man
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Username
            </label>
            <input
              defaultValue={users.name}
              readOnly
              id="username"
              name="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              name="email"
              defaultValue={users.email}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="role">
              Role
            </label>
            <select
              name="role"
              defaultValue="Select Role"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option disabled>Select Role</option>
              <option value="seller">Seller</option>
              <option value="rider">Delivery Men</option>
            </select>
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="contact-number"
            >
              Contact Number
            </label>
            <input
              id="contact-number"
              type="number"
              name="contactNumber"
              placeholder="Enter your contact number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="contact-number"
          >
            Address
          </label>
          <textarea
            name="address"
            placeholder="Enter your address"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div className="mt-6 w-full ">
          <button
            type="submit"
            className="px-8 font-semibold cursor-pointer w-full py-2.5 text-lg leading-5 text-white  duration-300 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 active:scale-90 transition-transform"
          >
            Apply
          </button>
        </div>
      </form>
    </section>
  );
};

export default BecomeMember;
