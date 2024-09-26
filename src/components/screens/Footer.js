import React from "react";
import { LuCopyright } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-primary mt-10 md:mt-40 md:py-20 md:px-40 p-10 bg-[#3ccf91]">
      <div className="top flex gap-5 md:gap-10 border-b pb-5 md:pb-10 border-white flex-col md:flex-row">
        <div className="left space-y-5 md:space-y-10 md:w-1/2 w-full">
          <h2 className="md:text-5xl text-white font-semibold">
            TouristAttractista
          </h2>
          <div className="head">
            <h2 className="md:text-3xl text-white font-semibold">
              Discover many tourist attraction
            </h2>
            <h2 className="md:text-3xl text-white font-semibold">
              with TouristAttractista
            </h2>
          </div>
        </div>
        <div className="right md:w-1/2 w-full flex md:flex-row">
          <div className="rest w-full  text-white flex justify-between gap-5 my-5 md:my-0 md:flex-row md:gap-10">
            <div className="social-media flex flex-col gap-2">
              <h2 className="md:text-xl text-sm font-semibold">Quick Links</h2>
              <h2 className="md:text-xl text-xs">Experiences</h2>
              <h2 className="md:text-xl text-xs">Places</h2>
              <h2 className="md:text-xl text-xs">About TouristAttractista</h2>
              <h2 className="md:text-xl text-xs">Blog</h2>
            </div>
            <div className="social-media flex flex-col gap-2">
              <h2 className="md:text-xl text-sm font-semibold">Businesses</h2>
              <h2 className="md:text-xl text-xs">Create An Experience</h2>
              <h2 className="md:text-xl text-xs">List A Business</h2>
              <h2 className="md:text-xl text-xs">Explore curating resources</h2>
            </div>
            <div className="social-media flex flex-col gap-2">
              <h2 className="md:text-xl text-sm font-semibold">Support</h2>
              <h2 className="md:text-xl text-xs">Contact Us</h2>
              <h2 className="md:text-xl text-xs">Privacy Policies</h2>
              <h2 className="md:text-xl text-xs">Terms & Conditions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom pt-5 md:pt-10 text-white flex flex-col md:flex-row justify-between">
        <div className="flex justify-center items-center gap-1 md:gap-3">
          <LuCopyright size={20} />
          <h2 className="md:text-base text-xs">
            2024 TouristAttractista All rights reserved.{" "}
          </h2>
        </div>
        <div className="flex gap-5 items-center justify-center mt-5 md:mt-0">
          <CiFacebook size={25} />
          <SlSocialTwitter size={25} />
          <IoLogoInstagram size={25} />
          <FaLinkedinIn size={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
