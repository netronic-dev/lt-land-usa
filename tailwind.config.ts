import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "744px",
      lg: "1024px",
      xl: "1512px",
    },
    extend: {
      colors: {
        accent: "rgba(105, 172, 247, 0.30)",
      },
      fontFamily: {
        manrope: ['"manrope"', ...defaultTheme.fontFamily.sans],
        roboto: ['"roboto"', ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        blue: "0px 0px 4px #0090FF",
        blueTwo: "0px 0px 20px 0px #0090FF",
        bigCircle:
          "0px 0px 250px 0px rgba(0, 144, 255, 0.80), 0px 0px 50px 0px #000 inset",
        headerShadow: "0px 10px 10px 0px rgba(0, 144, 255, 0.30)",
      },
      backgroundImage: {
        "welcome-hero-mobile": "url('/bg/welcomeBgMobile.webp')",
        "welcome-hero-mobile-big": "url('/bg/welcomeBgMobileBig.webp')",
        "welcome-hero-tablet": "url('/bg/welcomeBgTablet.webp')",
        "welcome-hero-desktop": "url('/bg/welcomeBgDesktop.webp')",
        "partnership-mobile": "url('/bg/partnershipBgMobile.webp')",
        "partnership-tablet": "url('/bg/partnershipBgTablet.webp')",
        "partnership-tablet-big": "url('/bg/partnershipBgTabletBig.webp')",
        "partnership-desktop": "url('/bg/partnershipBgDesktop.webp')",
        "forward-mobile": "url('/bg/forwardBgMobile.webp')",
        "forward-tablet": "url('/bg/forwardBgTablet.webp')",
        "forward-desktop": "url('/bg/forwardBgDesktop.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
