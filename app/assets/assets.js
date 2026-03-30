import my_image from "./my-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import typscriptIcon from "./typescript-icon.svg";
import javascriptIcon from "./javascript-icon.png";
import reactIcon from "./react.svg";
import nextjsIcon from "./nextjs-icon.svg";
import slugify from "../utils/slugify";
import babsImage from "./babs-n-yusuf.png";
import eldoradoImage from "./eldorado-finance.png";
import naijapointers from "./naijapointers.png";
import gamehub from "./game-hub.png";
import clipVault from "./clip-vault.png";
import readByBarter from "./read-by-barter.png";
import eventoImage from "./evento.png";

export const assets = {
  my_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  typscriptIcon,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
};

export const workData = [
  {
    title: "Frontend projects",
    description: "Web Development",
    bgImage: "/game-hub.png",
    slug: "web-development",
  },
  {
    title: "Secondhand store",
    description: "Mobile App",
    bgImage: "/done-with-it.jpeg",
    slug: "",
  },
  {
    title: "Event booking site",
    description: "Web Development",
    bgImage: "/evento.png",
    slug: "",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
    slug: "",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web development",
    description: "The process of designing and programming web applications...",
    slug: slugify("Web development"),
  },

  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    slug: slugify("Mobile app"),
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    slug: slugify("UI/UX design"),
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.eng Mechatronics",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
  assets.reactIcon,
  assets.nextjsIcon,
  assets.typscriptIcon,
  assets.javascriptIcon,
];

