import React from "react";
import { Banner } from "../Banner/Banner";
import ChefCriteria from "../ChefCriteria/ChefCriteria";
import Offer from "../OfferSection/Offer";
import PopularDishes from "../PopularDishes/PopularDishes";
import TopReview from "../TopReview/TopReview";
<<<<<<< HEAD
import Review from "../../Components/Review/Review";
=======
import DownloadOurApp from "../DownloadOurApp/DownloadOurApp";
>>>>>>> 4564af93e5e1f506f22611bbb972dd166c7ef669

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
      <TopReview/>
      <DownloadOurApp></DownloadOurApp>
    </>
  );
};

export default Home;
