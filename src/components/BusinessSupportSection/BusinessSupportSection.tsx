"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BusinessSupportSectionImgList } from "@/constants/globalConstants";
import ellBg from "../../assets/images/bg/ellipseBusinessSupport.webp";
import style from "./style.module.scss";

const BusinessSupportSection = () => {
  const { t } = useTranslation();
  const listTranslated = t("businessSupportSection.list", {
    returnObjects: true,
  });

  const list = Object.values(listTranslated);

  const listItemsRefs = useRef<(HTMLLIElement | null)[]>([]);
  const listImagesRefs = useRef<(HTMLLIElement | null)[]>([]);

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

    listImagesRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="support"
      className="relative overflow-x-hidden pt-[46px] pb-[19px] md:pb-[46px] lg:pb-[115px]"
    >
      <div className="absolute md:w-[134%] md:h-[60%] md:top-0 md:right-[-100%] lg:h-full xl:w-[124%]">
        <Image src={ellBg} alt="joinEllRight" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute xl:w-[124%] xl:h-[100%] xl:top-0 xl:left-[-100%]">
        <Image src={ellBg} alt="joinEllLeft" layout="fill" objectFit="cover" />
      </div>
      <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="xl:mb-[65px] md:mb-[38px] mb-[36px] lg:mb-[50px] text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-start">
            <span className="text-[var(--accent-color)]">
              {t("businessSupportSection.title.titleSpan")}
            </span>{" "}
            <br />
            {t("businessSupportSection.title.title")}
          </h2>
          <ul className="flex flex-col gap-[25px] mb-[36px]">
            {list.map((item, index) => (
              <li
                className={`flex gap-[29px] md:gap-[51px] mb-[20px] last:mb-0 ${style.listItem}`}
                key={index}
                ref={(el) => {
                  listItemsRefs.current[index] = el;
                }}
                data-index={index}
              >
                <div className="rounded-[10px] shadow-blueTwo bg-[var(--accent-color)] w-[6px]"></div>
                <div className="flex flex-col gap-[15px] max-w-[306px] md:max-w-[515px] lg:max-w-[427px] xl:max-w-[513px]">
                  <h3 className="text-[var(--primary-text-color)] font-manrope text-[16px] xl:text-[18px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[var(--primary-text-color)] font-manrope text-[16px] xl:text-[18px]">
                    {" "}
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-wrap gap-[10px] md:gap-[21px] lg:flex-nowrap lg:flex-col-reverse">
            {BusinessSupportSectionImgList.map((item) => (
              <li
                key={item.id}
                className={`${style.listImagesItem} ${
                  item.id === 2
                    ? "w-full"
                    : style.businessSupportSectionItemWidth
                }  ${item.id === 2 ? "h-[216px]" : "h-[105px]"} ${
                  item.id === 2 ? "md:h-[441px]" : "md:h-[213px]"
                } lg:w-[436px] lg:h-[252px] relative rounded-[7px]`}
                ref={(el) => {
                  listImagesRefs.current[item.id] = el;
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[7px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessSupportSection;
