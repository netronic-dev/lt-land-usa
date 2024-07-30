"use client";

import { useTranslation } from "react-i18next";
import { SingleValue } from "react-select";
import { useCallback, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LANGUAGES } from "@/constants/globalConstants";
import i18nConfig from "@/app/i18nConfig";

interface Option {
  value: string;
  label: string;
}

const ChangeLanguageMobile = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLocale);

  const handleChange = useCallback(
    (selectedOption: SingleValue<Option>) => {
      if (selectedOption) {
        const newLocale = selectedOption.value;
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "; expires=" + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        if (currentLocale === i18nConfig.defaultLocale) {
          router.push("/" + newLocale + currentPathname);
        } else {
          router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
          );
        }

        router.refresh();
        setSelectedLanguage(selectedOption.value);
      }
    },
    [currentLocale, currentPathname, router]
  );

  return (
    <ul className="flex gap-[20px] md:hidden mt-[23px]">
      {LANGUAGES.map((item, index) => (
        <li
          onClick={() => handleChange(item)}
          key={index}
          className={`${
            selectedLanguage === item.value
              ? "bg-[#69acf74d]"
              : "bg-[transparent]"
          } py-[10px] px-[15px] rounded-[2px] cursor-pointer transition-all border-solid border-[1px] border-[var(--accent-color)] hover:bg-opacity-30 focus:bg-opacity-30 focus:bg-[#69acf7] hover:bg-[#69acf7]`}
        >
          <button className="text-[var(--primary-text-color)] font-manrope text-[14px] font-extrabold">
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ChangeLanguageMobile;
