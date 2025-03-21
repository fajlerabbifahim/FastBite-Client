import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Components/Shared/SectionHeading";
import Modal from "react-modal";
import restaurent from "../../assets/Partner/Restaurent.json"
import rider from "../../assets/Partner/rider.json"
import Lottie from "react-lottie-player";

const BecomePartner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [role, setRole] = useState("");

  const openModal = (selectedRole) => {
    setRole(selectedRole);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setRole("");
  };

  return (
    <div className="p-10 text-center dark:bg-gray-900 dark:text-white">
      <SectionHeading
        title={"Become a Partner"}
        subTitle={
          "Join our platform as a restaurant or driver and grow your business with us. Sign up today and start your journey!"
        }
      />

      <div className="md:flex justify-center gap-10 mt-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-red-300 text-center cursor-pointer"
          onClick={() => openModal("Restaurant")}
        >
          <div className="flex justify-center">
            <Lottie
              loop
              animationData={restaurent}
              play
              style={{ width: 100, height: 100 }}
            />
          </div>
          <h3 className="text-lg font-semibold dark:text-white">For Restaurant</h3>
          <p className="text-gray-600 dark:text-gray-300">Expand your business with our platform.</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Join as Restaurant</button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-lg shadow-lg bg-white mt-7 md:mt-0 dark:bg-gray-800 border border-red-300 text-center cursor-pointer"
          onClick={() => openModal("Driver")}
        >
          <div className="flex justify-center">
            <Lottie
              loop
              animationData={rider}
              play
              style={{ width: 200, height: 100 }}
            />
          </div>
          <h3 className="text-lg font-semibold dark:text-white">For Driver</h3>
          <p className="text-gray-600 dark:text-gray-300">Earn by delivering orders easily.</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Join as Driver</button>
        </motion.div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">Join as {role}</h2>
        <form>
          <input type="text" placeholder="Full Name" className="w-full p-2 mb-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 mb-3 border rounded" />
          {role === "Restaurant" && <input type="text" placeholder="Restaurant Name" className="w-full p-2 mb-3 border rounded" />}
          {role === "Driver" && <input type="text" placeholder="Vehicle Type" className="w-full p-2 mb-3 border rounded" />}
          <input type="text" placeholder="Location" className="w-full p-2 mb-3 border rounded" />
          <button type="submit" className="w-full p-2 bg-red-500 text-white rounded">Submit</button>
        </form>
        <button onClick={closeModal} className="mt-4 text-red-500">Close</button>
      </Modal>
    </div>
  );
};

export default BecomePartner;