"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Works from "./components/Works";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Works isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
