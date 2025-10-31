"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import { FormEvent, use, useState } from "react";
const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
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
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-ovo"> Contact me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto font-ovo mt-5 mb-12">
        I'd love to hear from you! Whether you have a question about my
        services, want to discuss a project, or just want to say hello, feel
        free to reach out. fill the form below.
      </p>
      <form
        className="max-w-2xl mx-auto flex flex-col gap-6"
        onSubmit={onSubmit}
      >
        <div className="grid grid-auto gap-4 mt-10 mb-4">
          <input
            type="text"
            placeholder="Please enter your name"
            name="name"
            required
            className="w-full p-3 border-[0.5px] outline-none focus:ring-2 focus:ring-phlox-pink border-gray-300 rounded-md bg-white/50 dark:bg-dark-hover/30 dark:border-white/80"
          />
          <input
            type="email"
            placeholder="Please enter your email"
            name="email"
            required
            className="w-full p-3 border-[0.5px] outline-none focus:ring-2 focus:ring-phlox-pink border-gray-300 rounded-md bg-white/50 dark:bg-dark-hover/30 dark:border-white/80"
          />
        </div>
        <textarea
          rows={7}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-3 border-[0.5px] outline-none focus:ring-2 focus:ring-phlox-pink border-gray-300 rounded-md bg-white/50 dark:bg-dark-hover/30 dark:border-white/80"
        ></textarea>
        <button
          type="submit"
          className="w-max px-10 py-3 bg-black text-white rounded-full mx-auto flex items-center gap-2 hover:opacity-80 transition-opacity dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover"
        >
          Send Message
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-5">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
