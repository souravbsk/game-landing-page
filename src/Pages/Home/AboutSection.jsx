import React from "react";
import aboutImage from "@/assets/home/about.png";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import PeraText from "@/components/PeraText/PeraText";
const AboutSection = () => {
  const pera =
    "We are an online gaming company that offers a unique gaming experience where players can not only enjoy exciting games like ludo, poker, rummy, and many more, but also have the opportunity to earn crypto tokens while playing. Our platform is designed to provide a seamless and immersive gaming environment, where players can compete against each other, showcase their skills, and win rewards in the form of our native crypto token, TXG.";
  return (
    <section>
      <div className="py-16 md:py-32  container">
        <div className=" flex items-center gap-10 flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <Image className="w-full" src={aboutImage} alt="aboutImage"></Image>
          </div>
          <div className="text-[#000642] flex-1">
            <h1 className="text-3xl md:text-5xl mb-3 font-bold">
              Welcome to TrustxGaming!
            </h1>
            <PeraText pera={pera}></PeraText>
            <div className="mt-8">
              <PrimaryButton text="Sign Up"></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
