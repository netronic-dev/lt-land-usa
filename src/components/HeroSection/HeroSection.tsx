"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { PrimaryButton } from "../PrimaryButton";
import animationCircleImg from "../../assets/images/animationCircle.png";
import {
  HeroSliderBtnsList,
  HeroSliderImagesList,
} from "@/constants/globalConstants";
import imgShadow from "../../assets/images/imgShadow.webp";
import { useModals } from "@/context/ModalsProvider";

const HeroSection = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(528);
  const modals = useModals();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === HeroSliderImagesList.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 1512) {
        setSlideWidth(528);
      } else if (window.innerWidth >= 1024) {
        setSlideWidth(436);
      } else if (window.innerWidth >= 744) {
        setSlideWidth(320);
      } else {
        setSlideWidth(305);
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  return (
    <section className="pt-[80px] pb-[38px] md:pb-[155px]">
      <div className="container flex flex-col items-center md:flex-row justify-center md:justify-between overflow-hidden">
        <div>
          <h1 className="xl:text-[66px] xl:max-w-[411px] lg:text-[56px] lg:leading-[69px] lg:max-w-[352px] md:max-w-[306px] md:px-0 px-[20px] mb-[4px] lg:mb-[19px] text-[var(--primary-text-color)] text-[46px] font-manrope font-extrabold text-center md:text-start leading-[57px]">
            {t("heroSection.title.title")} <br />
            <span className="text-[var(--accent-color)]">
              {t("heroSection.title.titleSpan")}
            </span>
          </h1>
          <p className="lg:max-w-[403px] md:max-w-[315px] md:px-0 px-[20px] lg:mb-[51px] mb-[40px] text-[var(--primary-text-color)] text-[25px] lg:text-[35px] font-manrope text-center md:text-start">
            {t("heroSection.text")}
          </p>
          <div className="flex justify-center mb-[58px] md:mb-0 md:justify-start">
            <PrimaryButton
              type="button"
              size="large"
              onClick={modals.formConsultationChangeVisibility}
            >
              {t("heroSection.textBtn")}
            </PrimaryButton>
          </div>
        </div>
        <div className={`relative`}>
          <div
            className={classNames(
              "rounded-full w-[176px] h-[176px] absolute z-10 transition-all duration-500 ease-in-out",
              {
                "top-[-17px] right-[-18%] lg:top-0 lg:right-[-8%] xl:top-[1%] xl:right-[-2%]":
                  activeIndex === 0,
                "right-[-27%] top-[74px] md:right-[-88px] lg:top-[130px] lg:right-[-19%] xl:top-[181px] xl:right-[-16%]":
                  activeIndex === 1,
                "bottom-[-29px] right-[-15%] lg:bottom-[-23px] lg:right-[-5%] xl:bottom-[-1%] xl:right-[-1%]":
                  activeIndex === 2,
                "bottom-[-29px] left-[-15%] lg:bottom-[-23px] lg:left-[-5%] xl:bottom-[-1%] xl:left-[-1%]":
                  activeIndex === 3,
                "top-[-17px] left-[-18%] lg:top-0 lg:left-[-8%] xl:top-[1%] xl:left-[-2%]":
                  activeIndex === 4,
              }
            )}
          >
            <Image
              src={animationCircleImg}
              alt="Animation-circle"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div
            className={`bg-[transparent] flex justify-center relative w-[328px] h-[328px] lg:w-[462px] lg:h-[462px] xl:w-[568px] xl:h-[568px] rounded-full border-[1px] border-solid border-[var(--accent-color)] overflow-hidden`}
          >
            <div className="absolute top-[-44px] xl:top-[-76px] left-[-15%] w-[133%] h-[124%] transition-all duration-500 ease-in-out">
              <Image
                src={imgShadow}
                alt="img-shadow"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <ul
              className={`rounded-full flex items-center justify-start gap-[38px] transition-transform duration-500 ml-[374%] md:ml-[393%] lg:ml-[379%] xl:ml-[374%]`}
            >
              {HeroSliderImagesList.map((item) => (
                <li
                  className={`shrink-0 rounded-full relative min-w-[267px] w-[267px] h-[267px] lg:min-w-[398px] lg:w-[398px] lg:h-[398px] md:w-[282px] md:h-[282px] xl:w-[489px] xl:min-w-[489px] transition-all xl:h-[489px]`}
                  key={item.id}
                  style={{
                    transform: `translateX(-${activeIndex * slideWidth}px)`,
                  }}
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center gap-2 absolute bottom-[50px] left-[50%] translate-x-[-50%]">
              {HeroSliderBtnsList.map((item) => (
                <li
                  className={`w-[9px] h-[9px] rounded-full cursor-pointer transition-all
                    ${
                      item.id === activeIndex
                        ? "bg-[var(--accent-color)]"
                        : "bg-[#2A3251]"
                    }
                  `}
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
