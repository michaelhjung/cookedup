import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cinerous: "#92817A",
        "pastel-brown": "#E3CDB3",
        "pastel-green": "#84CACF",
        "pastel-orange": "#FAB4AF",
        "pastel-yellow": "#FFF9A7",
      },
      keyframes: {
        "toss-bowl": {
          "0%, 100%": { transform: "rotate(0deg) translateY(0)" },
          "35%": { transform: "rotate(-12deg) translateX(-5px)" },
          "45%": {
            transform: "rotate(10deg) translateX(-5px) translateY(-2px)",
          },
          "75%": { transform: "translateX(0px)" },
        },
        "toss-bowl-contents": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "35%": { transform: "rotate(-7deg) translateX(-5px)" },
          "55%": {
            transform: "rotate(25deg) translateX(-5px) translateY(-12px)",
          },
        },
      },
      animation: {
        bowl: "toss-bowl 1.75s ease-in-out infinite",
        veggies: "toss-bowl-contents 1.75s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
