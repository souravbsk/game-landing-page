import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import PeraText from "@/components/PeraText/PeraText";
import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/about/aboutus.png";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

const AboutUs = () => {
  const pera1 =
    "We are an online gaming company that offers a unique gaming experience where players can not only enjoy exciting games like ludo, poker, rummy, and many more, but also have the opportunity to earn crypto tokens while playing. Our platform is designed to provide a seamless and immersive gaming environment, where players can compete against each other, showcase their skills, and win rewards in the form of our native crypto token, TXG.";
  const pera2 =
    "At TrustxGaming, we believe in providing a secure and transparent gaming ecosystem for our users. Our platform is built on cutting-edge blockchain technology, ensuring that every game played and transaction made is secured and verified. This allows players to have complete trust in the fairness and integrity of our games.";
  const pera3 =
    "One of the unique features of TrustxGaming is our in-game economy, which is powered by TXG tokens. Players can purchase TXG tokens using other cryptocurrencies or fiat, and use them to buy game coins to play our games. As players progress and win games, they can earn more TXG tokens, which can be traded or used to purchase various in-game items, upgrades, and exclusive rewards. This creates an engaging and rewarding gaming experience for our users, where their skills and achievements are directly rewarded with real value.";
  const pera4 =
    "Our mission is to revolutionize the online gaming industry by integrating blockchain technology and cryptocurrencies, creating a new paradigm of gaming where players have true ownership and control over their virtual assets. We strive to provide a user-friendly platform with a wide range of games, attractive rewards, and a vibrant community of players from around the world.";
  const pera5 =
    "TrustxGaming is not just a gaming platform, but also a community of passionate gamers who share the same vision of a decentralized and transparent gaming ecosystem. We are constantly innovating and expanding our offerings to provide our users with the best gaming experience possible. Join us today and be a part of the future of gaming!";
  return (
    <section className="py-16 bg-[#F5F3FF] md:py-32">
      <div className="container">
        <div>
          <div className="mb-5 md:mb-10">
            <HeadingTitle
              text="About The TrustxGaming!"
              align="left"
            ></HeadingTitle>
          </div>
          <div className="space-y-2 md:space-y-4">
            <PeraText pera={pera1}></PeraText>
            <PeraText pera={pera2}></PeraText>
            <PeraText pera={pera3}></PeraText>
          </div>
          <div className="flex mt-4 md:mt-8 flex-col md:flex-row gap-8 justify-between">
            <div className="space-y-2 md:space-y-4  md:mt-8 flex-1">
              <PeraText pera={pera4}></PeraText>
              <PeraText pera={pera5}></PeraText>
              <div>
                <div className="mt-10">
                  <PrimaryButton text="Get Started"></PrimaryButton>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image className="w-full" src={aboutImg} alt="about"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
