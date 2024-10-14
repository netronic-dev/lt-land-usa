// export const pageView = (GA_MEASUREMENT_ID, url) => {
//   if (typeof window !== "undefined" && window.gtag) {
//     window.gtag("config", GA_MEASUREMENT_ID, {
//       page_path: url,
//     });
//   }
// };

export const pageView = (GA_MEASUREMENT_ID, url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
