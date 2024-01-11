"use client";
import React from "react";
import Logo from "@/assets/logo/logo1.png";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" sectionBg flex justify-center items-end h-[440px] md:pt-10">
        <div className="container  md:pt-10 pb-9 pt-12">
          <div className=" flex flex-col md:flex-row md:pt-10 pt-2 lg:pt-20 pb-8 border-b items-center justify-between gap-3">
            <Link href="/">
              <Image
                className="max-w-full w-28 h-28"
                src={Logo}
                alt="Logo"
              ></Image>
            </Link>
            <ul className="flex flex-wrap justify-center md:justify-normal items-center gap-3">
              <li>
                <Link
                  className="text-white  md:text-lg font-semibold"
                  href="/games"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  className="text-white  md:text-lg font-semibold"
                  href="/terms-condition"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  className="text-white  md:text-lg font-semibold"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row pt-8 items-center justify-between gap-3">
            <div className="text-white">
              <p>
                Copyright © 2022{" "}
                <Link href="/" className="text-[#FF7A1F]">
                  Trustx Gaming
                </Link>
              </p>
            </div>
            <ul className="flex items-center gap-3">
            <Link
                  className=""
                  href="/"
                >
              <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
             
                  <FaFacebookF></FaFacebookF>
              </li>
                </Link>
                <Link
                  className=""
                  href="/"
                >
              <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                
                  <FaTwitter></FaTwitter>
              </li>
                </Link>
                <Link
                  className=""
                  href="/"
                >
              <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                  <FaInstagram></FaInstagram>
              </li>
                </Link>
                <Link
                  className=""
                  href="/"
                >
              <li className="px-3 py-3 rounded-full group border text-[#9c94b4] hover:text-white hover:bg-[#FF7A1F] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
                  <FaTelegram></FaTelegram>
              </li>
                </Link>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
