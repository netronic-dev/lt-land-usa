"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import {
  IQualityAndReliabilityList,
  QualityAndReliabilityList,
} from "@/constants/globalConstants";

const QualityAndReliabilitySection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(100);
  const listTranslated = t("qualityAndReliabilitySection.list", {
    returnObjects: true,
  });

  const ListTranslatedArray = Object.values(listTranslated);

  const list = ListTranslatedArray.map((item, index) => ({
    ...item,
    ...QualityAndReliabilityList[index],
  }));

  const splitItemsIntoCards = (
    items: IQualityAndReliabilityList[],
    itemsPerCard: number
  ) => {
    const cards = [];
    for (let i = 0; i < items.length; i += itemsPerCard) {
      cards.push(items.slice(i, i + itemsPerCard));
    }
    return cards;
  };

  const cards = splitItemsIntoCards(list, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 1512) {
        setSlideWidth(389);
      } else if (window.innerWidth >= 1024) {
        setSlideWidth(330);
      } else if (window.innerWidth >= 744) {
        setSlideWidth(357);
      } else {
        setSlideWidth(360);
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const handleChangePrevImg = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleChangeNextImg = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <section id="quality" className="pb-[67px] md:pb-[77px] xl:pb-[67px]">
      <div className="container overflow-x-hidden">
        <div className="flex flex-col gap-[30px] md:flex-row xl:mb-[29px] md:mb-[60px]">
          <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-center md:text-start">
            {t("qualityAndReliabilitySection.title")}
          </h2>
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
        <ul className="flex gap-[20px] xl:gap-[70px] overflow-x-hidden">
          {cards.map((card, index) => (
            <li
              className="transition-transform duration-500 ease-in-out md:h-[690px] w-full min-w-full md:w-[470px] md:min-w-[470px] xl:min-w-[540px] xl:w-[540px] px-[10px] md:px-[30px] py-[42px] md:py-[60px] flex flex-col gap-[30px] rounded-[7px]"
              key={index}
              style={{
                background:
                  index === 0
                    ? "linear-gradient(328deg, #0090FF 4.09%, rgba(0, 144, 255, 0.00) 97.73%)"
                    : index === 1
                    ? "#181E30"
                    : index === 2
                    ? "linear-gradient(143deg, #0090FF -15.09%, rgba(0, 144, 255, 0.00) 101.23%)"
                    : "none",
                transform: `translateX(-${activeIndex * slideWidth}px)`,
              }}
            >
              <ul className="flex flex-col gap-[30px] md:gap-[55px]">
                {card.map((item) => (
                  <li key={item.id} className="flex gap-[19px] md:gap-[39px]">
                    <div className="flex items-center justify-center w-[58px] h-[58px] rounded-[50%] border-[1px] border-solid border-[#929292]">
                      {" "}
                      <Icon name={item.iconName} width={24} height={24} />
                    </div>
                    <div className="flex flex-col gap-[10px] md:gap-[15px] max-w-[220px] md:max-w-[300px] xl:max-w-[355px]">
                      <h3 className="text-[var(--primary-text-color)] font-manrope text-[20px] md:text-[23px] font-extrabold">
                        {item.title}
                      </h3>
                      <p className="text-[#AEAEAE] font-manrope text-[16px] md:text-[18px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QualityAndReliabilitySection;
