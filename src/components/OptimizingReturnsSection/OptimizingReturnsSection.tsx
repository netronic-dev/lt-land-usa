"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { OptimizingReturnsList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import optimizingEllBg from "../../assets/images/bg/optimizingEllBg.webp";
import style from "./style.module.scss";
import { useIntersectionObserver } from "@/hooks";

const OptimizingReturnsSection = () => {
  const { t } = useTranslation();
  const listTranslated = t("optimizingReturnsSection.list", {
    returnObjects: true,
  });

  const ListTranslatedArray = Object.values(listTranslated);

  const list = ListTranslatedArray.map((item, index) => ({
    ...item,
    ...OptimizingReturnsList[index],
  }));

  const divRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver([divRef], { threshold: 0.1 }, style.appear);

  return (
    <section className="pt-[63px] pb-[55px] relative overflow-hidden">
      <div className="absolute lg:h-[106%] lg:w-[98%] xl:h-full xl:w-[77%] lg:top-[-68px] lg:right-[-53%] xl:top-0 xl:right-[-53%]">
        <Image
          src={optimizingEllBg}
          alt="optimizingEllBg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container">
        <h2 className="xl:max-w-[541px] xl:mb-[33px] mb-[38px] md:mb-[30px] text-[var(--primary-text-color)] lg:max-w-[473px] lg:mb-[29px] font-manrope text-[40px] leading-[57px] font-extrabold text-start">
          {t("optimizingReturnsSection.title.title")}{" "}
          <span className="text-[var(--accent-color)]">
            {t("optimizingReturnsSection.title.titleSpan")}
          </span>
        </h2>
        <p className="text-[var(--primary-text-color)] font-manrope text-[18px] xl:max-w-[631px] md:max-w-[571px] xl:mb-[55px] mb-[49px] md:mb-[30px] lg:max-w-[477px] lg:mb-[41px]">
          {t("optimizingReturnsSection.text")}
        </p>
        <div
          ref={divRef}
          className={`${style.animateDiv} flex gap-[27px] flex-col lg:flex-row transition-all`}
        >
          <ul className="flex flex-col gap-[30px] lg:flex-wrap lg:w-[85%]">
            {list.map(
              (item) =>
                item.subtitleTop && (
                  <li
                    key={item.id}
                    className={`px-[20px] py-[29px] xl:px-[22px] rounded-[7px] border-solid border-[1px] ${
                      item.id === 2
                        ? "bg-[#181E30] border-[#181E30]"
                        : "border-[#757575]"
                    } md:flex md:justify-between w-full lg:h-[345px] xl:h-[316px]`}
                  >
                    <div>
                      <div className="flex items-center justify-center w-[58px] h-[58px] rounded-[50%] border-[1px] border-solid border-[#565656] mb-[28px]">
                        {" "}
                        <Icon
                          color="var(--primary-text-color)"
                          name={item.icon}
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="text-[var(--primary-text-color)] font-manrope text-[16px] font-extrabold xl:mb-[12px] mb-[24px] lg:mb-[14px]">
                        {item.title}
                      </h3>
                      <p className="text-[var(--primary-text-color)] font-manrope text-[18px] mb-[24px] lg:mb-0 md:max-w-[230px] lg:max-w-[250px] xl:max-w-[316px]">
                        {" "}
                        {item.description}
                      </p>
                    </div>
                    <div className="md:max-w-[350px]">
                      <h3 className="text-[var(--accent-color)] font-manrope text-[18px] font-bold">
                        {item.subtitleTop}
                      </h3>
                      <p className="text-[var(--primary-text-color)] font-manrope text-[18px] mb-[30px]">
                        {item.textTop}
                      </p>
                      <h3 className="text-[var(--accent-color)] font-manrope text-[18px] font-bold">
                        {item.subtitleBottom}
                      </h3>
                      <p className="text-[var(--primary-text-color)] font-manrope text-[18px]">
                        {item.textBottom}
                      </p>
                    </div>
                  </li>
                )
            )}
          </ul>
          <ul>
            {list.map(
              (item) =>
                !item.subtitleTop && (
                  <li
                    key={item.id}
                    className={`w-full px-[20px] py-[29px] xl:px-[22px] rounded-[7px] border-solid border-[1px] border-[#757575] md:flex md:justify-between lg:flex-col`}
                  >
                    <div>
                      <div className="flex items-center justify-center w-[58px] h-[58px] rounded-[50%] border-[1px] border-solid border-[#565656] mb-[28px]">
                        {" "}
                        <Icon
                          color="var(--primary-text-color)"
                          name={item.icon}
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="max-w-[97px] lg:max-w-[173px] text-[var(--primary-text-color)] font-manrope text-[16px] font-extrabold xl:mb-[12px] mb-[24px] lg:mb-[14px]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="md:max-w-[350px] text-[var(--primary-text-color)] font-manrope text-[18px]">
                      {" "}
                      {item.description}
                    </p>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OptimizingReturnsSection;
