"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { HeaderNavList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import bgEllipse from "../../assets/images/bg/ellipseHeader.webp";
import { useIsTablet } from "@/hooks";
import { CalendlyButton } from "../CalendlyButton";

interface IBurger {
  isOpenMenu: boolean;
  handleOpenMenu: () => void;
}

const BurgerMenu: FC<IBurger> = ({ isOpenMenu, handleOpenMenu }) => {
  const { t } = useTranslation();
  const isTablet = useIsTablet();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [tabletStyles, setTabletStyles] = useState<boolean>(false);
  const [buttonCalendly, setButtonCalendly] = useState<boolean>(false);

  useEffect(() => {
    setTabletStyles(isTablet);
    setButtonCalendly(true);
  }, [isTablet]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    handleOpenMenu();
  };

  const handleActiveSection = (ref: string) => {
    setActiveSection(ref);
    handleOpenMenu();
  };

  return (
    <div className="overflow-x-hidden flex flex-col items-center absolute top-0 left-0 w-full h-screen bg-[var(--primary-bg-color)] z-20 py-[27px] md:pt-[33px] md:pb-[41px] lg:py-[18px]">
      <div className="container w-full flex justify-center lg:justify-between items-center relative">
        <div className="absolute w-[128%] h-[348%] lg:h-[472%] top-[-219%] xl:top-[-136%] left-[-17%] z-[-1]">
          <Image
            src={bgEllipse}
            alt="ellipse header"
            layout="fill"
            objectFit="cover"
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
        </div>
        {tabletStyles ? (
          <Icon
            name="icon-logo"
            size={"0px"}
            className=" w-[180px] h-[66px] md:w-[179px]"
          />
        ) : (
          <div className="flex-1 flex justify-center">
            <Icon
              name="icon-logo"
              size={"0px"}
              className="w-[180px] h-[66px] md:w-[179px]"
            />
          </div>
        )}
        <Icon
          name="icon-cross"
          width={27}
          height={27}
          onClick={handleClick}
          className="cursor-pointer ml-auto text-[#fff]"
        />
      </div>
      <nav>
        <ul className="flex flex-col items-center pt-[39px] md:pt-[59px] gap-[30px] md:mb-[30px] lg:gap-[26px] lg:mb-[26px] lg:pt-[10px]">
          {HeaderNavList.map((item) => (
            <li
              onClick={() => handleActiveSection(item.ref)}
              key={item.id}
              className="cursor-pointer relative group"
            >
              <Link
                href={item.ref}
                aria-label={item.name}
                className="text-[var(--primary-text-color)] font-manrope text-[21px] font-medium xl:text-[14px] transition-all group-hover:text-shadow-blue"
              >
                {t(`header.navList.${item.value}`)}
              </Link>
              <span
                className={`${
                  item.ref === activeSection ? "w-full" : "w-0"
                } block h-[2px] bg-[var(--primary-text-color)] absolute bottom-[-2px] left-0 transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="hidden md:block">
        <ChangeLanguage width={tabletStyles ? "279px" : "273px"} />
      </div> */}
      <div className="mt-[42px] md:mt-[23px] lg:mt-[51px]">
        {buttonCalendly && (
          <CalendlyButton
            url="https://calendly.com/lasertag_net/30min"
            btnText={t("header.textBtn")}
          />
        )}
      </div>
      {/* <ChangeLanguageMobile /> */}
    </div>
  );
};

export default BurgerMenu;
