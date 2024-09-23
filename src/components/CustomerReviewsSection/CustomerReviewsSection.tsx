"use client";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        <Slider ref={sliderRef} {...settings}>
          {CustomerReviewsList.map((item) => (
            <div
              key={item.id}
              className="group relative md:h-[261px] xl:h-[308px] h-[209px] rounded-[7px]"
              onMouseEnter={() => sliderRef.current?.slickPause()}
              onMouseLeave={() => sliderRef.current?.slickPlay()}
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
            </div>
          ))}
        </Slider>
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
