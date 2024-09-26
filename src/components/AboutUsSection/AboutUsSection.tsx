import Image from "next/image";
import { Icon } from "../Icon";
import ellipseBgAboutUs from "../../assets/images/bg/ellipseBgAboutUs.webp";
import style from "./style.module.scss";
import { AboutUsSectionList } from "../AboutUsSectionList";

const AboutUsSection = ({ t }: { t: (key: string) => string }) => {
  return (
    <section
      id="about"
      className="overflow-hidden pt-[69px] pb-[74px] md:pb-[99px] xl:pb-[97px] relative overflow-x-hidden"
    >
      <div className="absolute w-[160%] xl:h-[95%] xl:w-[99%] h-[22%] md:h-[38%] md:w-[147%] md:top-[123px] md:right-[-98%] top-[52%] right-[-102%] lg:h-[64%] xl:top-[33px] lg:top-[123px] lg:right-[-74%] lg:w-[104%] xl:right-[-65%] z-[-1]">
        <Image
          src={ellipseBgAboutUs}
          alt="ellipseBg"
          fill
          priority={false}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="container lg:flex lg:items-center lg:justify-between">
        <div className="lg:max-w-[442px] xl:min-w-[530px]">
          <h2 className="text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold mb-[20px] md:mb-[38px] lg:mb-[41px]">
            {t("aboutUsSection.title")}
          </h2>
          <p className="max-w-[278px] md:max-w-[371px] text-[var(--primary-text-color)] font-manrope text-[16px] font-extrabold md:mb-[16px] mb-[26px] lg:mb-[39px]">
            {t("aboutUsSection.subtitle")}
          </p>
          <p className="text-[var(--primary-text-color)] font-manrope text-[18px] mb-[43px] lg:mb-[41px] md:mb-[50px] xl:mb-[24px] xl:max-w-[530px]">
            {t("aboutUsSection.description")}
          </p>
          <div className="flex items-center md:gap-[41px] justify-between md:justify-start md:items-start lg:gap-[21px]">
            <p className="max-w-[217px] md:max-w-[344px] text-[var(--primary-text-color)] font-manrope text-[23px] font-bold xl:max-w-[377px]">
              {t("aboutUsSection.bottomText.text")}{" "}
              <span className="text-[var(--accent-color)]">
                {t("aboutUsSection.bottomText.textSpan")}
              </span>
            </p>
            <a
              aria-label="Icon play"
              href="https://www.youtube.com/watch?v=JkCltZm1kb4"
              target="_blank"
              rel="noreferrer"
              className="relative transition-all cursor-pointer w-[81px] h-[81px] xl:w-[77px] xl:h-[77px] flex items-center justify-center rounded-[50%] border-solid border-[1px] border-[var(--primary-text-color)] bg-[#050A1B] hover:bg-[var(--accent-color)]"
            >
              <Icon
                name="icon-play"
                width={24}
                height={21}
                color="var(--primary-text-color)"
              />
              <div
                className={`${style.circle} w-[121px] h-[121px] rounded-full flex items-center justify-center shrink-0 border-solid border-[1px] border-[#656565]`}
              >
                <div
                  className={`${style.circle} w-[109px] h-[109px] rounded-full flex items-center justify-center shrink-0 border-solid border-[1px] border-[#656565]`}
                >
                  <div
                    className={`${style.circle} w-[97px] h-[97px] rounded-full border-solid border-[1px] border-[var(--primary-text-color)] flex items-center justify-center shrink-0`}
                  ></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <AboutUsSectionList />
      </div>
    </section>
  );
};
export default AboutUsSection;
