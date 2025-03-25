import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import Modal from "react-modal";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="text-center">
      {/* 🔴 Red Theme Button */}
      <button
        onClick={openModal}
        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
      >
        <FaRobot className="text-lg" />
        Chat with our Bot
      </button>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-4"
        overlayClassName="fixed z-[2001] inset-0 bg-black/50 flex items-end justify-end px-4"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Chat with AI</h2>
          <button onClick={closeModal} className="text-red-500 text-xl font-bold">
            ✖
          </button>
        </div>

        {/* Chatbot Frame */}
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/jUkEuGxOvsVzubj__pQFK"
          width="100%"
          style={{ height: "450px", border: "none" }}
          className="rounded-lg"
          frameBorder="0"
        ></iframe>
      </Modal>
    </div>
  );
};

export default ChatBot;
