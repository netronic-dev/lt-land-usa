import { StaticImageData } from "next/image";
import heroSliderImageOne from "../assets/images/laserTagWorld-one.webp";
import heroSliderImageTwo from "../assets/images/laserTagWorld-two.webp";
import heroSliderImageThree from "../assets/images/laserTagWorld-three.webp";
import heroSliderImageFour from "../assets/images/laserTagWorld-four.webp";
import heroSliderImageFive from "../assets/images/laserTagWorld-five.webp";
import reviewImgOne from "../assets/images/review-one.webp";
import reviewImgTwo from "../assets/images/review-two.webp";
import reviewImgThree from "../assets/images/review-three.webp";
import reviewImgFour from "../assets/images/review-four.webp";
import checkOutImgTopOne from "../assets/images/falconF1.webp";
import checkOutImgTopOneMobile from "../assets/images/falconF1Mobile.webp";
import checkOutImgTopTwo from "../assets/images/falconF2.webp";
import checkOutImgTopTwoMobile from "../assets/images/falconF2Mobile.webp";
import checkOutImgTopThree from "../assets/images/falconLux.webp";
import checkOutImgTopThreeMobile from "../assets/images/falconLuxMobile.webp";
import checkOutImgTopFour from "../assets/images/galaxyEclipse.webp";
import checkOutImgTopFourMobile from "../assets/images/galaxyEclipseMobile.webp";
import checkOutImgBottomOne from "../assets/images/netronicHeadband.webp";
import checkOutImgBottomTwo from "../assets/images/netronicVest.webp";
import checkOutImgBottomThree from "../assets/images/scorpionShockBand.webp";
import checkOutImgBottomFour from "../assets/images/sirius.webp";
import checkOutImgBottomFive from "../assets/images/multistation.webp";
import checkOutImgBottomSix from "../assets/images/smartDominationBox.webp";
import checkOutImgBottomSeven from "../assets/images/supernovaLaserTagBomb.webp";
import checkOutImgBottomEight from "../assets/images/nebulaLaserTagGranade.webp";
import comprehensiveBusinessImgOne from "../assets/images/businessSupport-three.webp";
import comprehensiveBusinessImgTwo from "../assets/images/businessSupport-two.webp";
import comprehensiveBusinessImgThree from "../assets/images/businessSupport-one.webp";
import diverseGameplayImgTwo from "../assets/images/diverseGameplay-two.webp";
import diverseGameplayImgThree from "../assets/images/diverseGameplay-three.webp";
import partnershipImgOne from "../assets/images/project-one.webp";
import partnershipImgTwo from "../assets/images/project-two.webp";
import partnershipImgThree from "../assets/images/project-three.webp";
import partnershipImgFour from "../assets/images/project-four.webp";

interface IHeaderNavList {
  name: string;
  value: string;
  id: number;
  ref: string;
}

export interface ILanguages {
  value: string;
  label: string;
}

export interface ISelectBudgetOptions {
  value: string;
  label: string;
}

export interface IInfoFooterList {
  id: number;
  country?: string;
  title?: string;
  address?: string;
  phone: string;
  whatsappLink?: string;
}

interface INetworksList {
  id: number;
  iconName: string;
  url: string;
}

interface IHeroSliderImagesList {
  id: number;
  url: StaticImageData;
  alt: string;
}

interface IWhySectionList {
  id: number;
  icon: string;
  title?: string;
  spanTitle?: string;
  description?: string;
}

interface IPopularityAndDemandList {
  id: number;
  icon: string;
  description?: string;
}

export interface ICustomerReviewsList {
  id: number;
  // image: StaticImageData;
  image: string;
  url: string;
  alt: string;
}

interface ICheckOutList {
  id: number;
  image: StaticImageData;
  imageMobile?: StaticImageData;
  alt: string;
}

interface IDiverseGameplayList {
  id: number;
  image?: StaticImageData;
  alt?: string;
}

export interface IQualityAndReliabilityList {
  id: number;
  iconName: string;
  title?: string;
  description?: string;
}

interface IBusinessSupportSectionImgList {
  id: number;
  image: StaticImageData;
  alt: string;
}

interface IOptimizingReturnsList {
  id: number;
  icon: string;
}

interface IPartnershipImagesList {
  id: number;
  image: StaticImageData;
  alt: string;
}

interface IDiverseGameplayListInside {
  id: number;
  icon: string;
}

export const LANGUAGES: ILanguages[] = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "de",
    label: "DE",
  },
  {
    value: "fr",
    label: "FR",
  },
  {
    value: "es",
    label: "ES",
  },
];

