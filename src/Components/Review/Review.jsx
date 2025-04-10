// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import { useState } from "react";
// import Slide from "./Slide";
// const Review = () => {
//   const [ImageArray, setImageArray] = useState([]);
//   return (
//     <div className=" py-0 mx-auto mt-0">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>

//         </SwiperSlide>
//         <SwiperSlide>

//         </SwiperSlide>
//         <SwiperSlide>

//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Review;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide from "./Slide";

const Review = () => {
  // Dummy data array
  const reviews = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Mc Berry Walter",
      title: "Food Analyst",
      desc: "This place never disappoints! The variety on the menu is great, and each dish is cooked to perfection. Highly recommend the grilled chicken—so juicy and tender. I’ll definitely return soon!",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Emma Watson",
      title: "Nutritionist",
      desc: "I had an amazing dining experience. The staff was friendly, and the food came out hot and flavorful. The spices were just right, and the dessert was the highlight of my meal!",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "John Doe",
      title: "Chef Specialist",
      desc: "The food was absolutely delicious! The flavors were well-balanced, and everything tasted fresh. The presentation was beautiful, and the portion size was perfect. I can’t wait to come back!",
    },
  ];

  return (
    <div
      className="w-11/12 mx-auto rounded-xl px-5 lg:px-16 relative bg-center bg-cover bg-no-repeat "
      
    >
      <div className="space-y-3">
        <div>
          <h2 className="text-center text-red-600">Testimonials</h2>
          <h2 className="text-center text-3xl lg:text-5xl pt-5 font-bold  mb-4">
            <span className="">
              {" "}
               Why Our{" "}
              <span className="underline underline-offset-4 decoration-2 decoration-red-600">
                Clients
              </span>{" "}
            Choose Us
            </span>
           
          </h2>
          <p className="w-full lg:w-8/12 mx-auto text-lg text-justify lg:text-center dark:text-black">
            "Our clients consistently praise our exceptional service,
            professionalism, and commitment to quality. Their positive feedback
            inspires us to exceed expectations and deliver outstanding results
            every time."
          </p>
          
        </div>
        <div className="lg:w-8/12 mx-auto  py-5 lg:mb-20 ">
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Slide {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
