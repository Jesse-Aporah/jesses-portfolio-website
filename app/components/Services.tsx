import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

import Icon from "./Icon";
import { assets, serviceData } from "../assets/assets";
import Link from "next/link";
import slugify from "../utils/slugify";

const Services = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto font-ovo mt-5 mb-12"
      >
        With 3 years of experience at Babs & Yusuf and in freelance projects, I
        specialize in crafting responsive, high-performance websites using
        React. I focus on writing clean, maintainable code and delivering
        seamless user experiences that drive business growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="grid grid-auto my-10 gap-8"
      >
        {/* Service Item 1 */}
        {serviceData.map(({ icon, title, description, slug }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border p-6 rounded-lg shadow-sm hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-12 mb-4" />

            <h3 className="text-2xl text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <Link
              href={slug === "web-development" ? `/services/${slug}` : ""}
              className="flex items-center gap-2 text-sm mt-4"
            >
              Read more
              <Image src={assets.right_arrow} className="w-4" alt="" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
