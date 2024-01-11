import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import PeraText from "@/components/PeraText/PeraText";
import videoBg from "@/assets/home/video-bg.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const CreateVisual = () => {
  return (
    <section className="py-16 bg-[#F5F3FF] md:py-32">
      <div className="container">
        <div className="max-w-full text-center space-y-2 md:w-9/12 mx-auto">
          <HeadingTitle text="Our Mission Is To Create Virtual Worlds More Meaningful Than Real Life"></HeadingTitle>
          <PeraText pera="Our mission to entertain the world goes beyond gaming. Our teams create innovative and entertaining apps for everyday life."></PeraText>
        </div>
        <div className="mt-12">
          <div className="relative">
            <div className="relative bg-area">
              <Image className="w-full h-[265px] md:h-auto" src={videoBg} alt="videoBg"></Image>
            </div>
            <div className="flex flex-col gap-2 text-center justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/">
                <button className="text-3xl px-6 py-6 text-white bg-[#FF7A1F] rounded-full">
                  <FaPlay></FaPlay>
                </button>
              </Link>
              <h1 className=" text-white  text-2xl md:text-5xl font-bold  text-center">Meet Xmiro</h1>
                <p className="text-xl">Building games for a lifetime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateVisual;
