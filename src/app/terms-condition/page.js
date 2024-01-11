"use client";
import GetUpdate from "@/Pages/Home/GetUpdate";
import TermsConditionContent from "@/Pages/Terms&Condition/TermsConditionContent";
import TermsHero from "@/Pages/Terms&Condition/TermsHero";
import Test from "@/Pages/Terms&Condition/Test";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <TermsHero></TermsHero>
      <div className="">
        <TermsConditionContent></TermsConditionContent>
      </div>
      <GetUpdate></GetUpdate>

      {/* <Test></Test> */}
    </main>
  );
};

export default page;
