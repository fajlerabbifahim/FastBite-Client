// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Fade } from "react-awesome-reveal"; // Importing the Fade animation

// const Banner = () => {
//     return (
//         <div className="w-full bg-gradient-to-b from-orange-100 via-white to-yellow-50 my-5">
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 loop={true}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 className="h-[500px] rounded-lg shadow-lg"
//             >
//                 {/* Slide 1 */}
//                 <SwiperSlide className="relative">
//                     <img
//                         src="https://i.ibb.co.com/84r8wCvS/img1.jpg"
//                         alt="Delicious Meals Delivered"
//                         className="w-full h-full object-cover rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center justify-center text-white px-6 text-center">
//                         <Fade bottom>
//                             <h1 className="text-4xl font-bold">Fresh & Fast Food Delivery</h1>
//                         </Fade>
//                         <Fade bottom delay={200}>
//                             <p className="mt-4 text-lg">
//                                 Savor the flavors you love, delivered right to your doorstep—quick and easy!
//                             </p>
//                         </Fade>
//                     </div>
//                 </SwiperSlide>

//                 {/* Slide 2 */}
//                 <SwiperSlide className="relative">
//                     <img
//                         src="https://i.ibb.co.com/6JDcg5gt/img2.jpg"
//                         alt="Wide Range of Cuisines"
//                         className="w-full h-full object-cover rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center justify-center text-white px-6 text-center">
//                         <Fade bottom>
//                             <h1 className="text-4xl font-bold">A Feast for Every Craving</h1>
//                         </Fade>
//                         <Fade bottom delay={200}>
//                             <p className="mt-4 text-lg">
//                                 Explore a wide variety of cuisines from local favorites to global delights.
//                             </p>
//                         </Fade>
//                     </div>
//                 </SwiperSlide>

//                 {/* Slide 3 */}
//                 <SwiperSlide className="relative">
//                     <img
//                         src="https://i.ibb.co.com/0pf22kYC/img3.jpg"
//                         alt="Special Discounts & Offers"
//                         className="w-full h-full object-cover rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center justify-center text-white px-6 text-center">
//                         <Fade bottom>
//                             <h1 className="text-4xl font-bold">Exclusive Deals & Discounts</h1>
//                         </Fade>
//                         <Fade bottom delay={200}>
//                             <p className="mt-4 text-lg">
//                                 Enjoy special offers and save big on your favorite meals every day!
//                             </p>
//                         </Fade>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default Banner;