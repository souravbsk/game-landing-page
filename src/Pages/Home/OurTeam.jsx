'use client'
import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import PeraText from "@/components/PeraText/PeraText";
import React from "react";
import image1 from "@/assets/home/TeamMember/team-member-2.png"
import image2 from "@/assets/home/TeamMember/team-member-3.png"
import image3 from "@/assets/home/TeamMember/team-member-4.png"
// import image4 from "@/assets/home/TeamMember/team-member-5.png"
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
const OurTeam = () => {
  return (
    <section className="py-16 bg-[#F5F3FF] md:py-32">
      <div className="container">
        <div className="max-w-full text-center space-y-2 md:w-6/12 mx-auto">
          <HeadingTitle text="Great Game Made By Passionate People"></HeadingTitle>
          <PeraText pera="Our founding team are veteran individual contributors who have a passion for world-building."></PeraText>
        </div>
        <div>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Navigation,Autoplay]}

        navigation={true}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        className="mySwiper team"
      >
         <SwiperSlide className="pb-20 mt-12">

         <div className="card bg-base-100 hover:shadow-2xl duration-300 shadow-lg">
            <figure className="px-4 pt-10">
              <Image
                src={image1}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wilma Reid!</h2>
              <p>Developer</p>
              <div className="card-actions">
              <ul className="flex items-center gap-3">
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaFacebookF></FaFacebookF>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTwitter></FaTwitter>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaInstagram></FaInstagram>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTelegram></FaTelegram>
                </li>
                  </Link>
              </ul>
              </div>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide className="pb-20 mt-12">

         <div className="card bg-base-100 hover:shadow-2xl duration-300 shadow-lg">
            <figure className="px-4 pt-10">
              <Image
                src={image2}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wilma Reid!</h2>
              <p>Developer</p>
              <div className="card-actions">
              <ul className="flex items-center gap-3">
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaFacebookF></FaFacebookF>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTwitter></FaTwitter>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaInstagram></FaInstagram>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTelegram></FaTelegram>
                </li>
                  </Link>
              </ul>
              </div>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide className="pb-20 mt-12">

         <div className="card bg-base-100 hover:shadow-2xl duration-300 shadow-lg">
            <figure className="px-4 pt-10">
              <Image
                src={image3}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wilma Reid!</h2>
              <p>Developer</p>
              <div className="card-actions">
              <ul className="flex items-center gap-3">
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaFacebookF></FaFacebookF>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTwitter></FaTwitter>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaInstagram></FaInstagram>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTelegram></FaTelegram>
                </li>
                  </Link>
              </ul>
              </div>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide className="pb-20 mt-12">

         <div className="card bg-base-100 hover:shadow-2xl duration-300 shadow-lg">
            <figure className="px-4 pt-10">
              <Image
                src={image1}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wilma Reid!</h2>
              <p>Developer</p>
              <div className="card-actions">
              <ul className="flex items-center gap-3">
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaFacebookF></FaFacebookF>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTwitter></FaTwitter>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaInstagram></FaInstagram>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTelegram></FaTelegram>
                </li>
                  </Link>
              </ul>
              </div>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide className="pb-20 mt-12">

         <div className="card bg-base-100 hover:shadow-2xl duration-300 shadow-lg">
            <figure className="px-4 pt-10">
              <Image
                src={image2}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wilma Reid!</h2>
              <p>Developer</p>
              <div className="card-actions">
              <ul className="flex items-center gap-3">
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaFacebookF></FaFacebookF>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTwitter></FaTwitter>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaInstagram></FaInstagram>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTelegram></FaTelegram>
                </li>
                  </Link>
              </ul>
              </div>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide className="pb-20 mt-12">

         <div className="card bg-base-100 hover:shadow-2xl duration-300 shadow-lg">
            <figure className="px-4 pt-10">
              <Image
                src={image3}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wilma Reid!</h2>
              <p>Developer</p>
              <div className="card-actions">
              <ul className="flex items-center gap-3">
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaFacebookF></FaFacebookF>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTwitter></FaTwitter>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaInstagram></FaInstagram>
                </li>
                  </Link>
                  <Link
                    className=""
                    href="/"
                  >
                <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                    <FaTelegram></FaTelegram>
                </li>
                  </Link>
              </ul>
              </div>
            </div>
          </div>
         </SwiperSlide>
      </Swiper>
        
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
