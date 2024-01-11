"use client";
import HeadingTitle from "@/components/HeadingTitle/HeadingTitle";
import React from "react";
import infoCharts from "@/assets/chartImage/info-charts.png";
import pieDiagram from "@/assets/chartImage/piechart.png";
import { Montserrat } from "next/font/google";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import PieChartDiv from "@/components/PieChartDiv/PieChartDiv";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const TokenDetails = () => {
  return (
    <section className="pt-8 bg-[#F5F3FF] md:pt-32">
      <div className="container">
        <HeadingTitle text="Token Details"></HeadingTitle>
        <div className="flex mt-12 flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 w-full">
            <ul className="space-y-4">
              <li className="path-warper">
                <div className="w-full flex-col md:flex-row flex items-center list-card-clip-path px-5 py-4 rounded-lg gap-2 md:gap-5 rop-shadow-lg bg-[#FA364D]">
                  <p className="text-2xl md:text-6xl font-semibold text-white ">
                    01
                  </p>
                  <div className="text-white md:px-5">
                    <h2 className="text-2xl md:text-4xl uppercase font-semibold">
                      Token Name
                    </h2>
                    <p className=" md:text-2xl uppercase font-medium">
                      TRUSTxGaming
                    </p>
                  </div>
                </div>
              </li>
              <li className="path-warper">
                <div className="w-full flex-col md:flex-row flex items-center list-card-clip-path px-5 py-4 rounded-lg gap-2 md:gap-5 bg-[#36ADB4]">
                  <p className="text-2xl md:text-6xl font-semibold text-white ">
                    02
                  </p>
                  <div className="text-white md:px-5">
                    <h2 className="text-2xl md:text-4xl uppercase font-semibold">
                      Token Symbol
                    </h2>
                    <p className=" md:text-2xl uppercase font-medium">Txg</p>
                  </div>
                </div>
              </li>
              <li className="path-warper">
                <div className="w-full flex-col  md:flex-row flex items-center list-card-clip-path px-5 py-4 rounded-lg gap-2 md:gap-5 bg-[#172E5B]">
                  <p className="text-2xl md:text-6xl font-semibold text-white ">
                    03
                  </p>
                  <div className="text-white md:px-5">
                    <h2 className="text-2xl md:text-4xl uppercase font-semibold">
                      Decimal
                    </h2>
                    <p className=" md:text-2xl uppercase font-medium">18</p>
                  </div>
                </div>
              </li>

             <li className="path-warper">
             <div className="w-full flex-col md:flex-row flex items-center list-card-clip-path px-5 py-4 rounded-lg gap-2 md:gap-5 bg-[#F25E0F]">
                <p className="text-2xl md:text-6xl font-semibold text-white ">
                  04
                </p>
                <div className="text-white md:px-5">
                  <h2 className="text-2xl md:text-4xl uppercase font-semibold">
                    Total Supply
                  </h2>
                  <p className=" md:text-2xl uppercase font-medium">660,000</p>
                </div>
              </div>
             </li>
            </ul>
          </div>
          <div className="flex-1">
            {/* <PieChartDiv></PieChartDiv> */}
            <Image
              className="w-full h-full"
              src={pieDiagram}
              alt="pieDiagram"
            ></Image>
          </div>
        </div>
        <div className="mt-20">
          <div>
            <button className="text-white shadow-md border shadow-[#172E5B] lineBoxPath bg-[#172E5B] rounded-md text-base font-bold w-full md:px-10 py-6 flex items-center justify-center gap-3 ">
              <FaStar></FaStar> <span>Listed on Pancake Swap</span>{" "}
              <FaStar></FaStar>{" "}
            </button>
          </div>
          <div className="grid gap-6 md:gap-12 grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-bl-[35px] rounded-tr-[35px] shadow-[#7D00B8]  shadow-md border ">
              <div className="px-5 py-8 h-full bg-[#7D00B8] text-white">
                <button className="font-bold uppercase w-full md:px-10 py-6 flex items-center justify-center gap-3 ">
                  <FaStar></FaStar> <span>Contact Address</span>{" "}
                  <FaStar></FaStar>{" "}
                </button>
                <div>
                  <p>0x9f46EcF92E7F6eE8C03f393ADf04C 2e17B8cD0B0</p>
                  <p>
                    Locking contract address :- 0x94869e27C0f8Abf5AFa0bE90e027
                    4cfDdA2d27cC
                  </p>
                </div>
              </div>
            </div>
            <div className=" overflow-hidden rounded-bl-[35px] rounded-tr-[35px] shadow-[#5C48C5]  shadow-md border ">
              <div className="px-5 py-8 h-full  bg-[#5C48C5] text-white">
                <button className="font-bold w-full md:px-10 py-6 flex items-center justify-center gap-3 ">
                  <FaStar></FaStar> <span>Coin Market Cap</span>{" "}
                  <FaStar></FaStar>{" "}
                </button>
                <div>
                  <p>
                    https://coinmarketcap.com/dexscan/
                    bsc/0xcfd701dfa42d72b73af972 cb7f387fa0fd2477cb/
                  </p>
                </div>
              </div>
            </div>
            <div className=" overflow-hidden rounded-bl-[35px] rounded-tr-[35px] shadow-[#FA364D]  shadow-md border ">
              <div className="px-5 py-8 h-full text-white bg-[#FA364D] ">
                <button className="font-bold w-full md:px-10 py-6 flex items-center justify-center gap-3 ">
                  <FaStar></FaStar> <span>Token Burning Event</span>{" "}
                  <FaStar></FaStar>{" "}
                </button>
                <div>
                  <p>
                    - After 16 months of Token generation event Token Burning
                    will start
                  </p>
                  <p>
                    -After evry 30 days, 7% token of the total supply will be
                    burned
                  </p>
                  <p>- This will happen 5 times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetails;
