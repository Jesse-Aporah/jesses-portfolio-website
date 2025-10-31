import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Jesse Aporah{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1> frontend web developer from based in Nigeria.</h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a frontend developer from Nigeria, with 3 years of experience
        building optimzed and scalable web applications
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black flex text-white items-center gap-2 dark:bg-transparent dark:border-gray-500 dark:text-white"
        >
          {" "}
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/resume"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          {" "}
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
