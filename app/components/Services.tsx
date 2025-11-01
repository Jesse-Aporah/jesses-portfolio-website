import React from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

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
        I am a frontend developer with 3 years experience working at Babs &
        Yusuf and freelancing. I create beautiful, responsive, and user-friendly
        websites that help businesses grow online. work, i specialize in
        building clean maintenable website in React.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-auto my-10 gap-8"
      >
        {/* Service Item 1 */}
        {serviceData.map(({ icon, title, description, link }, index) => (
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
            <a href={link} className="flex items-center gap-2 text-sm mt-4">
              {link} Read more
              <Image src={assets.right_arrow} className="w-4" alt="" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
