import React from "react";
import { Banner } from "../Banner/Banner";
import ChefCriteria from "../ChefCriteria/ChefCriteria";
import Offer from "../OfferSection/Offer";
import PopularDishes from "../PopularDishes/PopularDishes";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner />
      <ChefCriteria />
      <PopularDishes />
      <Offer />
      <Review></Review>
    </>
  );
};

export default Home;
