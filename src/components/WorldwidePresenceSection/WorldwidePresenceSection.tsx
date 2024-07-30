"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { PrimaryButton } from "../PrimaryButton";
import style from "./style.module.scss";
import { Map } from "../Map";
import { useModals } from "@/context/ModalsProvider";

const WorldwidePresenceSection = () => {
  const { t } = useTranslation();
  const modals = useModals();
  const worldwidePresenceSectionListTranslated = t(
    "worldwidePresenceSection.list",
    {
      returnObjects: true,
    }
  );

  const worldwidePresenceSectionList = Object.values(
    worldwidePresenceSectionListTranslated
  );

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
    <section>
      <div className="container">
        <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold mb-[58px] md:mb-[38px] text-center md:text-start">
          {t("worldwidePresenceSection.title")}
        </h2>
        <div className="flex flex-col xl:flex-row relative">
          <div>
            <ul className="flex flex-col xl:gap-[44px] max-h-[396px] md:max-h-[296px] lg:max-h-[266px] xl:max-h-[438px] flex-wrap gap-x-[8px] gap-y-[30px]">
              {worldwidePresenceSectionList.map((item, index) => (
                <li
                  className={`max-w-[180px] aboutUsSection-item-width ${style.listItem}`}
                  key={index}
                  ref={(el) => {
                    listItemsRefs.current[index] = el;
                  }}
                >
                  <div className="rounded-[10px] bg-[var(--accent-color)] w-[52px] h-[3px] mb-[6px]"></div>
                  <p className="text-[20px] font-manrope text-[var(--primary-text-color)]">
                    <span className="text-[var(--accent-color)]">
                      {item.subtitleSpan}
                    </span>{" "}
                    {item.subtitle.length < 10 && <br />}
                    {item.subtitle}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-[58px] xl:mt-[60px] h-[65px] mb-[20px]">
              <PrimaryButton
                size="large"
                onClick={modals.formConsultationChangeVisibility}
              >
                {t("worldwidePresenceSection.btnText")}
              </PrimaryButton>
            </div>
          </div>
          <div className="xl:absolute xl:top-[-4%] xl:left-[33%] xl:w-[748px]">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldwidePresenceSection;