export const works = {
  webDevelopment: {
    works: [
      {
        title: "Babs & Yusuf Proserv",
        description:
          "I developed a corporate website for Babs & Yusuf Proserv, showcasing their services and portfolio using modern frameworks and best practices. The project improved the company’s online user engagement by nearly 10% and enhanced overall brand visibility. Worked with FastAPI backend developers to integrate dynamic content and ensure seamless performance across devices.",
        webLink: "https://babs-n-yusuf-proser.com",
        technologies: ["React", "TypeScript", "MUI", "Postman"],
        gitLink: "https://github.com/Jesse-Aporah/Babs-N-Yusuf-Proserv",
        image: babsImage,
      },
      {
        title: "Evento",
        description:
          "Developed a modern event booking platform that allows users to discover, browse, and RSVP for local events with ease. Implemented responsive, mobile-first UI components using React and TypeScript, ensuring fast load times and consistent user experience across devices. Collaborated on state management and routing for seamless navigation, while integrating Formik for form handling and Tailwind for styling. The project enhances local event visibility and improves user engagement through an intuitive interface.",
        webLink: "https://evento-mu-two.vercel.app/",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Formik",
          "React Router",
          "Vite",
          "Vercel",
        ],
        gitLink: "https://github.com/Jesse-Aporah/evento",
        image: eventoImage,
      },
      {
        title: "Eldorado Finance",
        description:
          "Developed a responsive admin dashboard for a FinTech startup using React, TypeScript, and Material UI, integrating multiple REST APIs for real-time data visualization and admin control. Collaborated with Django backend engineers to optimize API consumption, reducing data fetch latency by ~25% and ensuring overall UI responsiveness.",
        webLink: "",
        technologies: ["React", "TypeScript", "MUI", "Postman"],
        gitLink: "https://github.com/Jesse-Aporah/eldorado-finance",
        image: eldoradoImage,
      },
      {
        title: "ClipVault",
        description:
          "Developed ClipVault, an AI-powered clipboard manager that intelligently captures, organizes, and enhances copied content in real time. Implemented features such as automatic categorization, search, and AI-driven summarization to improve productivity and streamline workflows. Built using modern frontend technologies with a focus on performance, scalability, and clean UI/UX, enabling users to efficiently manage and reuse clipboard data across tasks.",
        webLink: "",
        technologies: ["HTML", "CSS", "JavaScript"],
        gitLink: "https://github.com/Jesse-Aporah/ClipVault",
        image: clipVault,
      },
      {
        title: "Read By Barter",
        description:
          "Developed ReadByBarter, a community-driven web platform that enables users to borrow, buy, sell, and donate books locally. Implemented user-friendly interfaces for browsing listings, managing transactions, and facilitating seamless interactions between users. Built with modern frontend technologies, focusing on responsive design, efficient state management, and intuitive UX to enhance accessibility and promote knowledge sharing within communities.",
        webLink: "https://read-by-barter.vercel.app/",
        technologies: ["HTML", "Tailwind", "React"],
        gitLink: "https://github.com/Jesse-Aporah/ReadByBarter",
        image: readByBarter,
      },

      {
        title: "NaijaPionters",
        description:
          "Built a dynamic blogging platform for NaijaPionters using CSS3 and JavaScript, Built with  a focus on UI/UX design principles to ensure an engaging user experience.",
        webLink: "",
        technologies: ["HTML5", "CSS3", "React", "Postman"],
        gitLink: "https://github.com/Jesse-Aporah/NaijaPointers-.git",
        image: naijapointers,
      },
      {
        title: "GameHub",
        description:
          "Developed a gaming community website for GameHub using React & Chakra UI focusing on responsive design and interactive features to enhance user engagement.",
        webLink: "",
        technologies: ["React", "TypeScript", "Chakra UI", "React Query"],
        gitLink: "https://github.com/Jesse-Aporah/game-hub",
        image: gamehub,
      },
    ],
  },
  emailDevelopment: {
    works: [
      {
        title: "Babs & Yusuf Proserv",
        description:
          "I developed a corporate website for Babs & Yusuf Proserv, showcasing their services and portfolio using modern frameworks and best practices. The project improved the company’s online user engagement by nearly 10% and enhanced overall brand visibility. Worked with FastAPI backend developers to integrate dynamic content and ensure seamless performance across devices.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "MUI", "Vercel"],
        gitLink: "",
        image: "",
      },
      {
        title: "Eldorado Finance",
        description:
          "Developed a responsive admin dashboard for a FinTech startup using React, TypeScript, and Material UI, integrating multiple REST APIs for real-time data visualization and admin control. Collaborated with Django backend engineers to optimize API consumption, reducing data fetch latency by ~25% and ensuring overall UI responsiveness.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "MUI", "Postman"],
        gitLink: "",
        image: "",
      },

      {
        title: "NaijaPionters",
        description:
          "Built a dynamic blogging platform for NaijaPionters using CSS3 and JavaScript, Built with  a focus on UI/UX design principles to ensure an engaging user experience.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["HTML5", "CSS3", "React", "Postman"],
        gitLink: "",
        image: "",
      },
      {
        title: "GameHub",
        description:
          "Developed a gaming community website for GameHub using React & Chakra UI focusing on responsive design and interactive features to enhance user engagement.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "Chakra UI", "React Query"],
        gitLink: "",
        image: "",
      },
    ],
  },
  mobileApps: {
    works: [
      {
        title: "Babs & Yusuf Proserv",
        description:
          "I developed a corporate website for Babs & Yusuf Proserv, showcasing their services and portfolio using modern frameworks and best practices. The project improved the company’s online user engagement by nearly 10% and enhanced overall brand visibility. Worked with FastAPI backend developers to integrate dynamic content and ensure seamless performance across devices.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "MUI", "Vercel"],
        gitLink: "",
        image: babsImage,
        image: "",
      },
      {
        title: "Eldorado Finance",
        description:
          "Developed a responsive admin dashboard for a FinTech startup using React, TypeScript, and Material UI, integrating multiple REST APIs for real-time data visualization and admin control. Collaborated with Django backend engineers to optimize API consumption, reducing data fetch latency by ~25% and ensuring overall UI responsiveness.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "MUI", "Postman"],
        gitLink: "",
        image: "",
      },
      {
        title: "NaijaPionters",
        description:
          "Built a dynamic blogging platform for NaijaPionters using CSS3 and JavaScript, Built with  a focus on UI/UX design principles to ensure an engaging user experience.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["HTML5", "CSS3", "React", "Postman"],
        gitLink: "",
        image: "",
      },
      {
        title: "GameHub",
        description:
          "Developed a gaming community website for GameHub using React & Chakra UI focusing on responsive design and interactive features to enhance user engagement.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "Chakra UI", "React Query"],
        gitLink: "",
        image: "",
      },
    ],
  },
  uiUxDesign: {
    works: [
      {
        title: "Babs & Yusuf Proserv",
        description:
          "I developed a corporate website for Babs & Yusuf Proserv, showcasing their services and portfolio using modern frameworks and best practices. The project improved the company’s online user engagement by nearly 10% and enhanced overall brand visibility. Worked with FastAPI backend developers to integrate dynamic content and ensure seamless performance across devices.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "MUI", "Vercel"],
        gitLink: "",
        image: "",
      },
      {
        title: "Eldorado Finance",
        description:
          "Developed a responsive admin dashboard for a FinTech startup using React, TypeScript, and Material UI, integrating multiple REST APIs for real-time data visualization and admin control. Collaborated with Django backend engineers to optimize API consumption, reducing data fetch latency by ~25% and ensuring overall UI responsiveness.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "MUI", "Postman"],
        gitLink: "",
        image: "",
      },
      {
        title: "NaijaPionters",
        description:
          "Built a dynamic blogging platform for NaijaPionters using CSS3 and JavaScript, Built with  a focus on UI/UX design principles to ensure an engaging user experience.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["HTML5", "CSS3", "React", "Postman"],
        gitLink: "",
        image: "",
      },
      {
        title: "GameHub",
        description:
          "Developed a gaming community website for GameHub using React & Chakra UI focusing on responsive design and interactive features to enhance user engagement.",
        webLink: "https://babsandyusufproserv.com",
        technologies: ["React", "TypeScript", "Chakra UI", "React Query"],
        gitLink: "",
        image: "",
      },
    ],
  },
};