export const HeaderNavList: IHeaderNavList[] = [
  // {
  //   name: "Why laser tag equipment",
  //   value: "why",
  //   id: 0,
  //   ref: "#why",
  // },
  {
    name: "About Us",
    value: "about",
    id: 0,
    ref: "#about",
  },
  {
    name: "Profitability",
    value: "profitability",
    id: 1,
    ref: "#profitability",
  },
  {
    name: "Products",
    value: "products",
    id: 2,
    ref: "#products",
  },
  {
    name: "Quality",
    value: "quality",
    id: 3,
    ref: "#quality",
  },
  // {
  //   name: "Support",
  //   value: "support",
  //   id: 4,
  //   ref: "#support",
  // },
  {
    name: "Test drive",
    value: "testDrive",
    id: 4,
    ref: "#test-drive",
  },
  {
    name: "Partnership",
    value: "partnership",
    id: 5,
    ref: "#partnership",
  },
  {
    name: "Contact Us",
    value: "contact",
    id: 6,
    ref: "#contact",
  },
];

export const InfoFooterList = [
  {
    id: 0,
    country: "USA",
    address: "3259 Progress Drive STE 175С Orlando, FL 32826",
    phone: "+1-561-765-75-46",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=15617657546&text&type=phone_number&app_absent=0",
  },
  {
    id: 1,
    country: "EUROPE",
    address: "Kaupmehe tn 7-120 Tallinn Harjumaa 10114 Republic of Estonia",
    phone: "+372-5368-3353",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=37253683353&text&type=phone_number&app_absent=0",
  },
  {
    id: 3,
    title: "Technical support",
    phone: "+37-5855-4490",
    whatsappLink:
      "https://api.whatsapp.com/send/?phone=37258554490&text&type=phone_number&app_absent=0",
  },
];

export const NetworksList: INetworksList[] = [
  {
    id: 0,
    iconName: "icon-facebook",
    url: "https://www.facebook.com/lasertagnet",
  },
  {
    id: 1,
    iconName: "icon-instagram",
    url: "https://www.instagram.com/lasertag_net/",
  },
  {
    id: 2,
    iconName: "icon-youtube",
    url: "https://www.youtube.com/channel/UCfQUCL7EoD5vjO1dTmKWAqw",
  },
  {
    id: 3,
    iconName: "icon-linkedin",
    url: "https://www.linkedin.com/company/lasertagnet/",
  },
  {
    id: 4,
    iconName: "icon-tiktok",
    url: "https://www.tiktok.com/@lasertag_usa",
  },
];

export const HeroSliderImagesList: IHeroSliderImagesList[] = [
  {
    id: 0,
    url: heroSliderImageOne,
    alt: "heroSliderImageOne",
  },
  {
    id: 1,
    url: heroSliderImageTwo,
    alt: "heroSliderImageTwo",
  },
  {
    id: 2,
    url: heroSliderImageThree,
    alt: "heroSliderImageThree",
  },
  {
    id: 3,
    url: heroSliderImageFour,
    alt: "heroSliderImageFour",
  },
  {
    id: 4,
    url: heroSliderImageFive,
    alt: "heroSliderImageFive",
  },
];

export const WhySectionListMeta: IWhySectionList[] = [
  {
    id: 0,
    icon: "icon-versatility",
  },
  {
    id: 1,
    icon: "icon-repeat",
  },
  {
    id: 2,
    icon: "icon-technology-integration",
  },
  {
    id: 3,
    icon: "icon-groups",
  },
  {
    id: 4,
    icon: "icon-low-costs",
  },
  {
    id: 5,
    icon: "icon-community",
  },
];

export const PopularityAndDemandList: IPopularityAndDemandList[] = [
  {
    id: 0,
    icon: "icon-arrow-top-right",
  },
  {
    id: 1,
    icon: "icon-cash",
  },
  {
    id: 2,
    icon: "icon-low-costs",
  },
  {
    id: 3,
    icon: "icon-building",
  },
  {
    id: 4,
    icon: "icon-sheet-from-list",
  },
  {
    id: 5,
    icon: "icon-calculator",
  },
  {
    id: 6,
    icon: "icon-low-costs",
  },
  {
    id: 7,
    icon: "icon-counter-money",
  },
  {
    id: 8,
    icon: "icon-family",
  },
  {
    id: 9,
    icon: "icon-arrow-bottom-left",
  },
];

export const CustomerReviewsList: ICustomerReviewsList[] = [
  {
    id: 0,
    // image: reviewImgOne,
    image: "/public/review-one.webp",
    url: "https://www.youtube.com/watch?v=SCeoOnjKmMY&t=2s",
    alt: "Customer Review One",
  },
  {
    id: 1,
    // image: reviewImgTwo,
    image: "/public/review-two.webp",
    url: "https://www.youtube.com/watch?v=Fd9_F5lmOYg",
    alt: "Customer Review Two",
  },
  {
    id: 2,
    // image: reviewImgThree,
    image: "/public/review-three.webp",
    url: "https://www.youtube.com/watch?v=VGkBFgFQ8aw&t=185s",
    alt: "Customer Review Three",
  },
  {
    id: 3,
    // image: reviewImgFour,
    image: "/public/review-four.webp",
    url: "https://www.youtube.com/watch?v=_rDLoxRwkRg",
    alt: "Customer Review Four",
  },
];

