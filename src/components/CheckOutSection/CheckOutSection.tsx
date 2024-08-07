"use client";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "../Icon";
import {
  CheckOutBottomList,
  CheckOutTopList,
} from "@/constants/globalConstants";
import { PrimaryButton } from "../PrimaryButton";
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

  const modals = useModals();

  const sliderRefTop = useRef<Slider | null>(null);
  const sliderRefBottom = useRef<Slider | null>(null);

  const handleChangePrevImg = () => {
    if (sliderRefTop.current && sliderRefBottom.current) {
      sliderRefTop.current.slickPrev();
      sliderRefBottom.current.slickNext();
    }
  };

  const handleChangeNextImg = () => {
    if (sliderRefTop.current && sliderRefBottom.current) {
      sliderRefTop.current.slickNext();
      sliderRefBottom.current.slickPrev();
    }
  };

  const settingsSliderTop = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidersToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 649,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsSliderBottom = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidersToScroll: 1,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 649,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          <Slider ref={sliderRefTop} {...settingsSliderTop}>
            {listTop.map((item) => (
              <div
                className="relative h-[323px] group"
                key={item.id}
                onMouseEnter={() => sliderRefTop.current?.slickPause()}
                onMouseLeave={() => sliderRefTop.current?.slickPlay()}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[7px] transition-opacity duration-300 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <div className="absolute bottom-[77px] left-[20px] text-white transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                    <h3 className="font-manrope text-[40px] font-extrabold leading-[57px]">
                      {item.title}
                    </h3>
                    <p className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 max-w-[440px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <Slider ref={sliderRefBottom} {...settingsSliderBottom}>
            {listBottom.map((item) => (
              <div
                className="relative h-[323px] group"
                key={item.id}
                onMouseEnter={() => sliderRefBottom.current?.slickPause()}
                onMouseLeave={() => sliderRefBottom.current?.slickPlay()}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[7px] transition-opacity duration-300 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <div className="absolute bottom-[85px] left-[20px] text-white transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                    <h2 className="font-manrope text-[24px] font-extrabold max-w-[225px]">
                      {item.title}
                    </h2>
                    <p className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 max-w-[276px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-[31px]">
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
