"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GoDotFill } from "react-icons/go";
const TimeLine = () => {
  return (
    <>
      <VerticalTimeline className="pt-0 mt-12">
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#3A2274", color: "#fff" }}
          contentArrowStyle={{ borderRight: "#3A2274" }}
          iconStyle={{ color: "white" }}
          icon={<GoDotFill />}
        >
          <h1 className="text-2xl font-semibold text-white">
            Phase 1: ICO and Token Distribution
          </h1>
          <p>
            Conduct the Initial Coin Offering (ICO) to raise funds for the
            project and distribute TXG tokens to early supporters and investors.{" "}
            <br />
            Launch marketing campaigns to raise awareness about TrustxGaming and
            attract potential users to the platform. Establish partnerships with
            centralized exchanges to list TXG tokens for trading.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#3A2274", color: "#fff" }}
          contentArrowStyle={{ borderRight: "#3A2274" }}
          iconStyle={{ color: "white" }}
          icon={<GoDotFill />}
        >
          <h1 className="text-2xl font-semibold text-white">
            Phase 2: Game Launch and User Engagement
          </h1>
          <p>
            Launch the TrustxGaming platform with initial games, such as ludo,
            poker, and rummy, for users to play and win TXG tokens. Implement
            user-friendly features, such as leaderboards, tournaments, and
            promotions, to encourage user engagement and retention. Continuously
            improve the gaming experience based on user feedback and
            preferences. <br />
            Expand the game library with new games and genres to cater to
            different interests and preferences.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#3A2274", color: "#fff" }}
          contentArrowStyle={{ borderRight: "#3A2274" }}
          iconStyle={{ color: "white" }}
          icon={<GoDotFill />}
        >
          <h1 className="text-2xl font-semibold text-white">
            Phase 3: NFT Integration and Metaverse Development
          </h1>
          <p>
            Introduce Non-Fungible Tokens (NFTs) into the TrustxGaming
            ecosystem, allowing users to buy, sell, and trade unique in-game
            assets as NFTs. Collaborate with game developers and artists to
            create exclusive NFT collections that offer unique benefits and
            rewards to users. Explore partnerships and collaborations in the
            blockchain and gaming industry to enhance the value proposition of
            NFTs within the TrustxGaming platform. Begin development of a
            metaverse within the TrustxGaming platform, offering users a virtual
            world where they can interact, socialize, and participate in virtual
            events.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#3A2274", color: "#fff" }}
          contentArrowStyle={{ borderRight: "#3A2274" }}
          iconStyle={{ color: "white" }}
          icon={<GoDotFill />}
        >
          <h1 className="text-2xl font-semibold text-white">
          Phase 4: Expansion and Community Building
          </h1>
          <p>
          Expand the TrustxGaming community by reaching out to more players, investors, and partners through marketing initiatives, events, and collaborations. Launch additional games and features based on user feedback and market demand, offering a diverse range of gaming options for different demographics and preferences. Foster a strong community of players and token holders through regular communication, engagement activities, and loyalty programs. Continuously improve the platform`s security, performance, and user experience to ensure the highest level of trust and satisfaction among users.


          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#3A2274", color: "#fff" }}
          contentArrowStyle={{ borderRight: "#3A2274" }}
          iconStyle={{ color: "white" }}
          icon={<GoDotFill />}
        >
          <h1 className="text-2xl font-semibold text-white">
          Phase 5: Future Innovations and Growth
          </h1>
          <p>
          Explore emerging technologies and trends, such as virtual reality, augmented reality, and blockchain advancements, to stay at the forefront of the gaming industry. Continuously innovate and introduce new features, rewards, and experiences to keep users engaged and excited about the TrustxGaming platform. Explore opportunities for global expansion, partnerships with game developers, and collaborations with other blockchain projects to drive growth and adoption. Stay committed to the project`s mission of revolutionizing the gaming industry with blockchain and cryptocurrencies, and continue to deliver value to users, investors, and stakeholders.



          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default TimeLine;
