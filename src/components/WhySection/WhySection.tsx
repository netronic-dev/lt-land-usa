import { WhySectionList } from "../WhySectionList";

const WhySection = ({ t }: { t: (key: string) => string }) => {
  return (
    <section
      id="why"
      className="xl:pt-[101px] xl:px-[180px] pt-[101px] pb-[71px] md:pb-[59px] xl:pb-[101px] overflow-hidden"
    >
      <h2 className="px-[30px] md:mb-[39px] lg:mb-[21px] mb-[54px] xl:px-0 text-[var(--primary-text-color)] font-manrope text-[40px] leading-[57px] font-extrabold text-center md:text-start">
        {t("whySection.title.title")} <br />
        <span className="text-[var(--accent-color)]">
          {t("whySection.title.titleSpan")}
        </span>
      </h2>
      <WhySectionList />
    </section>
  );
};

export default WhySection;
