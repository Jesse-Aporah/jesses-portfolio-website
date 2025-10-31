"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { assets } from "../assets/assets";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-75%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full flex items-center justify-between py-4 px-5 lg:px-8 xl:px-[8%] fixed z-50 ${
          isScrolled &&
          "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white-soft"
        }`}
      >
        <a href="#top" className="text-4xl font-bold font-story-script">
          JESSE <span className="text-red-600">.</span>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/20 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden font-ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:opacity-80 transition-opacity dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="Contact"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={() => openMenu()}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        {/*-- ------ mobile menu ------ -- */}
        <ul
          ref={sideMenuRef}
          className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 h-screen bg-rose-50 transition duration-500 bg-opacity-50 dark:bg-dark-hover dark:bg-opacity-90"
        >
          <button
            className="absolute right-6 top-6"
            onClick={() => closeMenu()}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </button>
          <li>
            <a href="#top" className="font-ovo" onClick={() => closeMenu()}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={() => closeMenu()}>
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-ovo"
              onClick={() => closeMenu()}
            >
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={() => closeMenu()}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={() => closeMenu()}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
