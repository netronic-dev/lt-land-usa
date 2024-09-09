"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../PrimaryButton";
import { PartnershipImagesList } from "@/constants/globalConstants";
import bg from "../../assets/images/partnershipBg.webp";
import style from "./style.module.scss";
import { useIsTablet } from "@/hooks";
import { useModals } from "@/context/ModalsProvider";

const styles: Record<
  number,
  {
    width: string;
    minWidth: string;
    height: string;
    minHeight: string;
    mt: string;
  }
> = {
  0: {
    width: "md:w-[372px] lg:w-[559px]",
    minWidth: "md:min-w-[372px] lg:max-w-[559px]",
    height: "md:h-[248px] lg:h-[373px]",
    minHeight: "md:min-h-[248px] lg:min-h-[373px]",
    mt: "md:mt-[-42px] lg:mt-[-88px]",
  },
  1: {
    width: "w-[397px] md:w-[407px] lg:w-[611px]",
    minWidth: "min-w-[397px] md:min-w-[407px] lg:max-w-[611px]",
    height: "h-[233px] md:h-[229px] lg:h-[344px]",
    minHeight: "min-h-[233px] md:min-h-[229px] lg:min-h-[344px]",
    mt: "mt-[-56px] md:mt-[-76px] lg:mt-[-111px]",
  },
  2: {
    width: "md:w-[254px] lg:w-[444px]",
    minWidth: "md:min-w-[254px] lg:max-w-[444px]",
    height: "md:h-[196px] lg:h-[295px]",
    minHeight: "md:min-h-[196px] lg:min-h-[295px]",
    mt: "mt-[-49px] md:mt-[-69px] lg:mt-[-105px]",
  },
  3: {
    width: "md:w-[230px] lg:w-[399px]",
    minWidth: "md:min-w-[230px] lg:max-w-[399px]",
    height: "md:h-[348px] lg:h-[625px]",
    minHeight: "md:min-h-[348px] lg:min-h-[625px]",
    mt: "md:mt-[-19px]",
  },
};

const PartnershipSection = () => {
  const { t } = useTranslation();
  const isTablet = useIsTablet();
  const modals = useModals();

  const [tabletStyles, setTabletStyles] = useState<boolean>(false);

  useEffect(() => {
    setTabletStyles(isTablet);
  }, [isTablet]);

  return (
    <section
      id="partnership"
      className="pt-[63px] xl:pt-[95px] overflow-hidden"
    >
      <div className="relative pt-[49px] md:pt-[66px] md:pb-[59px] pb-[38px] bg-partnership-mobile md:bg-partnership-tablet lg:bg-partnership-tablet-big xl:bg-partnership-desktop bg-center bg-contain md:bg-cover xl:bg-cover bg-no-repeat">
        <div className="z-10 absolute w-full h-[14%] md:h-[60%] bottom-[55px] lg:bottom-[5px] xl:bottom-0 right-0">
          <Image src={bg} alt="partnership-bg" layout="fill" />
        </div>
        <div className="container flex flex-col md:gap-[10px] md:justify-between md:flex-row md:items-center pt-[105px] md:pt-0 md:overflow-y-hidden">
          <div className="md:max-w-[331px] lg:max-w-[446px] xl:max-w-[468px]">
            <h2 className="xl:max-w-[488px] mb-[35px] text-[var(--primary-text-color)] lg:max-w-[473px] lg:mb-[29px] font-manrope text-[40px] leading-[57px] font-extrabold text-center md:text-start">
              {t("partnershipSection.title")}{" "}
            </h2>
            <h4 className="text-[var(--primary-text-color)] font-manrope text-[20px] mb-[18px] text-center md:text-start">
              {t("partnershipSection.subtitle")}
              <span className="text-[var(--accent-color)]">
                {" "}
                {t("partnershipSection.subtitleSpan")}
              </span>
            </h4>
            <p className="text-[var(--primary-text-color)] font-manrope text-[18px] text-center md:text-start mb-[30px]">
              {t("partnershipSection.description")}
            </p>
            <h3 className="text-[var(--primary-text-color)] font-manrope text-[28px] font-extrabold text-center md:text-start mb-[23px]">
              <span className="text-[var(--accent-color)]">
                {t("partnershipSection.subtextSpan")}
              </span>{" "}
              {t("partnershipSection.subtext")}
            </h3>
            <p className="text-[var(--primary-text-color)] font-manrope text-[18px] text-center md:text-start mb-[23px] max-w-[329px] lg:max-w-[405px]">
              {t("partnershipSection.text")}
            </p>
            <div className="flex justify-center md:mt-[54px] lg:mt-[60px] md:justify-start">
              {" "}
              <PrimaryButton
                size="large"
                onClick={modals.formPartnershipChangeVisibility}
                className="z-10"
              >
                {t("partnershipSection.btnText")}
              </PrimaryButton>
            </div>
          </div>
          <ul
            className={`${style.list} lg:z-1 lg:h-[699px] flex flex-col md:gap-[20px] overflow-x-hidden items-center`}
          >
            {PartnershipImagesList.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === 3
                    ? "w-[50%] min-w-[50%]"
                    : item.id === 1
                    ? "w-[397px] min-w-[397px]"
                    : "w-full min-w-full"
                } h-[265px] relative ${
                  item.id in styles
                    ? `${styles[item.id].width} ${styles[item.id].minWidth} ${
                        styles[item.id].height
                      } ${styles[item.id].minHeight} ${styles[item.id].mt}`
                    : ""
                } ${tabletStyles ? style.swingDesktop : style.swing}`}
              >
                <Image src={item.image} alt={item.alt} layout="fill" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default PartnershipSection;
