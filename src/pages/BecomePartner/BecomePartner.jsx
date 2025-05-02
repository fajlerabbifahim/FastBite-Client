import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Components/Shared/SectionHeading";
import Modal from "react-modal";
import restaurent from "../../assets/Partner/Restaurent.json";
import rider from "../../assets/Partner/rider.json";
import Lottie from "react-lottie-player";
import { AiOutlineClose } from "react-icons/ai";
import BecomeMember from "../Dashboard/Common/BecomeMember";

const BecomePartner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-6 sm:p-10 text-center  border-red-600 dark:bg-gray-900 dark:text-white">
      {/* <SectionHeading
        title={"Become a Partner"}
        subTitle={
          "Join our platform as a restaurant or rider and grow your business with us. Sign up today and start your journey!"
        }
      /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-between mt-8">
        {[
          {
            role: "Restaurant",
            animation: restaurent,
            title: "For Restaurant",
            description:
              "Expand your business and reach more customers with our platform. Partner with us and streamline your delivery service.",
            buttonText: "Join as Restaurant",
          },
          {
            role: "Rider",
            animation: rider,
            title: "For Rider",
            description:
              "Earn a steady income by delivering orders efficiently. Join our network and get access to more delivery opportunities.",
            buttonText: "Join as Rider",
          },
        ].map(({ role, animation, title, description, buttonText }) => (
          <motion.div
            key={role}
            whileHover={{ scale: 1.05 }}
            className="p-6 w-full rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-red-300 text-center"
          >
            <div className="flex justify-center">
              <Lottie
                loop
                animationData={animation}
                play
                style={{ width: 170, height: 150 }}
              />
            </div>
            <h3 className="text-lg font-semibold dark:text-white mt-3">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {description}
            </p>
            <button
              onClick={openModal}
              className="mt-3 cursor-pointer shadow-md hover:scale-105 transform transition-all px-4 py-2 bg-red-500 text-white rounded"
            >
              {buttonText}
            </button>
          </motion.div>
        ))}
      </div>
      <div className="relative flex justify-center z-[1000]">
        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-black/60 border-pink-700 flex items-end justify-center  px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div
                className="relative my-5   inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-4xl rounded-xl dark:bg-gray-900"
                style={{ animation: "fadeIn 0.3s ease-out" }}
              >
                <BecomeMember></BecomeMember>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <BecomeMember></BecomeMember> */}
    </div>
  );
};

export default BecomePartner;
