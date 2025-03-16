import React from "react";

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
