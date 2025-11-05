import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";

export const storyScript = localFont({
  src: [
    {
      path: "./assets/fonts/StoryScript-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-story-script",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aporah's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${storyScript.variable} ${outfit.className} ${ovo.className} antialiased leading-8 overflow-x dark:bg-dark-theme dark:text-white`}
      >
      <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
