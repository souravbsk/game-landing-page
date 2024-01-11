"use client";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    // <section className="py-16 md:py-32 bg-[#000642]">
    //   <div className="container gap-12  flex-col lg:flex-row z-30 flex items-center">
    //     <div className="text-white md:shrink-0 bg-[#010530] px-6 md:px-20 py-8 md:py-16 border border-[#FF7A1F]">
    //       <h2 className="text-2xl mb-8 font-bold">Contact Information</h2>
    //       <p className="flex items-center gap-2">
    //         <AiOutlineMail></AiOutlineMail>
    //         <Link href="/">support@trustgaming.io</Link>
    //       </p>
    //       <ul className="flex mt-8 items-center gap-3">
    //         <li className="px-3 py-3 rounded-full border text-[#EBE5FF] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
    //           <Link className="text-[##EBE5FF" href="/">
    //             <FaFacebookF></FaFacebookF>
    //           </Link>
    //         </li>
    //         <li className="px-3 py-3 rounded-full border text-[#EBE5FF] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
    //           <Link className="text-[##EBE5FF" href="/">
    //             <FaTwitter></FaTwitter>
    //           </Link>
    //         </li>
    //         <li className="px-3 py-3 rounded-full border text-[#EBE5FF] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
    //           <Link className="text-[##EBE5FF" href="/">
    //             <FaInstagram></FaInstagram>
    //           </Link>
    //         </li>
    //         <li className="px-3 py-3 rounded-full border text-[#EBE5FF] hover:shadow-sm duration-300 hover:shadow-[#FF7A1F]">
    //           <Link className="text-[##EBE5FF" href="/">
    //             <FaTelegram></FaTelegram>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className=" py-6 md:py-12 pl-6 md:pl-20 pr-6 md:pr-12 bg-[#010530] w-full">
    //       <div>
    //         <h2 className="text-white font-bold text-4xl">Get In Touch</h2>
    //         <form>
    //           <div className="flex flex-col md:flex-row mb-6 items-center justify-between gap-3">
    //             <div className="w-full">
    //               <label
    //                 className="label text-white label-text"
    //                 htmlFor="firstName"
    //               >
    //                 First Name*
    //               </label>
    //               <input
    //                 className="input  w-full input-bordered"
    //                 type="text"
    //                 name="firstName"
    //                 id="firstName"
    //               />
    //             </div>
    //             <div className="w-full">
    //               <label
    //                 className="label text-white label-text"
    //                 htmlFor="lastName"
    //               >
    //                 Last Name*
    //               </label>
    //               <input
    //                 className="input w-full input-bordered"
    //                 type="text"
    //                 name="lastName"
    //                 id="firstName"
    //               />
    //             </div>
    //           </div>
    //           <div className="flex flex-col md:flex-row mb-8 items-center justify-between gap-3">
    //             <div className="w-full">
    //               <label
    //                 className="label text-white label-text"
    //                 htmlFor="email"
    //               >
    //                Email Address *
    //               </label>
    //               <input
    //                 className="input w-full input-bordered"
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //               />
    //             </div>
    //             <div className="w-full">
    //               <label
    //                 className="label text-white label-text"
    //                 htmlFor="phone"
    //               >
    //               Phone Number *
    //               </label>
    //               <input
    //                 className="input w-full input-bordered"
    //                 type="tel"
    //                 name="phone"
    //                 id="phone"
    //               />
    //             </div>
    //           </div>
    //           <div className="w-full">
    //             <textarea className="input resize-none h-48 p-5 w-full input-bordered">

    //             </textarea>
    //           </div>
    //           <div className="mt-6">
    //             <PrimaryButton text="Send Message"></PrimaryButton>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-32 justify-between">
          <div className="flex-1">
            <h2 className="text-3xl text-[#000642] mb-8 font-bold">
              Reach Us Directly
            </h2>

            <div className="flex gap-5 flex-col md:flex-row md:text-left text-center mb-8 border px-8 py-6 rounded-3xl px items-center">
              <div className="bg-[#EBE5FF] inline-block px-6 py-6 rounded-full">
                <HiMail className="text-5xl text-[#FF791F]"></HiMail>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Email</h4>
                <p>contact@xmiro.com</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col md:flex-row md:text-left text-center border px-8 py-6 rounded-3xl px items-center">
              <div className="bg-[#EBE5FF] inline-block px-6 py-6 rounded-full">
                <FaPhoneAlt className="text-5xl text-[#FF791F]"></FaPhoneAlt>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Email</h4>
                <p>contact@xmiro.com</p>
              </div>
            </div>
            <div className="divider my-10"></div>

            <div>
              <h4 className="text-2xl font-bold">Follow Us</h4>
              <ul className="flex items-center mt-6 gap-3">
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
          <div className="flex-1 bg-[#F6F3FF] p-5 md:p-[60px] rounded-[40px]">
            <form>
              <div className="w-full mb-4">
                <label
                  className="label text-[#000642] font-semibold text-xl label-text"
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  className="input py-3 px-5 bg-[#ebe5ff] w-full rounded-2xl input-bordered"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
                <div className="w-full mb-4">
                  <label
                    className="label text-[#000642] font-semibold text-xl label-text"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <input
                     className="input py-3 px-5 bg-[#ebe5ff] w-full rounded-2xl input-bordered"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full mb-4">
                  <label
                     className="label text-[#000642] font-semibold text-xl label-text"
                    htmlFor="subject"
                  >
                   Subject *
                  </label>
                  <input
                    className="input py-3 px-5 bg-[#ebe5ff] w-full rounded-2xl input-bordered"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                  />
                </div>
      
              <div className="w-full">
              <label
                     className="label text-[#000642] font-semibold text-xl label-text"
                    htmlFor="subject"
                  >
                   Leave us a message *
                  </label>
                <textarea placeholder="Please type your message here..." className="input resize-none h-32 p-5 w-full bg-[#ebe5ff] input-bordered"></textarea>
              </div>
              <div className="mt-6 text-center">

                <button className="btn-message">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
