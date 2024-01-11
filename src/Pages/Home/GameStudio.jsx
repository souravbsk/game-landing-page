import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import ImpactBox from "@/components/ImpactBox/ImpactBox";
import PeraText from "@/components/PeraText/PeraText";
import React from "react";

const GameStudio = () => {
  const pera1 =
    "We have a passion for games!. Our teams create innovative and entertaining apps for everyday life.";
  return (
    <section className="py-16 md:py-32">
      <div className="container flex flex-col lg:flex-row items-center gap-16">
        <div className="space-y-3 flex-1">
          <HeadingTitle
            align="left"
            text="A Young & Impactful Game Studio"
          ></HeadingTitle>
          <PeraText pera={pera1}></PeraText>
        </div>
        <div className="flex flex-col md:flex-row w-full flex-1  justify-between gap-8">
          <div className="flex-1">
            <div
              className={`bg-[#5732c6] mb-8 md:mt-20 rounded-tl-[40px] rounded-br-[40px] flex flex-col justify-center gap-6 py-16`}
            >
              <h2 className="text-7xl text-white text-center font-bold">0+</h2>
              <p className="text-lg text-white text-center">Games launched</p>
            </div>
            <div
              className={`bg-[#A4283A] rounded-tl-[40px] rounded-br-[40px] flex flex-col justify-center gap-6 py-16`}
            >
              <h2 className="text-7xl text-white text-center font-bold">0B+</h2>
              <p className="text-lg text-white text-center">Downloads</p>
            </div>
          </div>
          <div className="flex-1">
            <div
              className={`bg-[#1D5F2C] mb-8 rounded-tl-[40px] rounded-br-[40px] flex flex-col justify-center gap-6 py-16`}
            >
              <h2 className="text-7xl text-white text-center font-bold">0M+</h2>
              <p className="text-lg text-white text-center">
                Monthly active users
              </p>
            </div>
            <div
              className={`bg-[#7E4C04] rounded-tl-[40px] rounded-br-[40px] flex flex-col justify-center gap-6 py-16`}
            >
              <h2 className="text-7xl text-white text-center font-bold">0+</h2>
              <p className="text-lg text-white text-center">languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameStudio;
