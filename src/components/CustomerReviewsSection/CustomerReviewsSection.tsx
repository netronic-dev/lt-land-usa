"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "../Icon";
import {
  CustomerReviewsList,
  ICustomerReviewsList,
} from "@/constants/globalConstants";
import YouTubeModal from "./YouTubeModal";

const CustomerReviewsSection = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] =
    useState<ICustomerReviewsList | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePlayClick = (item: ICustomerReviewsList) => {
    setSelectedVideo(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(100);
  const sliderInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    sliderInterval.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === CustomerReviewsList.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
  };

  const stopSlider = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
    }
  };

  useEffect(() => {
    startSlider();

    return () => stopSlider();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CustomerReviewsList.length]);

  const handleChangePrevImg = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + CustomerReviewsList.length) %
        CustomerReviewsList.length
    );
  };

  const handleChangeNextImg = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CustomerReviewsList.length);
  };

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 1512) {
        setSlideWidth(389);
      } else if (window.innerWidth >= 1024) {
        setSlideWidth(330);
      } else if (window.innerWidth >= 744) {
        setSlideWidth(357);
      } else {
        setSlideWidth(375);
      }
    };

    updateSlideWidth();

    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  return (
    <section className="md:py-[63px] pb-[48px] pt-[25px]">
      <div className="container overflow-x-hidden">
        <div className="flex flex-col gap-[30px] md:flex-row md:mb-[42px]">
          <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-center md:text-start">
            {t("customerReviewsSection.title")}
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
        <ul className="flex gap-[30px] overflow-x-hidden">
          {CustomerReviewsList.map((item) => (
            <li
              key={item.id}
              className="transition-transform duration-500 ease-in-out group relative min-w-full w-full md:h-[261px] md:min-w-[466px] md:max-w-[466px] md:w-[466px] xl:h-[308px] xl:min-w-[546px] xl:max-w-[546px] xl:w-[546px] h-[209px] rounded-[7px]"
              style={{
                transform: `translateX(-${activeIndex * slideWidth}px)`,
              }}
              onMouseEnter={stopSlider}
              onMouseLeave={startSlider}
            >
              <div className="group-hover:opacity-100 opacity-50 relative w-full h-full transition-opacity duration-300">
                <Image
                  src={item.image}
                  alt={item.alt}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-[7px]"
                />
              </div>
              <button
                onClick={() => handlePlayClick(item)}
                className="z-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all cursor-pointer w-[77px] h-[77px] flex items-center justify-center rounded-[50%] border-solid border-[1px] border-[var(--primary-text-color)] bg-[transparent] group-hover:bg-[var(--accent-color)]"
              >
                <Icon
                  name="icon-play"
                  width={24}
                  height={21}
                  color="var(--primary-text-color)"
                />
              </button>
            </li>
          ))}
        </ul>
        {selectedVideo && (
          <YouTubeModal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            videoUrl={selectedVideo.url}
          />
        )}
      </div>
    </section>
  );
};
export default CustomerReviewsSection;
