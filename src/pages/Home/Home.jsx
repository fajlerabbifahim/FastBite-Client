import React from "react";
import { Banner } from "../Banner/Banner";
import ChefCriteria from "../ChefCriteria/ChefCriteria";
import Offer from "../OfferSection/Offer";
import PopularDishes from "../PopularDishes/PopularDishes";
import TopReview from "../TopReview/TopReview";
import DownloadOurApp from "../DownloadOurApp/DownloadOurApp";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner />
      <ChefCriteria />
      <PopularDishes />
      <Offer />
      <TopReview/>
      <DownloadOurApp></DownloadOurApp>
    </>
  );
};

export default Home;
