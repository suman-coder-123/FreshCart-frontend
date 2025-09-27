import React from "react";
import Products from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide1 from "../assets/Images/slide1.jpg";
import slide2 from "../assets/Images/slide2.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="my-10 mx-30 rounded-xl  ">
      <section>
        <div >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="rounded-2xl shadow-lg"
          >
            <SwiperSlide>
              <div
                className="relative h-100 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide1})` }}
              >
                <div className="flex flex-col justify-start itmes-center py-20 w-1/2 px-8 inline-block " >
                  <p className="text-sm text-black-900 bg-[#ffc107] inline  px-2 font-medium rounded-xl ">Opening Sale Discount 50%</p>
                  <p className="text-[#001e2b] text-6xl font-medium my-3">SuperMarket for Fresh Grocery</p>
                  <p className="text-[#5c6c75] text-xl font-medium ">Introduce a new model for online grocery shopping and convient home delivery </p>
                  <button className="bg-[#001e2b] text-[#ffffff] rounded p-2 my-4 flex justify-center ">Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="relative h-100 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide2})` }}
              >
                <div className="flex flex-col justify-start itmes-center py-20 w-1/2 px-8 inline-block " >
                  <p className="text-sm text-black-900 bg-[#ffc107] inline  px-2 font-medium rounded-xl ">Free Shipping - orders over $100</p>
                  <p className="text-[#001e2b] text-5xl font-medium my-3">Free Shipping - orders over <span className="text-[#0aad0a]">$100</span></p>
                  <p className="text-[#5c6c75] text-xl font-medium ">Free shipping for first time customers only , After promotions and discounts are applied  </p>
                  <button className="bg-[#001e2b] text-[#ffffff] rounded p-2 my-4 flex justify-center ">Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section>
        <div>
          <div className="flex justify-between itmes-center  mt-10">
            <h1 className="text-2xl font-medium text-[#21313c]">
              Featured Categories
            </h1>
            <div className="">
              <button className="prev-btn bg-gray-200 px-2 py-2 mx-1 rounded-full">
                <IoIosArrowBack />
              </button>
              <button className="next-btn bg-gray-200 px-2 py-2 mx-1 rounded-full">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div className="my-10 ">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={4}
              spaceBetween={10}
              freeMode={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
            >
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4  
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-dairy-bread-eggs.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Dairy , Bread & Eggs
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    px-5
                    src="https://freshcart-next-js.vercel.app/images/category/category-snack-munchies.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Snacks & Munchies
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className=" px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-cleaning-essentials.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Cleaning Essential
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-bakery-biscuits.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Bakery & Biscuits
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-instant-food.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">Instant Food</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-tea-coffee-drinks.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Tea ,Coffee & Drinks
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-atta-rice-dal.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Atta ,Rice & Dal
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-baby-care.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">Baby Care</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-chicken-meat-fish.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Chicken, Meat & Fish
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-pet-care.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">Pet Care</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-52 h-50 p-4 text-center 
                border border-gray-300 rounded-lg 
                transition-all duration-300 
                hover:border-green-500 hover:shadow-md cursor-pointer
"
                >
                  <img
                    className="px-5"
                    src="https://freshcart-next-js.vercel.app/images/category/category-fruits-vegetables.jpg"
                    alt=""
                  />
                  <p className="text-[#5c6c75] p-2 font-medium">
                    Fruits & Vegetables
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div  className=" flex justify-center items-center">
          <div
          className="relative h-50 w-1/2 bg-cover bg-center shadow-lg rounded-2xl"
          style={{ backgroundImage: `url("https://freshcart-next-js.vercel.app/images/banner/grocery-banner.png")` }}
          >
            <div className="py-10 px-5">
              <p className="text-2xl text-[#21313c] font-bold ">Fruits & Vegetable</p>
              <p className="text-[#5c6c75] font-medium">Get upto 30% off</p>
              <button className="bg-[#001e2b] text-[#ffffff] rounded p-2 my-4 flex justify-center ">Shop Now
              </button>
            </div>
          </div>
          <div
          className="relative h-50 mx-4 w-1/2 bg-cover bg-center shadow-lg rounded-2xl"
          style={{ backgroundImage: `url("https://freshcart-next-js.vercel.app/images/banner/grocery-banner-2.jpg")` }}
          >
            <div className="py-10 px-5">
              <p className="text-2xl text-[#21313c] font-bold ">Freshly Baked Buns</p>
              <p className="text-[#5c6c75] font-medium">Get upto 25% off</p>
              <button className="bg-[#001e2b] text-[#ffffff] rounded p-2 my-4 flex justify-center ">Shop Now
              </button>
            </div>
          </div>

        </div>
      </section>

      <Products />
    </div>
  );
};

export default Home;
