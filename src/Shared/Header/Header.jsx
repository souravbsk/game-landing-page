"use client";
import Link from "next/link";
import {usePathname} from "next/navigation"
import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo/logo1.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const navLinks = [
  {
    name: "Home",
    href:"/"
  },
  {
    name: "About",
    href:"/about"
  },
  {
    name: "Games",
    href:"/games"
  },
  {
    name: "Whitepapers",
    href:"https://www.trustxgaming.io/Content/casinous/assets/images/TXG_whitepaper.pdf",
  },
  {
    name:"Contact",
    href:"/contact"
  }
]

const Header = () => {

  const [isNavShow, setNavShow] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const pathname = usePathname()
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 90;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  console.log(pathname);
  return (
    <>

<header className={`fixed  z-50 bg-[#F5FAFF] duration-300 top-0 right-0 left-0 py-5 ${scroll ? "shadow-lg" : ""}`}>
          <nav className="flex  flex-col md:flex-row container  items-center justify-between">
            <div className="flex items-center w-full justify-between">
              <Link href="/">
                <Image
                  src={Logo}
                  className="w-20 h-20 object-fill"
                  alt="logo"
                ></Image>
              </Link>
              <button
                onClick={() => setNavShow(!isNavShow)}
                className="text-2xl block md:hidden text-[#000642]"
              >
                {isNavShow ? <CgClose></CgClose> : <FaBars></FaBars>}
              </button>
            </div>

            <ul
              className={`flex md:shadow-none shadow-lg duration-300 bg-[#F5FAFF] md:bg-transparent absolute md:static flex-col  md:backdrop-blur-0 backdrop-blur-3xl left-0 right-0 md:flex-row py-8 md:py-0 md:items-center gap-3 ${
                isNavShow ? "top-[110px]" : "-top-96"
              }`}
            >
              {
                navLinks?.map((link,i) => {
                  const isActive = pathname === link?.href
                  return <li className="relative px-3" key={i}>
                  <Link
                    className={` ${isActive ? "active-nav": ""} capitalize  text-lg text-[#000642] duration-300 hover:text-[#FF7A1F] font-semibold`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
                })
              }
              
            </ul>
          </nav>
        </header>

      {/* {scroll ? (
        <header
          className={`fixed shadow-lg duration-100 z-50 bg-[#F5FAFF] right-0 left-0 py-5 ${
            scroll ? "top-0 " : "-top-40"
          }`}
        >
          <nav className="flex  flex-col md:flex-row container  items-center justify-between">
            <div className="flex items-center w-full justify-between">
              <Link href="/">
                <Image
                  src={Logo}
                  className="w-20 h-20 object-fill"
                  alt="logo"
                ></Image>
              </Link>
              <button
                onClick={() => setNavShow(!isNavShow)}
                className="text-2xl block md:hidden text-[#000642]"
              >
                {isNavShow ? <CgClose></CgClose> : <FaBars></FaBars>}
              </button>
            </div>

            <ul
              className={`flex duration-300  absolute md:static flex-col  md:backdrop-blur-0 backdrop-blur-3xl left-0 right-0 md:flex-row py-8 md:py-0 md:items-center gap-3 ${
                isNavShow ? "top-[110px]" : "-top-96"
              }`}
            >
              {
                navLinks?.map((link,i) => {
                  const isActive = pathname === link?.href
                  return <li className="relative px-3" key={i}>
                  <Link
                    className={` ${isActive ? "active-nav": ""} capitalize  text-lg text-[#000642] duration-300 hover:text-[#FF7A1F] font-semibold`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
                })
              }
            </ul>
          </nav>
        </header>
      ) : (
        <header className="absolute  top-0 right-0 left-0 py-5">
          <nav className="flex  flex-col md:flex-row container  items-center justify-between">
            <div className="flex items-center w-full justify-between">
              <Link href="/">
                <Image
                  src={Logo}
                  className="w-20 h-20 object-fill"
                  alt="logo"
                ></Image>
              </Link>
              <button
                onClick={() => setNavShow(!isNavShow)}
                className="text-2xl block md:hidden text-[#000642]"
              >
                {isNavShow ? <CgClose></CgClose> : <FaBars></FaBars>}
              </button>
            </div>

            <ul
              className={`flex duration-300  absolute md:static flex-col  md:backdrop-blur-0 backdrop-blur-3xl left-0 right-0 md:flex-row py-8 md:py-0 md:items-center gap-3 ${
                isNavShow ? "top-[110px]" : "-top-96"
              }`}
            >
              {
                navLinks?.map((link,i) => {
                  const isActive = pathname === link?.href
                  return <li className="relative px-3" key={i}>
                  <Link
                    className={` ${isActive ? "active-nav": ""} capitalize  text-lg text-[#000642] duration-300 hover:text-[#FF7A1F] font-semibold`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
                })
              }
              
            </ul>
          </nav>
        </header>
      )} */}
    </>
  );
};

export default Header;
