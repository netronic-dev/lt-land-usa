"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { PopularityAndDemandList } from "@/constants/globalConstants";
import { PrimaryButton } from "../PrimaryButton";
import style from "./style.module.scss";

const PopularitySection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(100);

  const popularityAndDemandSectionListTranslated = t(
    "popularityAndDemandSection.list",
    {
      returnObjects: true,
    }
  );

  const popularityAndDemandSectionListTranslatedArray = Object.values(
    popularityAndDemandSectionListTranslated
  );

  const popularityAndDemandSectionList =
    popularityAndDemandSectionListTranslatedArray.map((item, index) => ({
      ...item,
      ...PopularityAndDemandList[index],
    }));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === popularityAndDemandSectionList.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [popularityAndDemandSectionList.length]);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 1512) {
        setSlideWidth(389);
      } else if (window.innerWidth >= 1024) {
        setSlideWidth(330);
      } else if (window.innerWidth >= 744) {
        setSlideWidth(357);
      } else {
        setSlideWidth(355);
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const handleChangePrevImg = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + popularityAndDemandSectionList.length) %
        popularityAndDemandSectionList.length
    );
  };

  const handleChangeNextImg = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1) % popularityAndDemandSectionList.length
    );
  };

  return (
    <section className="pb-[15px] md:pb-[86px] xl:pb-[64px] container">
      <div className="flex flex-col gap-[30px] md:flex-row items-center md:mb-[38px]">
        <h3 className="text-center md:text-start font-manrope text-[var(--primary-text-color)] text-[23px] font-extrabold">
          {t("popularityAndDemandSection.subtitle")}
        </h3>
        <div className="flex items-center gap-[18px] mb-[38px] md:mb-0 justify-center">
          <div
            onClick={handleChangePrevImg}
            className="cursor-pointer transition-all hover:border-[var(--accent-color)] group w-[50px] h-[50px] border-solid border-[1px] border-[#F5F5F5] flex items-center justify-center rounded-[50%]"
          >
            <Icon
              name="icon-arrow-left"
              width={7}
              height={12}
              className="group-hover:text-[var(--accent-color)] text-[#C8C8C8]"
            />
          </div>
          <div
            onClick={handleChangeNextImg}
            className="cursor-pointer hover:border-[var(--accent-color)] transition-all group w-[50px] h-[50px] border-solid border-[1px] border-[#F5F5F5] flex items-center justify-center rounded-[50%]"
          >
            <Icon
              name="icon-arrow-right"
              width={7}
              height={12}
              className="group-hover:text-[var(--accent-color)] text-[#C8C8C8]"
            />
          </div>
        </div>
      </div>
      <ul className="flex gap-[10px] md:gap-[25px] lg:gap-[32px] xl:gap-[27px] overflow-x-hidden mb-[36px] md:mb-[24px]">
        {popularityAndDemandSectionList.map((item) => (
          <li
            className={`${
              style.popularityAndDemandSectionItemWidth
            } flex bg-[transparent] flex-col gap-[16px] p-[22px] h-[236px] border-[1px] border-solid border-[var(--primary-text-color)] rounded-[7px]`}
            key={item.id}
            style={{
              transform: `translateX(-${activeIndex * slideWidth}px)`,
            }}
          >
            <Icon
              name={item.icon}
              width={40}
              height={40}
              color="var(--accent-color)"
            />
            <p className="w-[241px] md:w-full text-[var(--primary-text-color)] text-[18px] font-manrope">
              <span className="font-bold">{item.preDescriptionSpan}</span>{" "}
              {item.description}{" "}
              <span className="font-bold">{item.postDescriptionSpan}</span>
            </p>
          </li>
        ))}
      </ul>
      <a href="https://lasertag.net/blog" target="_blank" rel="noreferrer">
        <PrimaryButton size="large">
          {t("popularityAndDemandSection.btnText")}
        </PrimaryButton>
      </a>
    </section>
  );
};

export default PopularitySection;
