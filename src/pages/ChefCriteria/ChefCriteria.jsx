import React from "react";
import { FaBeer, FaCoffee, FaWineGlassAlt, FaBox, FaPepperHot, FaBreadSlice } from "react-icons/fa";


const criteria = [
  { title: "Salubrious Snacks", icon: <FaBreadSlice />, description: "Nutritious and healthy snacks prepared with fresh ingredients, perfect for a balanced diet." },
  { title: "Healthy Drinks", icon: <FaBeer />, description: "Refreshing beverages made from organic fruits and natural ingredients for a revitalizing experience." },
  { title: "Chocolate Desserts", icon: <FaCoffee />, description: "Decadent chocolate-based desserts crafted with the finest cocoa for a delightful treat." },
  { title: "Hot Spirits", icon: <FaWineGlassAlt />, description: "A selection of premium spirits, including fine wines and aged liquors, to complement any occasion." },
  { title: "Packaged Foods", icon: <FaBox />, description: "Convenient and high-quality packaged meals, ensuring both taste and nutrition." },
  { title: "Spicy Stuff", icon: <FaPepperHot />, description: "Bold and flavorful spicy dishes created for those who love a fiery kick in their meals." }
];

const ChefCriteria = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-20 p-10">
      <div className="flex flex-col gap-6">
        {criteria.slice(0, 3).map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-3xl text-yellow-600">{item.icon}</span>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://i.ibb.co.com/vvmpxT8t/chef.jpg"
        alt="Chef"
        className="w-64 h-[500px] md:w-80 lg:w-96 object-cover"
      />
      <div className="flex flex-col gap-6">
        {criteria.slice(3, 6).map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-3xl text-yellow-600">{item.icon}</span>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCriteria;
