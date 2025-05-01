import React from "react";
import {
  FaUser,
  FaMotorcycle,
  FaBoxOpen,
  FaCheckCircle,
  FaUtensils,
} from "react-icons/fa";

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Pending", icon: <FaUtensils /> },
    { id: 2, label: "Processing", icon: <FaBoxOpen /> },
    { id: 3, label: "Rider", icon: <FaMotorcycle /> },
    { id: 4, label: "Deliver", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="flex items-center justify-center w-full  mx-auto p-6 ">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center w-full relative">
          {/* Circle */}

          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500
              ${
                currentStep > step.id
                  ? "bg-gradient-to-r from-green-400 to-green-600 text-white animate-bounce"
                  : currentStep === step.id
                  ? "border-4 border-green-500 text-green-500"
                  : "border-4 border-gray-300 text-gray-400"
              }
            `}
          >
            {currentStep > step.id ? "✓" : step.icon}
          </div>

          {/* Line */}
          {index !== steps.length - 1 && (
            <div className="flex-1 h-1 bg-gray-300 relative overflow-hidden mx-2">
              <div
                className={`h-1 transition-all duration-700 ease-in-out
                  ${
                    currentStep > step.id
                      ? "bg-gradient-to-r from-green-400 to-green-600 w-full"
                      : "w-0"
                  }
                `}
              ></div>
            </div>
          )}

          {/* Label */}
          <div className="absolute top-16 text-center w-32 -ml-10 text-sm text-gray-700">
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
