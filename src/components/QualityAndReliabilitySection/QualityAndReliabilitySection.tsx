"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.scss";
import { Icon } from "../Icon";
import {
  IQualityAndReliabilityList,
  QualityAndReliabilityList,
} from "@/constants/globalConstants";

const QualityAndReliabilitySection = () => {
  const { t } = useTranslation();
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

  const sliderRef = useRef<Slider | null>(null);

  const handleChangePrevImg = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleChangeNextImg = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const excludeClonedSlides = () => {
    const clonedSlides = document.querySelectorAll(".slick-cloned");

    clonedSlides.forEach((slide) => {
      slide.setAttribute("aria-hidden", "true");
      const focusableElements = slide.querySelectorAll(
        "a, button, input, textarea, select"
      );
      focusableElements.forEach((el) => el.setAttribute("tabindex", "-1"));
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidersToScroll: 1,
    arrows: false,
    afterChange: excludeClonedSlides,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    excludeClonedSlides();
  }, []);

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
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div
              className={`${
                style["custom-slide-bg-" + index]
              } md:h-[690px] px-[10px] md:px-[30px] py-[42px] md:py-[60px] flex flex-col gap-[30px] rounded-[7px]`}
              key={index}
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default QualityAndReliabilitySection;
