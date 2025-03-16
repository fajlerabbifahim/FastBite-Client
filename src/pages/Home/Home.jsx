import React from "react";
import { Banner } from "../Banner/Banner";
import ChefCriteria from "../ChefCriteria/ChefCriteria";
import Offer from "../OfferSection/Offer";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner />
      <ChefCriteria />
      <Offer />
    </>
  );
};

export default Home;
