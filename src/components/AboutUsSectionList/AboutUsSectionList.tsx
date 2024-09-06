"use client";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks";
import { Icon } from "../Icon";
import style from "./style.module.scss";

const AboutUsSectionList = () => {
  const { t } = useTranslation();
  const itemOneRef = useRef(null);
  const itemTwoRef = useRef(null);
  const itemThreeRef = useRef(null);
  const itemFourRef = useRef(null);

  useIntersectionObserver(
    [itemOneRef, itemTwoRef, itemThreeRef, itemFourRef],
    { threshold: 0.1 },
    style.appear
  );

  return (
    <ul className="mt-[99px] lg:mt-0 flex items-center flex-wrap justify-center md:mt-[80px] lg:justify-end xl:max-w-[700px]">
      <li
        ref={itemOneRef}
        className={`${style.itemOne} flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
      >
        <Icon
          className="w-[92px] h-[32px] md:w-[188px] md:h-[66px] lg:w-[132px] lg:h-[51px] xl:w-[139px] xl:h-[46px]"
          name="icon-logo"
          size={"0px"}
        />
      </li>
      <li
        ref={itemTwoRef}
        className={`${style.itemTwo} ml-[-20px] md:ml-[-30px] px-[37px] py-[77px] flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
      >
        <Icon
          className="w-[104px] h-[66px] md:w-[213px] md:h-[136px] lg:w-[149px] lg:h-[95px] xl:w-[158px] xl:h-[100px]"
          name="icon-galaxy"
          size={"0px"}
        />
      </li>
      <li
        ref={itemFourRef}
        className={`${style.itemFour} mt-[-15px] md:mt-[-20px] px-[37px] py-[77px] flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
      >
        <Icon
          className="w-[103px] h-[20px] md:w-[211px] md:h-[41px] lg:w-[148px] lg:h-[28px] xl:w-[156px] xl:h-[38px]"
          name="icon-airbunker"
          size={"0px"}
        />
      </li>
      <li
        ref={itemThreeRef}
        className={`${style.itemThree} mt-[-15px] ml-[-20px] md:ml-[-30px] md:mt-[-20px] px-[37px] py-[77px] flex items-center xl:w-[266px] xl:h-[266px] lg:w-[252px] lg:h-[252px] md:w-[360px] md:h-[360px] w-[175px] h-[175px] justify-center rounded-[50%] border-solid border-[1px] border-[#A8A8A8] bg-[transparent]`}
      >
        <Icon
          className="w-[104px] h-[25px] md:w-[213px] md:h-[52px] lg:w-[148px] lg:h-[36px] xl:w-[156px] xl:h-[39px]"
          name="icon-vion-vr"
          size={"0px"}
        />
      </li>
    </ul>
  );
};

export default AboutUsSectionList;
