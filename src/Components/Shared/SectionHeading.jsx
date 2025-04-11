import React from "react";

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center my-12">
      <h2 className="text-4xl md:text-4xl font-bold text-red-600 relative inline-block pb-2">
        {title}
        <span className="block h-1 w-16 bg-red-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      {subTitle && (
        <p className="mt-4 text-gray-700 text-sm md:text-lg max-w-xl mx-auto font-medium">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
