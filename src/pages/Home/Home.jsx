import React from "react";
import { Banner } from "../Banner/Banner";
import ChefCriteria from "../ChefCriteria/ChefCriteria";
import Offer from "../OfferSection/Offer";
import PopularDishes from "../PopularDishes/PopularDishes";
import TopReview from "../TopReview/TopReview";

import Review from "../../Components/Review/Review";

import DownloadOurApp from "../DownloadOurApp/DownloadOurApp";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner />
      <ChefCriteria />
      <PopularDishes />
      <Offer />
      <TopReview />
      <Review />
      <DownloadOurApp></DownloadOurApp>
    </>
  );
};

export default Home;
