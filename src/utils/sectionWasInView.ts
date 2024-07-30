import ReactGA from "react-ga4";

export const sectionWasInView = (sectionName: string) => {
  ReactGA.event({
    category: "section",
    action: "Was in view",
    label: sectionName,
  });
};
