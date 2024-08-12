"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NetworksList, InfoFooterList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import { useIsDesktop, useIsTablet } from "@/hooks";
import style from "./style.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const [tabletStyles, setTabletStyles] = useState<boolean>(false);
  const [desktopStyles, setDesktopStyles] = useState<boolean>(false);

  useEffect(() => {
    setTabletStyles(isTablet);
  }, [isTablet]);

  useEffect(() => {
    setDesktopStyles(isDesktop);
  }, [isDesktop]);

  return (
    <footer id="contact" className="pb-[20px] md:pb-[100px] xl:pt-[114px]">
      <div className="container">
        <ul className="flex flex-col md:flex-row gap-5 mb-[50px] lg:justify-center md:flex-wrap xl:flex-nowrap md:gap-[19px]">
          {InfoFooterList.map((item) => (
            <li
              key={item.id}
              className={`${
                item.title && style.footerInfoWidthBox
              } xl:w-[350px] ${
                style.footerItemTabletWidth
              } pt-[41px] pl-[42px] pr-[23px] pb-[62px] bg-[var(--secondary-bg-color)] rounded-[20px]`}
            >
              <h2 className="text-[var(--accent-color)] text-[14px] font-roboto mb-[18px]">
                {item.title
                  ? t("footer.supportInfo.title")
                  : item.country === "USA"
                  ? t("footer.usaInfo.country")
                  : t("footer.europeInfo.country")}
              </h2>
              {!item.title && (
                <>
                  <h3 className="text-[#8E8E8E] mb-[7px] font-roboto text-[12px]">
                    {t("footer.addressTitle")}
                  </h3>
                  <p className="text-[var(--primary-text-color)] mb-[38px] font-roboto text-[24px] font-medium leading-7">
                    {item.country === "USA" ? (
                      !tabletStyles || desktopStyles ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: t("footer.usaInfo.address").replace(
                              /,/g,
                              "<br />"
                            ),
                          }}
                        />
                      ) : (
                        t("footer.usaInfo.address")
                      )
                    ) : (
                      t("footer.europeInfo.address")
                    )}
                  </p>
                </>
              )}
              <div className={`${item.title && style.footerInfoTabletBox}`}>
                <div>
                  <h3 className="text-[#8E8E8E] mb-[7px] font-roboto text-[12px]">
                    {t("footer.emailTitle")}
                  </h3>
                  <a
                    className="hover:text-[#606060] transition-all text-[var(--primary-text-color)] cursor-pointer font-roboto text-[24px] font-medium leading-7 underline"
                    href="mailto:sales@lasertag.net"
                  >
                    sales@lasertag.net
                  </a>
                </div>
                <div>
                  <h3
                    className={`${item.title && "md:mt-0"} ${
                      item.title && "lg:mt-[32px]"
                    } text-[#8E8E8E] mb-[7px] font-roboto text-[12px] mt-[32px]`}
                  >
                    {t("footer.phoneTitle")}
                  </h3>
                  <div
                    className={`${item.title && "md:gap-[69px]"} ${
                      item.title && "lg:gap-0"
                    } flex justify-between`}
                  >
                    <a
                      className="hover:text-[#606060] transition-all text-[var(--primary-text-color)] cursor-pointer font-roboto text-[24px] font-medium leading-[22px]"
                      href="tel:{item.phone}"
                    >
                      {item.phone}
                    </a>
                    <a
                      href={item.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer"
                    >
                      <Icon name="icon-whatsapp" width={22} height={22} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col">
          <div className="flex justify-center gap-2 md:gap-4 items-center mb-[32px] md:mb-[28px]">
            <Icon
              name="icon-logo"
              size={"0px"}
              className=" w-[147px] h-[61px] md:w-[169px] md:h-[69px]"
            />
            <p className="text-[var(--primary-text-color)] font-manrope text-[10px] uppercase md:text-[16px]">
              {t("footer.partOfText")}
            </p>
            <a href="https://netronic.net/" target="_blank" rel="noreferrer">
              <Icon
                name="icon-netronic"
                size={"0px"}
                className="md:w-[164px] md:h-[26px] w-[84px] h-[13px] text-[var(--primary-text-color)] hover:text-[var(--accent-color)] cursor-pointer transition-all"
              />
            </a>
          </div>
          <p className="text-[var(--primary-text-color)] font-manrope text-[14px] md:text-[19px] text-center mb-[18px] md:mb-[46px] xl:mb-[52px]">
            {t("footer.followUsText")}
          </p>
          <ul className="flex flex-row justify-between mb-[35px] md:mb-[49px] md:gap-[79px] md:justify-center">
            {NetworksList.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#606060] transition-all text-[var(--primary-text-color)] cursor-pointer"
                >
                  <Icon
                    name={item.iconName}
                    size={"0px"}
                    className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]"
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center text-[var(--primary-text-color)] font-roboto text-[16px] text-opacity-40">
            <span className="cursor-pointer">
              <a
                href="https://lasertag.net/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.privacyText")}
              </a>
            </span>
            <br />
            {t("footer.copyrightText")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
