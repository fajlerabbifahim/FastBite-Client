import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Components/Shared/SectionHeading";
import Modal from "react-modal";
import restaurent from "../../assets/Partner/Restaurent.json";
import rider from "../../assets/Partner/rider.json";
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
    <div className="p-6 sm:p-10 text-center dark:bg-gray-900 dark:text-white">
      <SectionHeading
        title={"Become a Partner"}
        subTitle={
          "Join our platform as a restaurant or rider and grow your business with us. Sign up today and start your journey!"
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-between mt-8">
        {[{
          role: "Restaurant",
          animation: restaurent,
          title: "For Restaurant",
          description: "Expand your business and reach more customers with our platform. Partner with us and streamline your delivery service.",
          buttonText: "Join as Restaurant"
        }, {
          role: "Rider",
          animation: rider,
          title: "For Rider",
          description: "Earn a steady income by delivering orders efficiently. Join our network and get access to more delivery opportunities.",
          buttonText: "Join as Rider"
        }].map(({ role, animation, title, description, buttonText }) => (
          <motion.div
            key={role}
            whileHover={{ scale: 1.05 }}
            className="p-6 w-full rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-red-300 text-center"
          >
            <div className="flex justify-center">
              <Lottie loop animationData={animation} play style={{ width: 170, height: 150 }} />
            </div>
            <h3 className="text-lg font-semibold dark:text-white mt-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
            <button onClick={() => openModal(role)} className="mt-3 px-4 py-2 bg-red-500 text-white rounded">
              {buttonText}
            </button>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full"
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
      >
        <h2 className="text-xl font-bold mb-4 dark:text-white">Join as {role}</h2>
        <form className="space-y-3">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
          {role === "Restaurant" && <input type="text" placeholder="Restaurant Name" className="w-full p-2 border rounded" />}
          {role === "Rider" && <input type="text" placeholder="Vehicle Type" className="w-full p-2 border rounded" />}
          <input type="text" placeholder="Location" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Preferred Working Hours" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Experience Level" className="w-full p-2 border rounded" />
          <textarea placeholder="Additional Comments" className="w-full p-2 border rounded" rows="3"></textarea>
          <button type="submit" className="w-full p-2 bg-red-500 text-white rounded">Submit</button>
        </form>
        <button onClick={closeModal} className="mt-4 text-red-500">Close</button>
      </Modal>
    </div>
  );
};

export default BecomePartner;