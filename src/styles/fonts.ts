import localFont from "next/font/local";

export const manropeFont = localFont({
  src: [
    {
      path: "../assets/fonts/Manrope-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Manrope-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});
