"use client";
import AwesomeBox from "@/components/AwesomeBox/AwesomeBox";
import TitleWIthPera from "@/components/TitleWithPera/TitleWIthPera";
import React from "react";
import image1 from "@/assets/awesomebox/game-img-1.png";
import image2 from "@/assets/awesomebox/game-img-2.png";
import image3 from "@/assets/awesomebox/game-img-3.png";
import image4 from "@/assets/awesomebox/game-img-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const AwesomeGame = ({ show }) => {
  return (
    <section className=" py-16 md:py-32">
      <div className="container">
        {show && (
          <div>
            <TitleWIthPera
              text="Top Awesome Games"
              pera="A casino is a facility for certain types of gambling. Casinos are often built combined with hotels, resorts,."
            ></TitleWIthPera>
          </div>
        )}
        <div
          className={` max-w-full ${
            show && "mt-12"
          }`}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={true} modules={[Navigation]}
            className="mySwiper awesomebox mx-auto"
          >
            <SwiperSlide className="">
              <AwesomeBox img={image2} title="Color Prediction"></AwesomeBox>
            </SwiperSlide>
            <SwiperSlide className="">
              <AwesomeBox img={image1} title="Teen Patti"></AwesomeBox>
            </SwiperSlide>
            <SwiperSlide className="">
              <AwesomeBox img={image3} title="Ludo"></AwesomeBox>
            </SwiperSlide>
            {/* <SwiperSlide>
              <AwesomeBox img={image4} title="Ludo"></AwesomeBox>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <AwesomeBox img={image3} title="Ludo"></AwesomeBox>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AwesomeGame;
