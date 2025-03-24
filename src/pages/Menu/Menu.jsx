import allFoodPageBanner from "../../assets/Menubanner/all-food-page-banner.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Menu = () => {
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
              //   value={searchTerm}
              //   onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-full text-sm font-semibold ml-2">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* tabs */}
      <Tabs>
        <TabList className="flex justify-between px-20 items-center ">
          <div>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </div>
          <div>
            <select name="short" id="">
              <option value="vaf">Fahim</option>
              <option value="vaf">Fahimm</option>
              <option value="vaf">Fahimm</option>
            </select>
          </div>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Menu;
