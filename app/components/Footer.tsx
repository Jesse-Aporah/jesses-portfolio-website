import Image from "next/image";

import { assets } from "../assets/assets";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top" className="text-4xl font-bold font-story-script">
          JESSE <span className="text-red-600">.</span>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-4"
          />
          jesseaporah6@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex justify-between items-center mt-10 px-10 py-6 border-t border-gray-300 mx-[10%]">
        <p> &copy; 2025 Jesse Aporah. All rights reserved.</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Jesse-Aporah" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/jesseaporah" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
