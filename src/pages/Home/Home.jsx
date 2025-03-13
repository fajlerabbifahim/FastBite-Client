import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../../Components/Footer/footer";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <h1 className="text-5xl text-red-500">This is home page</h1>
      <Footer />
    </div>
  );
};

export default Home;
