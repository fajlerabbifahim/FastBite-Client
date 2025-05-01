import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

function ProgressBarControl({ status }) {
  const [currentStep, setCurrentStep] = useState(null);
  console.log(status);
  useEffect(() => {
    if (status === "Pending") setCurrentStep(1);
    else if (status === "Processing") setCurrentStep(2);
    else if (status === "Handed Over to Rider") setCurrentStep(3);
    else if (status === "Deliver") setCurrentStep(4);
  }, [status]);
  console.log("13", currentStep);
  return (
    <div className="p-2">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} />

      {/* Controls */}
      {/* <div className="flex gap-4 mt-8">
        <button
          onClick={() => setCurrentStep((prev) => (prev > 1 ? prev - 1 : 1))}
          className="px-6 py-2 bg-gray-400 text-white rounded-full shadow-md hover:bg-gray-500 transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep((prev) => (prev < 4 ? prev + 1 : 4))}
          className="px-6 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default ProgressBarControl;
