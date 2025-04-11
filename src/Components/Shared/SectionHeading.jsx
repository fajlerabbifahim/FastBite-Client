import React from "react";

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-12 relative">
      <div className="relative">
        <motion.img
          src={img}
          className="w-full rounded-2xl h-72 shadow-inner object-cover"
          alt="contact Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {" "}
            {title} Get to Know Us
          </motion.h1>
          <motion.p
            className="mt-4  text-sm md:text-lg text-white max-w-[400px] leading-relaxed drop-shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {subTitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
