"use client";

import { useTranslation } from "react-i18next";
import { WhySectionListMeta } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import style from "./style.module.scss";
import { FC, useEffect, useRef } from "react";

const WhySection = () => {
  const { t } = useTranslation();
  const whySectionListTranslated = t("whySection.whySectionList", {
    returnObjects: true,
  });

  const whySectionListTranslatedArray = Object.values(whySectionListTranslated);

  const whySectionList = whySectionListTranslatedArray.map((item, index) => ({
    ...item,
    ...WhySectionListMeta[index],
  }));

  const getClassForItem = (id: number) => {
    switch (id) {
      case 0:
        return `${style.itemOne}`;
      case 1:
        return `${style.itemThree}`;
      case 2:
        return `${style.itemFive}`;
      case 3:
        return `${style.itemTwo}`;
      case 4:
        return `${style.itemFour}`;
      case 5:
        return `${style.itemSix}`;
      default:
        return "";
    }
  };

  const listItemsRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const handleIntersection = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const targetIndex = parseInt(entry.target.dataset.index, 10);
          const delay = targetIndex * 100;

          setTimeout(() => {
            entry.target.classList.add(style.appear);
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    listItemsRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="why"
      className="xl:pt-[101px] xl:px-[180px] pt-[101px] pb-[71px] md:pb-[59px] xl:pb-[101px] overflow-hidden"
    >
      <h2 className="px-[30px] md:mb-[39px] lg:mb-[21px] mb-[54px] xl:px-0 text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-center md:text-start">
        {t("whySection.title.title")} <br />
        <span className="text-[var(--accent-color)]">
          {t("whySection.title.titleSpan")}
        </span>
      </h2>
      <ul className="flex whySection-list-height flex-col items-start justify-center gap-[21px] md:gap-x-[27px] xl:gap-[30px] md:gap-y-[20px] px-5 flex-wrap xl:px-0">
        {whySectionList.map((item) => (
          <li
            className={`transition-all whySection-item-width px-[18px] pt-8 pb-[25px] rounded-[7px] h-[300px] ${
              item.id % 2 === 0
                ? "bg-gradient-to-r from-[#0090FF] to-[rgba(0,144,255,0)]"
                : "bg-[var(--secondary-bg-color)]"
            } ${getClassForItem(item.id)}`}
            key={item.id}
            ref={(el) => {
              listItemsRefs.current[item.id] = el;
            }}
            data-index={item.id}
          >
            <Icon color="#ffffff" name={item.icon} width={44} height={44} />
            <h3 className="lg:max-w-[250px] mt-[14px] mb-[9px] text-[var(--primary-text-color)] text-[28px] font-manrope font-extrabold">
              {item.spanTitle && (
                <>
                  <span className="text-[var(--accent-color)]">
                    {item.spanTitle}
                  </span>{" "}
                  <br />
                </>
              )}{" "}
              {item.title}
            </h3>
            <p className="lg:max-w-[393px] xl:max-w-[451px] font-manrope text-[var(--primary-text-color)] text-[18px]">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhySection;
