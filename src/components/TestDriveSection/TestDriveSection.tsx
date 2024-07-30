"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { PrimaryButton } from "../PrimaryButton";
import style from "./style.module.scss";
import { useModals } from "@/context/ModalsProvider";

const TestDriveSection = () => {
  const { t } = useTranslation();
  const modals = useModals();
  const listTranslated = t("testDriveSection.list", {
    returnObjects: true,
  });

  const list = Object.values(listTranslated);

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
    <section id="test-drive" className="pt-[64px] pb-[42px] xl:pb-[30px]">
      <div className="px-[10px] md:px-[30px] xl:w-[1512px] xl:px-[180px] container lg:my-0 lg:mx-auto overflow-x-hidden">
        <h2 className="mb-[15px] text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-start">
          {t("testDriveSection.title")} <br />
        </h2>
        <p className="text-[var(--accent-color)] font-manrope text-[33px] text-start font-semibold mb-[37px] md:mb-[50px] max-w-[298px] md:max-w-full">
          {t("testDriveSection.subtitle")}
        </p>
        <ul className="flex flex-col gap-[20px] md:gap-x-0 md:gap-y-[35px] lg:gap-y-[45px] md:flex-wrap md:h-[905px] lg:h-[675px]">
          {list.map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                listItemsRefs.current[index] = el;
              }}
              data-index={index}
              className={`${
                style.listItem
              } testDriveSection-item-width flex items-start gap-[24px] md:gap-[20px] lg:gap-[24px] ${
                index === 0 || index === 3
                  ? "md:h-[361px]"
                  : index === 1 || index === 4
                  ? "md:h-[249px]"
                  : index === 2 || index === 5
                  ? "md:h-[212px]"
                  : ""
              } ${
                index === 0 || index === 3
                  ? "lg:h-[218px]"
                  : index === 1 || index === 4
                  ? "lg:h-[197px]"
                  : index === 2 || index === 5
                  ? "lg:h-[160px]"
                  : ""
              }`}
            >
              <p className="test-drive-number-text font-manrope text-[44px] font-extrabold uppercase">
                0{index + 1}
              </p>
              <div className="flex flex-col gap-[10px] md:gap-[8px] md:max-w-[250px] lg:max-w-[370px] xl:max-w-[440px]">
                <h3 className="text-[var(--primary-text-color)] font-manrope text-[20px] font-extrabold capitalize">
                  {item.title}
                </h3>
                <p className="text-[var(--primary-text-color)] font-manrope text-[18px]">
                  {item.description}
                  {item.descriptionSpan && (
                    <span className="text-[16px] font-bold">
                      {item.descriptionSpan}
                    </span>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-[70px]">
          {" "}
          <PrimaryButton
            size="largeThinner"
            onClick={modals.formTestDriveChangeVisibility}
          >
            {t("testDriveSection.btnText")}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};
export default TestDriveSection;
