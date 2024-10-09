"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useIsTablet } from "@/hooks";
import { useTranslation } from "react-i18next";

const StaticForm = dynamic(() => import("../StaticForm/StaticForm"), {
  ssr: false,
});

const LookForwardSection = () => {
  const isTablet = useIsTablet();
  const { t } = useTranslation();
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const lookForwardSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBackgroundLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (lookForwardSectionRef.current) {
      observer.observe(lookForwardSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={lookForwardSectionRef}
      className={`pt-[150px] pb-[99px] md:pt-[98px] lg:pb-[256px] md:pb-[142px] xl:pb-[48px] xl:pt-[102px] ${
        backgroundLoaded
          ? "bg-forward-mobile md:bg-bg-forward-tablet lg:bg-forward-desktop bg-cover md:bg-contain xl:bg-cover bg-no-repeat bg-center"
          : ""
      }`}
    >
      <div className="container flex flex-col items-center overflow-x-hidden">
        <h3 className="lg:max-w-[916px] text-[var(--primary-text-color)] font-manrope text-[23px] md:text-[40px] md:leading-[57px] font-extrabold text-center mb-[31px]">
          {t("lookForwardSection.title")} {!isTablet && <br />}
          <span className="text-[var(--accent-color)]">
            {t("lookForwardSection.titleSpan")}
          </span>
        </h3>
        <div className="min-w-full md:min-w-[560px] flex justify-center">
          <StaticForm
            titleForm={t("lookForwardSection.titleStaticForm")}
            textForm={t("lookForwardSection.textStaticForm")}
            textBtn={t("lookForwardSection.textBtn")}
            destinationURL="https://back.netronic.net/forms"
            orderOldName="Consultation order | LT NET USA"
            letterId={3421159}
            fromName="Lasertag"
            namePlaceholder={t("lookForwardSection.namePlaceholder")}
            emailPlaceholder={t("lookForwardSection.emailPlaceholder")}
            budgetPlaceholder={t("lookForwardSection.budgetPlaceholder")}
            thank_you_page="/thanks/call"
            googleAuthBtnText={t("lookForwardSection.googleAuthBtnText")}
            googleAuthBtnSpan={t("lookForwardSection.googleAuthBtnSpan")}
            googleAuthClearBtnText={t(
              "lookForwardSection.googleAuthClearBtnText"
            )}
            googleAuthChangeBtnText={t(
              "lookForwardSection.googleAuthChangeBtnText"
            )}
            agreementText={t("lookForwardSection.agreementText")}
            agreementLinkSpanText={t(
              "lookForwardSection.agreementLinkSpanText"
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default LookForwardSection;
