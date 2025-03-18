// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const Slide = ({ title, image, text }) => {
//   return (
//     <div
//       className="w-full bg-center bg-cover h-[28rem] overflow-hidden"
//   style={{
//     backgroundImage: `url(${image})`,
//   }}
//     >
//       <div className="flex items-center justify-center w-full h-full ">
//         <div className="text-center w-3/5 bg-gray-700/70 py-8 px-3 rounded-xl">
//           <h2 className="text-3xl mb-8  font-semibold text-white lg:text-4xl">
//             {title}
//           </h2>
//           <h1 className="text-lg  text-gray-200 lg:text-xl">{text}</h1>
//           <br />
//           <Link
//             to="/all-visas"
//             className="w-20 px-5 py-4  mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform  opacity-60 rounded-md lg:w-auto focus:outline-none btn-outline bg-blue-600 hover:bg-blue-600"
//           >
//             explore all visa
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slide;
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Slide = ({ img, name, title, desc }) => {
  return (
    <div className="bg-white border border-red-500 rounded-2xl shadow-lg px-8 py-5 relative max-w-xl mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-red-400"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
      <div className="mt-6 text-gray-600 relative">
        <FaQuoteLeft className="text-4xl text-gray-300 absolute left-0 -top-2" />
        <p className="pl-10">{desc}</p>
      </div>
      <div className="flex justify-center mt-4">
        {/* Stars */}
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
