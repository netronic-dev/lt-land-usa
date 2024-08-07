"use client";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Icon } from "../Icon";
import { PopularityAndDemandList } from "@/constants/globalConstants";
import { PrimaryButton } from "../PrimaryButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularitySection = () => {
  const { t } = useTranslation();

  const popularityAndDemandSectionListTranslated = t(
    "popularityAndDemandSection.list",
    {
      returnObjects: true,
    }
  );

  const popularityAndDemandSectionListTranslatedArray = Object.values(
    popularityAndDemandSectionListTranslated
  );

  const popularityAndDemandSectionList =
    popularityAndDemandSectionListTranslatedArray.map((item, index) => ({
      ...item,
      ...PopularityAndDemandList[index],
    }));

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidersToScroll: 1,
    arrows: false,
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
    <section className="pb-[15px] md:pb-[86px] xl:pb-[64px] container">
      <div className="flex flex-col gap-[30px] md:flex-row items-center md:mb-[38px] overflow-x-hidden">
        <h3 className="text-center md:text-start font-manrope text-[var(--primary-text-color)] text-[23px] font-extrabold">
          {t("popularityAndDemandSection.subtitle")}
        </h3>
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
        {popularityAndDemandSectionList.map((item) => (
          <div
            id="slider-boxes"
            key={item.id}
            className={`bg-[transparent] p-[22px] h-[236px] border-[1px] border-solid border-[var(--primary-text-color)] rounded-[7px]`}
          >
            <Icon
              name={item.icon}
              width={40}
              height={40}
              color="var(--accent-color)"
            />
            <p className="w-[241px] md:w-full text-[var(--primary-text-color)] text-[18px] font-manrope">
              <span className="font-bold">{item.preDescriptionSpan}</span>{" "}
              {item.description}{" "}
              <span className="font-bold">{item.postDescriptionSpan}</span>
            </p>
          </div>
        ))}
      </Slider>
      <div className="mt-[36px] md:mt-[24px] lg:mt-[44px] xl:mt-[59px]">
        <a href="https://lasertag.net/blog" target="_blank" rel="noreferrer">
          <PrimaryButton size="large">
            {t("popularityAndDemandSection.btnText")}
          </PrimaryButton>
        </a>
      </div>
    </section>
  );
};

export default PopularitySection;
