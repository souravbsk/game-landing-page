import React from "react";
import heroSectionImg from "@/assets/home/index-illus.png";
import Image from "next/image";
import {Montserrat} from "next/font/google"
import {FaPlay} from "react-icons/fa"
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import PeraText from "@/components/PeraText/PeraText";
const montserrat = Montserrat({subsets: ['latin'], weight: ['300', '400', '700'],})
const HeroSection = () => {
    const pera = "  PLAY CASINO AND EARN CRYPTO IN ONLINE. THE ULTIMATE ONLINE CASINO PLATFORM."
  return (
    <section className="bg-[#F5FAFF]">
      <div className=" flex items-center pb-8 pt-40 gap-20 container flex-col lg:flex-row">
        <div  className=" text-[#000642] flex-1 ">
          <h1 className="text-3xl mb-2 md:text-5xl font-bold">
            Play Online Casino & Win Money Unlimited
          </h1>
          <PeraText pera={pera}></PeraText>
          <div className="flex items-center gap-5 mt-8">
            <button className="bg-[#FF7A1F] px-5 md:px-9 py-3 md:py-4 rounded-lg shadow-md md:text-xl font-medium shadow-[#FF7A1F] flex items-center gap-2"><FaPlay></FaPlay> Play Now</button>
            <PrimaryButton text="Sign Up"></PrimaryButton>
          </div>
        </div>
        <div className="flex-1">
          <Image className=" imgUnset w-full object-fill " src={heroSectionImg} alt="heroSectionImg"></Image>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
