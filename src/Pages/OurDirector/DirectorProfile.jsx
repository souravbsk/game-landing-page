import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import PeraText from "@/components/PeraText/PeraText";
import React from "react";
import directorImg from "@/assets/about/dioct.png";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

const DirectorProfile = () => {
  const pera1 =
    "Jane is a dynamic and visionary leader serving as the Director of TrustxGaming. With a wealth of experience in the gaming industry and a profound understanding of blockchain technology, Jane plays a pivotal role in driving the success of TrustxGaming.";
  const pera2 =
    "As the Director, Jane is responsible for charting the strategic course of TrustxGaming, overseeing all aspects of the project's operations, and ensuring its continuous growth and development. With a passion for innovation and a deep belief in the transformative power of blockchain gaming, Jane is dedicated to revolutionizing the gaming landscape and providing users with exceptional gaming experiences.";
  const pera3 =
    "Under Jane's astute leadership, TrustxGaming has achieved remarkable milestones, including the successful launch of the platform, the development of engaging games, and the integration of cutting-edge features such as staking and NFT functionalities. Jane fosters a collaborative and forward-thinking environment, encouraging the team to push boundaries and explore new horizons.";
  
    const pera4 = "Jane is known for her strategic acumen and decisive decision-making skills, guiding TrustxGaming through various challenges and positioning it as a leading player in the blockchain gaming industry. Her commitment to transparency, community engagement, and user-centric development has garnered a loyal following, establishing TrustxGaming as a trusted and reputable name in the industry.";
    const pera5 = "Jane's visionary approach and unwavering dedication to excellence continue to propel TrustxGaming forward. She actively seeks partnerships, explores emerging technologies, and expands the platform's offerings to stay ahead of the curve. Jane's strong leadership and expertise have been instrumental in shaping TrustxGaming's vision and executing its strategic roadmap.";
    const pera6 = "With an impressive educational background and extensive experience in both gaming and blockchain, Jane brings a wealth of knowledge to her role. Her visionary leadership and exceptional decision-making abilities have been instrumental in driving TrustxGaming's success.";
    const pera7 = "As TrustxGaming forges ahead to revolutionize the gaming industry, Jane remains committed to driving innovation, fostering community growth, and empowering gamers worldwide. Her unwavering dedication to creating value for users and stakeholders propels TrustxGaming towards becoming a global leader in the realm of blockchain gaming.";
  
    return (
    <section className="py-16 md:py-32">
      <div className="container">
        <HeadingTitle text="Director Profile: Jane" align="left"></HeadingTitle>
        <div className="flex flex-col lg:flex-row mt-8 justify-between gap-6">
          <div className="py-5 px-10 shrink-0 bg-[#F5F3FF] rounded-lg">
            <Image
              width={295}
              alt="directorImg"
              className="rounded-lg h-fit w-full"
              placeholder="blur"
              height={379}
              src={directorImg}
            ></Image>
            <div className="flex items-center mt-8 justify-center">
              <Link
                className="text-[#FF7A1F] text-2xl px-3 py-3 glass rounded-full"
                href="/"
              >
                <FaTwitter></FaTwitter>
              </Link>
            </div>
          </div>

          <div className=" space-y-2 lg:space-y-5">
            <PeraText pera={pera4}></PeraText>
            <PeraText pera={pera5}></PeraText>
            <PeraText pera={pera6}></PeraText>
            <PeraText pera={pera7}></PeraText>
          </div>
        </div>
        <div className="mt-4 lg:mt-12">
          <div className="space-y-2 lg:space-y-5">
            <PeraText pera={pera1}></PeraText>
            <PeraText pera={pera2}></PeraText>
            <PeraText pera={pera3}></PeraText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorProfile;
