"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { OptimizingReturnsList } from "@/constants/globalConstants";
import optimizingEllBg from "../../assets/images/bg/optimizingEllBg.webp";
import optimizingChartOne from "../../assets/images/optimizingChart.webp";
import optimizingChartOneTablet from "../../assets/images/optimizingChartTablet.webp";
import optimizingChartOneBigDesktop from "../../assets/images/optimizingChartBigDesktop.webp";
import optimizingChartTwo from "../../assets/images/optimizingChartTwo.webp";
import style from "./style.module.scss";
import { useIsTablet, useIntersectionObserver } from "@/hooks";

const LasertagProfitabilitySection = () => {
  const { t } = useTranslation();
  const isBigDesktop = useIsTablet(1512);
  const isTablet = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1511px)",
  });
  const isDesktop = useIsTablet(1024);
  const listTranslated = t("lasertagProfitabilitySection.list", {
    returnObjects: true,
  });

  const ListTranslatedArray = Object.values(listTranslated);

  const list = ListTranslatedArray.map((item, index) => ({
    ...item,
    ...OptimizingReturnsList[index],
  }));

  const titleDivRef = useRef(null);
  const subtitleRef = useRef(null);
  const listItemsRefs = useRef(null);
  const chartsDiv = useRef(null);

  useIntersectionObserver(
    [titleDivRef, subtitleRef, listItemsRefs, chartsDiv],
    { threshold: 0.1 },
    style.appear
  );

  return (
    <section
      id="profitability"
      className="pt-[63px] pb-[41px] relative overflow-hidden"
    >
      <div className="absolute lg:h-[106%] lg:w-[98%] xl:h-full xl:w-[77%] lg:top-[-68px] lg:right-[-67%] xl:top-0 xl:right-[-53%] z-[-1]">
        <Image
          src={optimizingEllBg}
          alt="optimizingEllBg"
          layout="fill"
          objectFit="cover"
          priority={false}
        />
      </div>
      <div className="container">
        <div
          ref={titleDivRef}
          className={`${style.titleDiv} lg:flex lg:justify-between lg:mb-[43px]`}
        >
          <h2 className="xl:max-w-[541px] xl:mb-[33px] mb-[16px] md:mb-[32px] lg:mb-0 text-[var(--primary-text-color)] lg:max-w-[473px] font-manrope text-[40px] leading-[57px] font-extrabold text-start">
            {t("lasertagProfitabilitySection.title.title")}{" "}
            <span className="text-[var(--accent-color)]">
              {t("lasertagProfitabilitySection.title.titleSpan")}
            </span>
          </h2>
          {isDesktop && (
            <div className="h-[163px] w-[2px] bg-[var(--primary-text-color)]"></div>
          )}
          <p className="text-[var(--primary-text-color)] font-manrope text-[23px] font-extrabold xl:max-w-[505px] md:max-w-[671px] xl:mb-[55px] mb-[28px] md:mb-[30px] lg:max-w-[383px] lg:mb-0">
            {t("lasertagProfitabilitySection.text")}
          </p>
        </div>
        <h3
          ref={subtitleRef}
          className={`${style.subtitle} text-[var(--accent-color)] mb-[28px] font-manrope text-[24px] font-extrabold`}
        >
          {" "}
          {t("lasertagProfitabilitySection.subtitle")}
        </h3>
        <ul
          ref={listItemsRefs}
          className="flex flex-col gap-[15px] md:gap-x-[9px] lg:gap-x-[23px] xl:gap-x-[11px] md:gap-y-[15px] md:flex-row md:flex-wrap"
        >
          {list.map((item, index) => (
            <li
              key={index}
              className={`px-[10px] py-[16px] rounded-[7px] border-solid border-[1px] border-[var(--primary-text-color)] ${style.item}`}
            >
              <h4 className="text-[var(--primary-text-color)] font-manrope text-[18px]">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-[var(--primary-text-color)] font-manrope text-[12px]">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
        <div
          ref={chartsDiv}
          className={`${style.chartsDiv} lg:flex lg:justify-between lg:items-center lg:mt-[20px]`}
        >
          <div className="relative w-[365px] h-[256px] md:w-[608px] md:h-[402px] lg:w-[751px] lg:h-[418px] mb-[45px] mx-auto mt-[40px] xl:ml-[6px]">
            {isBigDesktop ? (
              <Image
                src={optimizingChartOneBigDesktop}
                alt="optimizingChartOne"
                priority={false}
              />
            ) : (
              <Image
                src={isTablet ? optimizingChartOneTablet : optimizingChartOne}
                alt="optimizingChartOne"
                priority={false}
              />
            )}
            <h5 className="text-[var(--primary-text-color)] text-[14px] md:text-[16px] xl:text-[23px] font-medium md:font-extrabold absolute top-[20px] right-[11%] md:top-[16px] md:right-[68%] xl:top-[3px] xl:right-[24%]">
              {t("lasertagProfitabilitySection.chartText1")}
            </h5>
            <h5 className="text-[var(--primary-text-color)] text-[14px] md:text-[16px] xl:text-[23px] font-medium md:font-extrabold absolute top-[62px] left-[2%] md:top-[95px] xl:top-[66px] md:left-0 max-w-[177px] xl:max-w-[238px]">
              {t("lasertagProfitabilitySection.chartText2")}
            </h5>
            <h5 className="text-[var(--primary-text-color)] text-[14px] md:text-[16px] xl:text-[23px] font-medium md:font-extrabold absolute top-[62px] right-[7%] md:top-[155px] md:right-[5%] xl:top-[126px] xl:right-[1%] max-w-[89px] md:max-w-[195px] xl:max-w-[280px]">
              {t("lasertagProfitabilitySection.chartText3")}
            </h5>
            <h5 className="text-[var(--primary-text-color)] text-[14px] md:text-[16px] xl:text-[23px] font-medium md:font-extrabold absolute top-[210px] left-[6%] md:top-[316px] md:left-[1%] xl:top-[301px]">
              {t("lasertagProfitabilitySection.chartText4")}
            </h5>
          </div>
          <div className="md:flex md:justify-between md:items-center lg:flex-col">
            <div className="mb-[28px] pt-[47px] pb-[23px] pl-[32px] rounded-[7px] border-solid border-[1px] border-[var(--primary-text-color)] md:w-[320px]">
              <div className="w-[143px] h-[57px] mt-[-78px] ml-[-17px] flex items-center justify-center rounded-[10px] bg-[var(--accent-color)] shadow-optimizingSectionShadow">
                <h3 className="text-[var(--primary-text-color)] font-manrope text-[23px] font-extrabold">
                  {t("lasertagProfitabilitySection.roiTitle")}
                </h3>
              </div>
              <p className="mt-[18px] max-w-[226px] font-manrope text-[18px] text-[var(--primary-text-color)]">
                {t("lasertagProfitabilitySection.roiText")}
              </p>
            </div>
            <div className="relative mx-auto w-[319px] h-[278px]">
              <Image
                src={optimizingChartTwo}
                alt="optimizingChartTwo"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LasertagProfitabilitySection;
