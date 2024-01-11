import TitleWIthPera from "@/components/TitleWithPera/TitleWIthPera";
import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { LiaDiceSolid } from "react-icons/lia";

const PlayGame = () => {
  return (
    <section className="py-16 md:py-32 bg-[#000642]">
      <div className="container">
        <div>
          <TitleWIthPera
            text="How to Play Game"
            pera="A casino is a facility for certain types of gambling. Casinos are often built combined with hotels, resorts."
          ></TitleWIthPera>
        </div>
        <div className="grid mt-12 lg:grid-cols-3 gap-8 lg:gap-0 grid-cols-1">
          <div className="relative  duration-300 group ">
            <div className="how-item flex flex-col gap-4 items-center" >
              <div className="w-32 mx-auto relative flex h-32 duration-300 group-hover:bg-[#FF7A1F] bg-[#010530] text-white items-center text-center justify-center rounded-full group-hover:text-black">
                <AiOutlineUserAdd className="text-4xl mx-auto"></AiOutlineUserAdd>
                <button className="w-10 absolute top-0 right-0 h-10 bg-[#FF7A1F] rounded-full shadow-xl border">
                  01
                </button>
              </div>
              <h3 className="text-white duration-300 group-hover:text-[#FF7A1F] font-semibold text-2xl">
                Sign Up First & Login
              </h3>
            </div>
          </div>
          <div className="relative duration-300 group">
             <div className="how-item flex flex-col gap-4 items-center" >
            <div className="w-32 mx-auto relative flex h-32 duration-300 group-hover:bg-[#FF7A1F] bg-[#010530] text-white items-center text-center justify-center rounded-full group-hover:text-black">
              <FaAddressCard className="text-4xl mx-auto"></FaAddressCard>
              <button className="w-10 absolute top-0 right-0 h-10 bg-[#FF7A1F] rounded-full shadow-xl border">
                02
              </button>
            </div>
            <h3 className="text-white  duration-300 group-hover:text-[#FF7A1F] font-semibold text-2xl">
              Complete you Profile
            </h3>
          </div>
          </div>
          <div className="relative duration-300 group">
             <div className="flex flex-col gap-4 items-center" >
            <div className="w-32 mx-auto relative flex h-32 duration-300 group-hover:bg-[#FF7A1F] bg-[#010530] text-white items-center text-center justify-center rounded-full group-hover:text-black">
              <LiaDiceSolid className="text-4xl mx-auto"></LiaDiceSolid>
              <button className="w-10 absolute top-0 right-0 h-10 bg-[#FF7A1F] rounded-full shadow-xl border">
                03
              </button>
            </div>
            <h3 className="text-white  duration-300 group-hover:text-[#FF7A1F] font-semibold text-2xl">
              Choose a Game & Play
            </h3>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayGame;
