"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { PrimaryButton } from "../PrimaryButton";
import {
  DiverseGameplayList,
  DiverseGameplayListInside,
} from "@/constants/globalConstants";
import ellItemBg from "../../assets/images/bg/ellipseItemDiverseGameplayBg.webp";
import style from "./style.module.scss";
import { useModals } from "@/context/ModalsProvider";
import { Icon } from "../Icon";

const DiverseGameplaySection = () => {
  const { t } = useTranslation();
  const modals = useModals();

  const listTranslated = t("diverseGameplaySection.list", {
    returnObjects: true,
  });

  const listInsideTranslated = t("diverseGameplaySection.listInside", {
    returnObjects: true,
  });

  const listTranslatedArray = Object.values(listTranslated);
  const listTranslatedInsideArray = Object.values(listInsideTranslated);

  const list = listTranslatedArray.map((item, index) => ({
    ...item,
    ...DiverseGameplayList[index],
  }));

  const listInside = listTranslatedInsideArray.map((item, index) => ({
    ...item,
    ...DiverseGameplayListInside[index],
  }));

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
    <section className="py-[64px] md:pb-[58px] xl:pb-[21px]">
      <div className="container overflow-hidden">
        <h2 className="xl:mb-[65px] mb-[36px] md:mb-[70px] lg:mb-[50px] text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-start">
          {t("diverseGameplaySection.title.title")} <br />
          <span className="text-[var(--accent-color)]">
            {t("diverseGameplaySection.title.titleSpan")}
          </span>
        </h2>
        <ul className="flex flex-col gap-[20px] lg:flex-row flex-wrap">
          {list.map((item) => (
            <li
              key={item.id}
              ref={(el) => {
                listItemsRefs.current[item.id] = el;
              }}
              data-index={item.id}
              className={`relative lg:max-h-[645px] rounded-[7px] pb-[59px] pt-[33px]" ${
                item.id !== 1 && "md:pt-[45px]"
              } flex flex-col overflow-x-hidden ${
                item.id === 2
                  ? "lg:w-full"
                  : style.diverseGameplaySectionItemWidth
              } lg:gap-[22px] ${
                item.id === 0
                  ? style.itemOne
                  : item.id === 1
                  ? style.itemTwo
                  : item.id === 2
                  ? style.itemThree
                  : ""
              }`}
              style={{
                background:
                  item.id === 1
                    ? "linear-gradient(143deg, #0090FF -15.09%, rgba(0, 144, 255, 0.00) 101.23%)"
                    : "#181E30",
              }}
            >
              {item.id === 2 && (
                <div className="lg:absolute lg:top-0 lg:right-0 lg:w-[47%] lg:h-[70%] xl:w-[17%] xl:h-[59%]">
                  <Image
                    src={ellItemBg}
                    alt="ellItemBg"
                    fill
                    priority={false}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div
                className={`${
                  item.id === 2 &&
                  "lg:flex lg:flex-row-reverse lg:justify-between lg:items-center"
                }`}
              >
                <div
                  className={`relative mb-[44px] flex ${
                    item.id === 0
                      ? "w-[323px] h-[128px] md:w-[618px] md:h-[243px] lg:w-[440px] lg:h-[170px] lg:mb-[77px]"
                      : item.id === 1
                      ? "w-[294px] h-[195px] md:w-[450px] md:h-[310px] lg:w-[353px] lg:h-[243px]"
                      : item.id === 2
                      ? "w-[331px] h-[189px] md:w-[696px] md:h-[453px] lg:w-[570px] lg:h-[327px] xl:h-[368px] xl:right-[-6%]"
                      : "none"
                  }`}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      priority={false}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <ul className="pt-[20px] md:pb-0 flex flex-col gap-y-[25px] gap-x-[45px] flex-wrap h-[199px] md:h-[220px]">
                      {listInside.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center gap-[8px] md:gap-[19px]"
                        >
                          <Icon
                            name={item.icon}
                            className="w-[16px] h-[15px] md:w-[28px] md:h-[27px]"
                            size={"0px"}
                          />
                          <h3 className="max-w-[141px] font-manrope text-[#BEC2CE] text-[10px] md:text-[14px] leading-[16px] font-medium">
                            {item.title}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="lg:max-w-[460px]">
                  <h3 className="mt-[55px] md:mt-0 px-[23px] xl:pr-0 md:pl-[30px] md:pr-[60px] font-manrope text-[var(--primary-text-color)] text-[23px] font-extrabold mb-[31px]">
                    {item.title}
                  </h3>
                  <p className="px-[23px] xl:pr-0 md:pl-[30px] lg:px-[36px] xl:w-[511px] md:pr-[60px] font-manrope text-[var(--primary-text-color)] text-[18px]">
                    {item.descriptionTopSpan && (
                      <span className="text-[var(--accent-color)]">
                        {t(item.descriptionTopSpan)}
                      </span>
                    )}{" "}
                    {item.descriptionTop || item.description}
                  </p>
                  {item.descriptionBottom && (
                    <p className="xl:w-[529px] px-[23px] md:pl-[30px] md:pr-[60px] font-manrope text-[var(--primary-text-color)] text-[18px] mt-[10px]">
                      {item.descriptionBottomSpan && (
                        <span className="text-[var(--accent-color)]">
                          {t(item.descriptionBottomSpan)}
                        </span>
                      )}{" "}
                      {item.descriptionBottom}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="flex justify-center mt-[60px] md:mt-[54px] lg:mt-[60px]">
          {" "}
          <PrimaryButton
            size="large"
            onClick={modals.formCatalogChangeVisibility}
          >
            {t("diverseGameplaySection.btnText")}
          </PrimaryButton>
        </div> */}
      </div>
    </section>
  );
};
export default DiverseGameplaySection;
