"use client";

import Image from "next/image";
import { FormEvent, use, useState } from "react";

import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "62d5a1b3-fc88-456e-aa5a-51b4fcdead43");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        {" "}
        Contact me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto font-ovo mt-5 mb-12"
      >
        I'd love to hear from you! Whether you have a question about my
        services, want to discuss a project, or just want to say hello, feel
        free to reach out. fill the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="max-w-2xl mx-auto flex flex-col gap-6"
        onSubmit={onSubmit}
      >
        <div className="grid grid-auto gap-4 mt-10 mb-2">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Please enter your name"
            name="name"
            required
            className="w-full p-3 border-[0.5px] outline-none focus:ring-2 focus:ring-phlox-pink border-gray-300 rounded-md bg-white/50 dark:bg-dark-hover/30 dark:border-white/80"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Please enter your email"
            name="email"
            required
            className="w-full p-3 border-[0.5px] outline-none focus:ring-2 focus:ring-phlox-pink border-gray-300 rounded-md bg-white/50 dark:bg-dark-hover/30 dark:border-white/80"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows={7}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-3 border-[0.5px] outline-none focus:ring-2 focus:ring-phlox-pink border-gray-300 rounded-md bg-white/50 dark:bg-dark-hover/30 dark:border-white/80"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-max px-10 py-3 bg-black text-white rounded-full mx-auto flex items-center gap-2 hover:opacity-80 transition-opacity dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>
        <p className="mt-5">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
