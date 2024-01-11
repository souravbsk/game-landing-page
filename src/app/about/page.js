"use client";
import AboutUs from "@/Pages/About/AboutUs";
import HeroAbout from "@/Pages/About/HeroAbout";
import Faq from "@/Pages/Home/Faq";
import GetUpdate from "@/Pages/Home/GetUpdate";
import OurTeam from "@/Pages/Home/OurTeam";
import WhyPlay from "@/Pages/Home/WhyPlay";
import DirectorProfile from "@/Pages/OurDirector/DirectorProfile";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroAbout></HeroAbout>
      <DirectorProfile></DirectorProfile>
      <AboutUs></AboutUs>
      <WhyPlay></WhyPlay>
      <OurTeam></OurTeam>
      <Faq accBG={true}></Faq>
     <GetUpdate></GetUpdate>

    </main>
  );
};

export default page;
