"use client";
import ContactForm from "@/Pages/Contact/ContactForm";
import HeroContact from "@/Pages/Contact/HeroContact";
import GetUpdate from "@/Pages/Home/GetUpdate";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroContact></HeroContact>
      <ContactForm></ContactForm>
      <GetUpdate></GetUpdate>
    </main>
  );
};

export default page;
