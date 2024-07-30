"use client";

import { useTranslation } from "react-i18next";
import { Icon } from "../Icon";
import {
  CheckOutBottomList,
  CheckOutTopList,
} from "@/constants/globalConstants";
import Image from "next/image";
import { PrimaryButton } from "../PrimaryButton";
import { useEffect, useRef, useState } from "react";
import { useModals } from "@/context/ModalsProvider";

const CheckOutSection = () => {
  const { t } = useTranslation();
  const listTopTranslated = t("checkOutSection.checkOutTopList", {
    returnObjects: true,
  });

  const listBottomTranslated = t("checkOutSection.checkOutBottomList", {
    returnObjects: true,
  });

  const listTopTranslatedArray = Object.values(listTopTranslated);
  const listBottomTranslatedArray = Object.values(listBottomTranslated);

  const listTop = listTopTranslatedArray.map((item, index) => ({
    ...item,
    ...CheckOutTopList[index],
  }));

  const listBottom = listBottomTranslatedArray.map((item, index) => ({
    ...item,
    ...CheckOutBottomList[index],
  }));

  const [activeIndexTop, setActiveIndexTop] = useState<number>(0);
  const [activeIndexBottom, setActiveIndexBottom] = useState<number>(0);
  const [slideWidthTop, setSlideWidthTop] = useState<number>(100);
  const [slideWidthBottom, setSlideWidthBottom] = useState<number>(100);
  const sliderIntervalTop = useRef<NodeJS.Timeout | null>(null);
  const sliderIntervalBottom = useRef<NodeJS.Timeout | null>(null);

  const modals = useModals();

  const startSliderTop = () => {
    sliderIntervalTop.current = setInterval(() => {
      setActiveIndexTop((prevIndex) =>
        prevIndex === listTop.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  const stopSliderTop = () => {
    if (sliderIntervalTop.current) {
      clearInterval(sliderIntervalTop.current);
    }
  };

  const startSliderBottom = () => {
    sliderIntervalBottom.current = setInterval(() => {
      setActiveIndexBottom((prevIndex) =>
        prevIndex === listBottom.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  const stopSliderBottom = () => {
    if (sliderIntervalBottom.current) {
      clearInterval(sliderIntervalBottom.current);
    }
  };

  useEffect(() => {
    startSliderTop();
    startSliderBottom();

    return () => {
      stopSliderTop();
      stopSliderBottom();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listTop.length, listBottom.length]);

  const handleChangePrevImg = () => {
    setActiveIndexTop((prevIndex) =>
      prevIndex === 0 ? listTop.length - 1 : prevIndex - 1
    );
    setActiveIndexBottom((prevIndex) =>
      prevIndex === 0 ? listBottom.length - 1 : prevIndex - 1
    );
  };

  const handleChangeNextImg = () => {
    setActiveIndexTop((prevIndex) =>
      prevIndex === listTop.length - 1 ? 0 : prevIndex + 1
    );
    setActiveIndexBottom((prevIndex) =>
      prevIndex === listBottom.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 1512) {
        setSlideWidthTop(540);
        setSlideWidthBottom(350);
      } else if (window.innerWidth >= 1024) {
        setSlideWidthTop(458);
        setSlideWidthBottom(350);
      } else {
        setSlideWidthTop(300);
        setSlideWidthBottom(300);
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  return (
    <section id="products" className="pt-[56px] xl:pt-[63px] pb-[78px]">
      <div className="container overflow-x-hidden">
        <div className="flex flex-col gap-[30px] md:flex-row xl:mb-[29px] md:mb-[60px]">
          <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-center md:text-start">
            {t("checkOutSection.title")}
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
        <div className="flex flex-col gap-[39px]">
          <ul className="flex gap-[30px] overflow-x-hidden">
            {listTop.map((item) => (
              <li
                className="transition-all duration-500 ease-in-out overflow-y-hidden relative min-w-full w-full md:w-[458px] md:min-w-[458px] md:max-w-[458px] h-[323px] xl:min-w-[540px] xl:max-w-[540px] xl:w-[540px] group hover:opacity-50"
                key={item.id}
                style={{
                  transform: `translateX(-${activeIndexTop * slideWidthTop}px)`,
                }}
                onMouseEnter={stopSliderTop}
                onMouseLeave={startSliderTop}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[7px]"
                  />
                </div>
                <div className="absolute bottom-[77px] left-[20px] text-white transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                  <h3 className="font-manrope text-[40px] font-extrabold leading-[57px]">
                    {item.title}
                  </h3>
                  <p className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 max-w-[440px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[30px] overflow-x-hidden mb-[31px]">
            {listBottom.map((item) => (
              <li
                className="transition-all duration-500 ease-in-out overflow-y-hidden relative md:min-w-[350px] min-w-[300px] w-[300px] md:w-[350px] h-[323px] group hover:opacity-30"
                key={item.id}
                style={{
                  transform: `translateX(-${
                    activeIndexBottom * slideWidthBottom
                  }px)`,
                }}
                onMouseEnter={stopSliderBottom}
                onMouseLeave={startSliderBottom}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[7px]"
                  />
                </div>
                <div className="absolute bottom-[85px] left-[20px] text-white transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                  <h2 className="font-manrope text-[24px] font-extrabold max-w-[225px]">
                    {item.title}
                  </h2>
                  <p className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 max-w-[276px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            {" "}
            <PrimaryButton
              size="largeThinner"
              onClick={modals.formCatalogChangeVisibility}
            >
              {t("checkOutSection.btnText")}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutSection;
