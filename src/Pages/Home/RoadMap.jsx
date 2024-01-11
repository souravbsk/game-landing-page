import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import TimeLine from "@/components/TimeLine/TimeLine";
import React from "react";

const RoadMap = () => {
  return (
    <section className=" pt-16 md:pt-32">
      <div className="container">
        <HeadingTitle text="Roadmap"></HeadingTitle>

        <div className="py-6 md:py-12 mt-6 md:mt-12 md:bg-[#000642] rounded-2xl">
          <TimeLine></TimeLine>
        </div>
        <p className=" my-6 md:my-12 text-white">
          Please note that this roadmap is subject to change based on market
          conditions, regulatory requirements, and other factors. The
          TrustxGaming team will continually evaluate and adjust the roadmap to
          ensure the project`s success and sustainability in the dynamic gaming
          industry.
        </p>
      </div>
    </section>
  );
};

export default RoadMap;
