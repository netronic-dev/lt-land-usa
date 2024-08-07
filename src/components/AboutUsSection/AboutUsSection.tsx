"use client";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Image from "next/image";
import { Icon } from "../Icon";
import ellipseBgAboutUs from "../../assets/images/bg/ellipseBgAboutUs.webp";
import style from "./style.module.scss";
import { useIntersectionObserver } from "@/hooks";

const AboutUsSection = () => {
  const { t } = useTranslation();
  const itemOneRef = useRef(null);
  const itemTwoRef = useRef(null);
  const itemThreeRef = useRef(null);
  const itemFourRef = useRef(null);

  useIntersectionObserver(
    [itemOneRef, itemTwoRef, itemThreeRef, itemFourRef],
    { threshold: 0.1 },
    style.appear
  );

  return (
    <section
      id="about"
      className="overflow-hidden pt-[69px] pb-[74px] md:pb-[99px] xl:pb-[97px] relative overflow-x-hidden"
    >
      <div className="absolute w-[160%] xl:h-[95%] xl:w-[99%] h-[22%] md:h-[38%] md:w-[147%] md:top-[123px] md:right-[-98%] top-[52%] right-[-102%] lg:h-[64%] xl:top-[33px] lg:top-[123px] lg:right-[-74%] lg:w-[104%] xl:right-[-65%] z-[-1]">
        <Image
          src={ellipseBgAboutUs}
          alt="ellipseBg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container lg:flex lg:items-center lg:justify-between">
        <div className="lg:max-w-[442px] xl:min-w-[530px]">
          <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold mb-[20px] md:mb-[38px] lg:mb-[41px]">
            {t("aboutUsSection.title")}
          </h2>
          <p className="max-w-[278px] md:max-w-[371px] text-[var(--primary-text-color)] font-manrope text-[16px] font-extrabold md:mb-[16px] mb-[26px] lg:mb-[39px]">
            {t("aboutUsSection.subtitle")}
          </p>
          <p className="text-[var(--primary-text-color)] font-manrope text-[18px] mb-[43px] lg:mb-[41px] md:mb-[50px] xl:mb-[24px] xl:max-w-[530px]">
            {t("aboutUsSection.description")}
          </p>
          <div className="flex items-center md:gap-[41px] justify-between md:justify-start md:items-start lg:gap-[21px]">
            <p className="max-w-[217px] md:max-w-[344px] text-[var(--primary-text-color)] font-manrope text-[23px] font-bold xl:max-w-[377px]">
              {t("aboutUsSection.bottomText.text")}{" "}
              <span className="text-[var(--accent-color)]">
                {t("aboutUsSection.bottomText.textSpan")}
              </span>
            </p>
            <a
              href="https://www.youtube.com/watch?v=JkCltZm1kb4"
              target="_blank"
              rel="noreferrer"
              className="relative transition-all cursor-pointer w-[81px] h-[81px] xl:w-[77px] xl:h-[77px] flex items-center justify-center rounded-[50%] border-solid border-[1px] border-[var(--primary-text-color)] bg-[#050A1B] hover:bg-[var(--accent-color)]"
            >
              <Icon
                name="icon-play"
                width={24}
                height={21}
                color="var(--primary-text-color)"
              />
              <div
                className={`${style.circle} w-[121px] h-[121px] rounded-full flex items-center justify-center shrink-0 border-solid border-[1px] border-[#656565]`}
              >
                <div
                  className={`${style.circle} w-[109px] h-[109px] rounded-full flex items-center justify-center shrink-0 border-solid border-[1px] border-[#656565]`}
                >
                  <div
                    className={`${style.circle} w-[97px] h-[97px] rounded-full border-solid border-[1px] border-[var(--primary-text-color)] flex items-center justify-center shrink-0`}
                  ></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <ul className="mt-[99px] lg:mt-0 flex items-center flex-wrap justify-center md:mt-[80px] lg:justify-end xl:max-w-[700px]">
          <li
            ref={itemOneRef}
            className={`${style.itemOne} flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
          >
            <Icon
              className="w-[92px] h-[32px] md:w-[188px] md:h-[66px] lg:w-[132px] lg:h-[51px] xl:w-[139px] xl:h-[46px]"
              name="icon-logo"
              size={"0px"}
            />
          </li>
          <li
            ref={itemTwoRef}
            className={`${style.itemTwo} ml-[-20px] md:ml-[-30px] px-[37px] py-[77px] flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
          >
            <Icon
              className="w-[104px] h-[66px] md:w-[213px] md:h-[136px] lg:w-[149px] lg:h-[95px] xl:w-[158px] xl:h-[100px]"
              name="icon-galaxy"
              size={"0px"}
            />
          </li>
          <li
            ref={itemFourRef}
            className={`${style.itemFour} mt-[-15px] md:mt-[-20px] px-[37px] py-[77px] flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
          >
            <Icon
              className="w-[103px] h-[20px] md:w-[211px] md:h-[41px] lg:w-[148px] lg:h-[28px] xl:w-[156px] xl:h-[38px]"
              name="icon-airbunker"
              size={"0px"}
            />
          </li>
          <li
            ref={itemThreeRef}
            className={`${style.itemThree} mt-[-15px] ml-[-20px] md:ml-[-30px] md:mt-[-20px] px-[37px] py-[77px] flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
          >
            <Icon
              className="w-[104px] h-[25px] md:w-[213px] md:h-[52px] lg:w-[148px] lg:h-[36px] xl:w-[156px] xl:h-[39px]"
              name="icon-vion-vr"
              size={"0px"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AboutUsSection;
