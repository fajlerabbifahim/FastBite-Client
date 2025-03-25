import { useState, useEffect } from "react";
import allFoodPageBanner from "../../assets/Menubanner/all-food-page-banner.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./coustomTabs.css";
import MenuCard from "../../Components/Shared/menuCard/MenuCard";

const categories = ["Salad", "Pizza", "Drinks", "Desserts", "Pasta"];

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("/foods.json");
        const data = await response.json();
        setFoods(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  // Filter & Sort Foods
  const filteredFoods = foods.filter(
    (food) => food.category === selectedCategory
  );
  const sortedFoods = [...filteredFoods].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-[#FF5722] text-white h-[200px] md:h-[250px] flex items-center justify-center">
        <img
          src={allFoodPageBanner}
          alt="All Foods Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center w-11/12 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Savor Every Bite!
          </h1>
          <p className="text-sm md:text-base mt-2 text-gray-300 italic">
            Find your favorite food here!
          </p>
          <div className="flex items-center mt-4 bg-white rounded-full px-4 py-2 shadow-md">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search your favorite food..."
              className="flex-grow text-gray-700 text-sm md:text-base outline-none"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold ml-2">
              Search
            </button>
          </div>
        </div>
      </section>

      {/*  Tabs & Sorting Section */}
      <div className=" w-11/12 mx-auto py-6">
        <Tabs
          selectedIndex={categories.indexOf(selectedCategory)}
          onSelect={(index) => setSelectedCategory(categories[index])}
        >
          <div className="flex flex-wrap items-center justify-between border-b py-4">
            {/* 🔷 Tab List */}
            <TabList className="flex flex-wrap gap-2 md:gap-4">
              {categories.map((category, index) => (
                <Tab
                  key={index}
                  className="px-4 py-2 text-sm md:text-base cursor-pointer rounded-md transition-all outline-none"
                  selectedClassName="bg-red-600 text-white font-bold shadow-lg"
                >
                  {category}
                </Tab>
              ))}
            </TabList>

            {/*  Sort Dropdown */}
            <select
              className="px-4 py-2 border rounded-md text-gray-700 text-sm md:text-base bg-white shadow-sm"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="">Sort By</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>

          {/*  Food Items Section */}
          <div className="w-full py-6">
            {loading ? (
              <div className="text-center text-lg font-semibold">
                Loading...
              </div>
            ) : (
              categories.map((category, index) => (
                <TabPanel key={index} className="w-full">
                  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 auto-rows-fr">
                    {sortedFoods.length > 0 ? (
                      sortedFoods.map((food, idx) => (
                        <MenuCard key={idx} food={food}></MenuCard>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center col-span-full">
                        No items available
                      </p>
                    )}
                  </div>
                </TabPanel>
              ))
            )}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Menu;
