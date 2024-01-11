import TitleWIthPera from "@/components/TitleWithPera/TitleWIthPera";
import UpComingGameCard from "@/components/UpComingGameCard/UpComingGameCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "@/assets/home/upcomminggames/img1.png"
import img2 from "@/assets/home/upcomminggames/img2.jpg"
import img3 from "@/assets/home/upcomminggames/img3.jpg"
import img4 from "@/assets/home/upcomminggames/img4.jpg"

const UpcomingGames = () => {
  return (
    <div className="py-16 md:py-32">
      <div className="container">
        <div>
          <TitleWIthPera
            text="Upcoming Games"
            pera="A casino is a facility for certain types of gambling. Casinos are often built combined with hotels, resorts,."
          ></TitleWIthPera>
        </div>
        <div  className="mt-12">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper awesomebox mx-auto"
          >
            <SwiperSlide className="">
              <UpComingGameCard title="PUBG" pera="Esports, short for electronic sports, is a form of competition using video games.[1] Esports often takes the form of organized, multiplayer video game competitions," img={img1} />
            </SwiperSlide>
            <SwiperSlide className="">
              <UpComingGameCard title="HERO of The Storn" pera="Esports, short for electronic sports, is a form of competition using video games.[1] Esports often takes the form of organized, multiplayer video game competitions," img={img2} />
            </SwiperSlide>
            <SwiperSlide className="">
              <UpComingGameCard title="Clash of Clans" pera="Esports, short for electronic sports, is a form of competition using video games.[1] Esports often takes the form of organized, multiplayer video game competitions," img={img3} />
            </SwiperSlide>
            <SwiperSlide className="">
              <UpComingGameCard title="League of Legends" pera="Esports, short for electronic sports, is a form of competition using video games.[1] Esports often takes the form of organized, multiplayer video game competitions," img={img4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default UpcomingGames;
