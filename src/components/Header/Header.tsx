"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "../Icon";
import { HeaderNavList } from "@/constants/globalConstants";
import { useEffect, useState } from "react";
import { BurgerMenu } from "../BurgerMenu";
import bgEllipse from "../../assets/images/bg/ellipseHeader.webp";
import { CalendlyButton } from "../CalendlyButton";

const Header = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [buttonCalendly, setButtonCalendly] = useState<boolean>(false);

  useEffect(() => {
    setButtonCalendly(true);
  }, []);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleActiveSection = (ref: string) => {
    setActiveSection(ref);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex fixed z-20 top-0 left-0" id="main">
      {!isScrolled && (
        <div className="absolute w-full h-[348%] top-[-219%] xl:top-[-138%] left-0 z-[-1]">
          <Image
            src={bgEllipse}
            alt="ellipse header"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <header
        className={`py-[27px] md:pt-[33px] md:pb-[41px] lg:py-[18px] xl:py-[15px] w-[100vw]
           ${isScrolled ? "bg-[#050A1B] headerShadow" : ""}
        `}
      >
        <div className="container flex gap-[19px] items-center justify-between xl:justify-between">
          <Link
            href="#main"
            aria-label="Main"
            onClick={() => handleActiveSection("#main")}
          >
            <Icon
              name="icon-logo"
              size={"0px"}
              className="cursor-pointer xl:w-[96px] xl:h-[35px] w-[122px] h-[45px] md:w-[141px] md:h-[51px] lg:w-[179px] lg:h-[66px]"
            />
          </Link>
          <nav className="hidden xl:flex">
            <ul className="flex gap-[15px] flex-row">
              {HeaderNavList.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer relative group`}
                  onClick={() => handleActiveSection(item.ref)}
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
          {/* <div className="hidden xl:flex">
            <ChangeLanguage />
          </div> */}
          <div className="hidden xl:flex">
            {buttonCalendly && (
              <CalendlyButton
                url="https://calendly.com/lasertag_net/30min"
                btnText={t("header.textBtn")}
              />
            )}
          </div>
          <Icon
            name="icon-burger"
            width={38}
            height={25}
            onClick={handleOpenMenu}
            className="xl:hidden cursor-pointer"
          />
        </div>
      </header>
      {isOpenMenu && (
        <BurgerMenu isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
      )}
    </div>
  );
};

export default Header;
