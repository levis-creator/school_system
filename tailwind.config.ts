import { exit } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        entrance: {
          " 0%": {
            opacity: "0",
            transform: "translateX(-250px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        exit: {
          "0%": {
            transform: "translateX(10)",
          },

          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        entrance: "entrance 1s ease 0s 1 normal forwards",
        exit: "exit 1s ease-out 0s 1 normal forwards;",
      },
    },
  },
  plugins: [],
};
export default config;