export const CheckOutTopList: ICheckOutList[] = [
  {
    id: 0,
    image: checkOutImgTopOne,
    imageMobile: checkOutImgTopOneMobile,
    alt: "CheckOutImgTopOne",
  },
  {
    id: 1,
    image: checkOutImgTopTwo,
    imageMobile: checkOutImgTopTwoMobile,
    alt: "CheckOutImgTopTwo",
  },
  {
    id: 2,
    image: checkOutImgTopThree,
    imageMobile: checkOutImgTopThreeMobile,
    alt: "CheckOutImgTopThree",
  },
  {
    id: 3,
    image: checkOutImgTopFour,
    imageMobile: checkOutImgTopFourMobile,
    alt: "CheckOutImgTopFour",
  },
];

export const CheckOutBottomList: ICheckOutList[] = [
  {
    id: 0,
    image: checkOutImgBottomOne,
    alt: "CheckOutImgBottomOne",
  },
  {
    id: 1,
    image: checkOutImgBottomTwo,
    alt: "CheckOutImgBottomTwo",
  },
  {
    id: 2,
    image: checkOutImgBottomThree,
    alt: "CheckOutImgBottomThree",
  },
  {
    id: 3,
    image: checkOutImgBottomFour,
    alt: "CheckOutImgBottomFour",
  },
  {
    id: 4,
    image: checkOutImgBottomFive,
    alt: "CheckOutImgBottomFive",
  },
  {
    id: 5,
    image: checkOutImgBottomSix,
    alt: "CheckOutImgBottomSix",
  },
  {
    id: 6,
    image: checkOutImgBottomSeven,
    alt: "CheckOutImgBottomSeven",
  },
  {
    id: 7,
    image: checkOutImgBottomEight,
    alt: "CheckOutImgBottomEight",
  },
];

export const QualityAndReliabilityList: IQualityAndReliabilityList[] = [
  {
    id: 0,
    iconName: "icon-child-friendly-equipment",
  },
  {
    id: 1,
    iconName: "icon-scenario-editing-software",
  },
  {
    id: 2,
    iconName: "icon-scenario-editing-software",
  },
  {
    id: 3,
    iconName: "icon-patented-innovation",
  },
  {
    id: 4,
    iconName: "icon-cutting-edge-technology",
  },
  {
    id: 5,
    iconName: "icon-real-time-online-statistics",
  },
  {
    id: 6,
    iconName: "icon-durable-construction",
  },
  {
    id: 7,
    iconName: "icon-scenario-editing-software",
  },
  {
    id: 8,
    iconName: "icon-durable-construction",
  },
];

export const BusinessSupportSectionImgList: IBusinessSupportSectionImgList[] = [
  {
    id: 0,
    image: comprehensiveBusinessImgOne,
    alt: "Comprehensive Business Img One",
  },
  {
    id: 1,
    image: comprehensiveBusinessImgTwo,
    alt: "Comprehensive Business Img Two",
  },
  {
    id: 2,
    image: comprehensiveBusinessImgThree,
    alt: "Comprehensive Business Img Three",
  },
];

export const DiverseGameplayList: IDiverseGameplayList[] = [
  {
    id: 0,
  },
  {
    id: 1,
    image: diverseGameplayImgTwo,
    alt: "Diverse Gameplay Img Two",
  },
  {
    id: 2,
    image: diverseGameplayImgThree,
    alt: "Diverse Gameplay Img Three",
  },
];

export const DiverseGameplayListInside: IDiverseGameplayListInside[] = [
  {
    id: 0,
    icon: "icon-team-game",
  },
  {
    id: 1,
    icon: "icon-capture-the-flag",
  },
  {
    id: 2,
    icon: "icon-standard-scenario",
  },
  {
    id: 3,
    icon: "icon-ctf-capture-all",
  },
  {
    id: 4,
    icon: "icon-ctf-capture-all-two",
  },
  {
    id: 5,
    icon: "icon-battle-royal",
  },
  {
    id: 6,
    icon: "icon-base-capture",
  },
  {
    id: 7,
    icon: "icon-ctf-race-against-time",
  },
];

export const OptimizingReturnsList: IOptimizingReturnsList[] = [
  {
    id: 0,
    icon: "icon-cash",
  },
  {
    id: 1,
    icon: "icon-expenses",
  },
  {
    id: 2,
    icon: "icon-revenue-projections",
  },
];

export const PartnershipImagesList: IPartnershipImagesList[] = [
  {
    id: 0,
    image: partnershipImgOne,
    alt: "Partnership Img One",
  },
  {
    id: 1,
    image: partnershipImgTwo,
    alt: "Partnership Img Two",
  },
  {
    id: 2,
    image: partnershipImgThree,
    alt: "Partnership Img Three",
  },
  {
    id: 3,
    image: partnershipImgFour,
    alt: "Partnership Img Four",
  },
];

export const selectBudgetOptions: ISelectBudgetOptions[] = [
  { value: "$10,000 - $20,000", label: "$10,000 - $20,000" },
  { value: "$20,000 - $30,000", label: "$20,000 - $30,000" },
  { value: "more than $30,000", label: "more than $30,000" },
];

export const HeroSliderBtnsList = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];
