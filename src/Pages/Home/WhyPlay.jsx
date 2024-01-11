import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import PeraText from "@/components/PeraText/PeraText";
import WhyPlayBox from "@/components/WhyPlayBox/WhyPlayBox";
import React from "react";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { TbGoGame } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
const WhyPlay = () => {
  const pera1 =
    "A casino is a facility for certain types of gambling. Casinos are often built combined with hotels, resorts,";
  const pera2 =
    "Debitis ad dolor sint consequatur hic, facere est doloribustemp oribus in laborum similique saepe bland itiis odio nulla repellat dicta reprehenderit. Obcaecati, sed perferendis? Quam cum debitis odit recusandae dolor earum.";
  return (
    <section className="py-16 md:py-32">
      <div className="container grid md:grid-cols-3 gap-12">
        <div className="space-y-3 ">
          <HeadingTitle align="left" text="Why Play Our Casino"></HeadingTitle>
          <PeraText pera={pera1}></PeraText>
          <PeraText pera={pera2}></PeraText>
        </div>
        <div className="grid md:col-span-2 md:grid-cols-2 gap-8">
          <WhyPlayBox
            title="Secure Casino Games"
            pera="Games available in most casinos are commonly called casino games. In a casino game. you will found options."
            icon={<AiTwotoneSecurityScan></AiTwotoneSecurityScan>}
          ></WhyPlayBox>
          <WhyPlayBox
            title="Awesome Game State"
            pera="Games available in most casinos are commonly called casino games. In a casino game. you will found options."
            icon={<TbGoGame></TbGoGame>}
          ></WhyPlayBox>
          <WhyPlayBox
            title="Higher Wining Chance"
            pera="Games available in most casinos are commonly called casino games. In a casino game. you will found options."
            icon={<FaTrophy></FaTrophy>}
          ></WhyPlayBox>
          <WhyPlayBox
            title="Invest Win And Earn"
            pera="Games available in most casinos are commonly called casino games. In a casino game. you will found options."
            icon={<LiaCoinsSolid></LiaCoinsSolid>}
          ></WhyPlayBox>
        </div>
      </div>
    </section>
  );
};

export default WhyPlay;
