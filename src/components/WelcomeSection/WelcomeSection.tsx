"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import WelcomeFirstImg from "../../assets/images/welcome-one.webp";
import WelcomeSecondImg from "../../assets/images/welcome-two.webp";

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-[48px] flex flex-col items-center xl:bg-welcome-hero-desktop md:bg-welcome-hero-mobile-big lg:bg-welcome-hero-tablet bg-welcome-hero-mobile bg-center bg-cover">
      <h2 className="lg:max-w-[771px] lg:px-0 lg:mb-[27px] xl:mb-[21px] lg:text-[40px] xl:text-[45px] font-manrope text-[var(--primary-text-color)] mb-[21px] md:mb-[32px] text-[25px] md:text-[35px] md:leading-[44px] text-center px-[20px] md:px-[40px]">
        {t("welcomeSection.title.title")}{" "}
        <span className="text-[var(--accent-color)]">
          {t("welcomeSection.title.titleSpan")}
        </span>
      </h2>
      <p className="xl:text-[20px] lg:px-0 lg:max-w-[810px] text-[var(--primary-text-color)] font-manrope text-[18px] px-4 text-center mb-8 md:px-[55px] md:mb-0">
        {t("welcomeSection.text")}
      </p>
      <div className="flex justify-center md:mt-[-34px] md:mb-[43px] ml-3 lg:mt-0">
        <div className="w-[227px] h-[147px] relative md:w-[401px] md:h-[268px] lg:w-[485px] lg:h-[324px] xl:w-[613px] xl:h-[409px]">
          <Image
            src={WelcomeFirstImg}
            alt="Welcome-first-image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[235px] h-[149px] relative md:w-[433px] md:h-[288px] md:ml-[-155px] mt-[25px] ml-[-99px] lg:w-[524px] lg:h-[349px] xl:w-[663px] xl:h-[441px]">
          <Image
            src={WelcomeSecondImg}
            alt="Welcome-second-image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
