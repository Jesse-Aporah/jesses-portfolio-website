import { assets, workData } from "../assets/assets";
import Image from "next/image";
const Works = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div id="works" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo"> My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Works</h2>
      <p className="text-center max-w-2xl mx-auto font-ovo mt-5 mb-12">
        Welcome to my web development portfolio! Each project reflects my
        commitment to crafting intuitive, performant, and visually engaging web
        experiences. With responsive Layout and seamless API Integration.
      </p>

      <div className="grid grid-auto my-10 gap-8 dark:text-black">
        {workData.map(({ bgImage, title, description }, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md p-3 absolute bottom-5 left-1/2 -translate-x-1/2  transition-translate flex justify-between items-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transistion">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-auto hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover"
      >
        Show More{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Works;
