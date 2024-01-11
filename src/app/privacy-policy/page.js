"use client";
import GetUpdate from "@/Pages/Home/GetUpdate";
import HeroPolicy from "@/Pages/PrivacyPolicy/HeroPolicy";
import PrivacyPolicyContent from "@/Pages/PrivacyPolicy/PrivacyPolicyContent";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroPolicy></HeroPolicy>
      <PrivacyPolicyContent></PrivacyPolicyContent>
      <GetUpdate></GetUpdate>
    </main>
  );
};

export default page;
