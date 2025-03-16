import React from "react";
import { Banner } from "../Banner/Banner";
import ChefCriteria from "../ChefCriteria/ChefCriteria";
import Offer from "../OfferSection/Offer";
import PopularDishes from "../PopularDishes/PopularDishes";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner />
      <ChefCriteria />
      <PopularDishes/>
      <Offer />
    </>
  );
};

export default Home;
