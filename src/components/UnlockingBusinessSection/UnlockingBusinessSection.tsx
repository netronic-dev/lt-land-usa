"use client";

import { useTranslation } from "react-i18next";
import { MutableRefObject, useEffect, useRef } from "react";
import style from "./style.module.scss";
import { useIntersectionObserver } from "@/hooks";

const UnlockingBusinessSection = () => {
  const { t } = useTranslation();
  const listTranslated = t("unlockingBusinessSection.list", {
    returnObjects: true,
  });

  const list = Object.values(listTranslated);

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
    <section className="py-[63px]">
      <div className="container overflow-hidden">
        <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold mb-[30px] xl:mb-[65px]">
          {t("unlockingBusinessSection.title")}
        </h2>
        <ul className="flex flex-col flex-wrap gap-[20px] md:gap-[15px] md:h-[817px] xl:h-[837px] xl:gap-x-[29px] xl:gap-y-[30px]">
          {list.map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                listItemsRefs.current[index] = el;
              }}
              data-index={index}
              className={`${getClassForItem(
                index
              )} md:gap-[16px] lg:gap-[20px] h-[259px] p-[45px] xl:pr-[70px] rounded-[7px] w-full unlockingBusinessSection-item-width`}
              style={
                index % 2 === 0
                  ? {
                      background:
                        "linear-gradient(143deg, #0090FF -15.09%, rgba(0, 144, 255, 0.00) 101.23%)",
                    }
                  : { background: "#181E30" }
              }
            >
              <h3
                className={`lg:w-[350px] text-[var(--primary-text-color)] font-manrope text-[23px] lg:text-[33px] font-extrabold mb-[16px]`}
              >
                {item.title}
                {item.titleSpan && <br />}
                <span className="text-[var(--accent-color)]">
                  {item.titleSpan}
                </span>
              </h3>
              <p className="text-[var(--primary-text-color)] font-manrope text-[18px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default UnlockingBusinessSection;
