import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../LoadingSpinner";
import Marquee from "react-fast-marquee";
import StarRatings from "react-star-ratings";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: restaurant = [], isLoading } = useQuery({
    queryKey: ["restaurantDetails"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/restaurantDetails/${id}`);
      console.log("restaurant details data", data);

      return data;
    },
  });

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  //get review
  const {
    data: reviews = [],
    isPending,
    refetch: refetchReview,
  } = useQuery({
    queryKey: ["restaurantReviews", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/restaurantReviews/${id}`);
      console.log("restaurant review", data);

      return data;
    },
  });

  //get restaurant foods by restaurant id

  const { data: restaurantFoods = [] } = useQuery({
    queryKey: ["restaurantFood", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/restaurantFoods/${id}`);
      console.log("restaurant foods", restaurantFoods);
      return data;
    },
  });

  // save review to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to submit your review");
      return;
    }

    if (rating === 0 || !reviewText.trim()) {
      toast.error("Review and rating cannot be empty");
      return;
    }

    await axiosSecure.post("/restaurantReviews", {
      restaurantName: restaurant.name,
      restaurantID: restaurant._id,
      review: reviewText,
      rating: rating,
      reviewerName: user?.displayName,
      reviewerEmail: user?.email,
      reviewerImage: user?.photoURL,
      date: new Date().toDateString(),
    });
    setReviewText("");
    setRating(0);
    refetchReview();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isPending) {
    return <LoadingSpinner />;
  }

  if (!restaurant) {
    return (
      <h2 className="text-center text-red-500 text-2xl">
        Restaurant Not Found
      </h2>
    );
  }

  return (
    <div className="w-full">
      <ToastContainer />
      {/* Cover Image */}
      <div className="relative w-full h-72 md:h-96">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold shadow-lg bg-black/40 px-4 py-2 rounded-lg">
            {restaurant.name}
          </h1>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto p-6 md:p-12">
        {/* Name, Location & Rating */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {restaurant.name}
            </h2>
            <p className="text-gray-600 text-lg">{restaurant.location}</p>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <span className="text-yellow-500 text-2xl">
              <FaStar />
            </span>
            <span className="text-gray-700 text-lg ml-2">
              ({restaurant.rating.toFixed(1)})
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          {restaurant.description}
        </p>

        {/* Contact & Status */}
        <div className="mt-6 flex flex-col md:flex-row md:justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-medium text-gray-800 flex items-center gap-2">
            <BsTelephone /> Contact:
            <span className="text-blue-600">{restaurant.contact_number}</span>
          </p>
          <span
            className={`px-4 py-2 text-lg font-medium rounded-full ${
              restaurant.status === "open"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {restaurant.status.toUpperCase()}
          </span>
        </div>

        {/* Menu Item Card here */}
        <div className="mx-auto p-6 md:p-12">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Taste the Best from {restaurant.name}
          </h1>

          <Marquee pauseOnHover={true} speed={60} gradient={false}>
            {restaurantFoods.map((restaurantFood) => (
              <div
                key={restaurantFood._id}
                className="bg-white border rounded-xl shadow hover:shadow-lg transition-all duration-300 flex items-center w-[200px] mx-4 p-3"
              >
                <img
                  src={restaurantFood.image}
                  alt={restaurantFood.name}
                  className="w-14 h-14 rounded-full object-cover mr-3 border-2 border-red-400"
                />
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">
                    {restaurantFood.name}
                  </h2>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                    <FaBangladeshiTakaSign />
                    {restaurantFood.price}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* review and rating */}
        <div className="mx-auto p-6 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 ">
            Customer Reviews
          </h2>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="flex flex-col md:flex-row items-start gap-4 bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={review.reviewerImage}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-400"
                  alt={review.reviewerName}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap">
                    <h4 className="font-semibold text-xl text-gray-800">
                      {review.reviewerName}
                    </h4>
                    <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      {review.date}
                    </span>
                  </div>

                  {/* Star Rating */}
                  <div className="mt-2">
                    <StarRatings
                      rating={review.rating}
                      starRatedColor="#FBBF24"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      name="rating"
                    />
                    <span className="ml-2 text-gray-600 text-sm">
                      {review.rating} / 5
                    </span>
                  </div>

                  <p className="text-gray-700 mt-3 text-base leading-relaxed">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* review input field  */}
        <div className=" mx-auto p-6 md:p-12">
          <h3 className="text-2xl font-semibold mb-4">Add Your Review</h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-100 p-6 rounded-xl shadow-md"
          >
            {/* Star Ratings Component */}
            <div>
              <label className="block mb-1 font-medium">Your Rating:</label>
              <StarRatings
                rating={rating}
                starRatedColor="#ffd700"
                changeRating={handleRatingChange}
                numberOfStars={5}
                name="rating"
                starDimension="30px"
                starSpacing="5px"
              />
            </div>

            {/* Review Textarea */}
            <textarea
              name="review"
              placeholder="Write your review..."
              className="w-full p-2 rounded border"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            <button className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
