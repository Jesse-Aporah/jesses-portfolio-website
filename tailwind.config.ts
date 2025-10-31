// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "2a004a",
        darkTheme: "#11001f",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        ovo: ["ovo", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
