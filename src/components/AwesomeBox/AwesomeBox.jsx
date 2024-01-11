import Image from "next/image";
import React from "react";
import appStore from "@/assets/awesomebox/app-store.png"
import playStore from "@/assets/awesomebox/play-store.png"

const AwesomeBox = ({ img, title }) => {
  return (
    <div className="bg-transparent border px-8 py-5 hover:border-[#6311e7] duration-300 shadow-md  rounded-2xl">
      <div className="mb-6 rounded-lg">
        <Image className="max-w-full w-[323px]  h-[322px] mx-auto" src={img} alt="img"></Image>
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        {/* <h2 className="text-2xl font-semibold mb-4 text-[#010530]">{title}</h2> */}
        <button className="rounded-md mb-2 font-semibold">
          <Image src={appStore} alt="appStore"></Image>
        </button>
        <button className="rounded-md font-semibold">
          <Image src={playStore} alt="appStore"></Image>
        </button>
      </div>
    </div>
  );
};

export default AwesomeBox;
