"use client";

import { FC, useCallback, useState } from "react";
import Select, {
  components,
  StylesConfig,
  SingleValue,
  DropdownIndicatorProps,
} from "react-select";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import { ILanguages, LANGUAGES } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import i18nConfig from "@/app/i18nConfig";

interface Option {
  value: string;
  label: string;
}

interface IProps {
  width?: string;
}

const ChangeLanguage: FC<IProps> = ({ width }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

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
      }
    },
    [currentLocale, currentPathname, router]
  );

  const handleMenuOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  const customStyles: StylesConfig<ILanguages, false> = {
    control: (provided) => ({
      ...provided,
      flexShrink: 0,
      border: "1px solid var(--accent-color)",
      borderRadius: "2px",
      boxShadow: "none",
      backgroundColor: "transparent",
      width: width && width,
      height: "31px",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--primary-text-color)",
      fontSize: "14px",
      fontWeight: "800",
      fontFamily: "Manrope",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      paddingRight: "8px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "2px",
      border: "1px solid var(--accent-color)",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      backgroundColor: "rgba(6, 6, 6, 0.50)",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: "800",
      fontFamily: "Manrope",
      backgroundColor: "rgba(6, 6, 6, 0.50)",
      textAlign: "center",
      color: "var(--primary-text-color)",
      cursor: "pointer",
      "&:hover": {
        color: "var(--accent-color)",
        backgroundColor: "rgba(255, 255, 255, 0.20)",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  const DropdownIndicator = (
    props: DropdownIndicatorProps<ILanguages, false>
  ) => {
    const { selectProps } = props;
    const isMenuOpen = selectProps.menuIsOpen;
    return (
      <components.DropdownIndicator {...props}>
        {isMenuOpen ? (
          <Icon name="icon-arrow-up" width={7} height={7} />
        ) : (
          <Icon name="icon-arrow-down" width={7} height={7} />
        )}
      </components.DropdownIndicator>
    );
  };

  const formatOptionLabel = ({ label }: ILanguages) => (
    <div>
      <span>{label}</span>
    </div>
  );

  return (
    <Select
      options={LANGUAGES.map((lang) => ({
        label: lang.label,
        value: lang.value,
      }))}
      defaultValue={LANGUAGES.find((lang) => lang.value === currentLocale)}
      onChange={handleChange}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      isSearchable={false}
      components={{ DropdownIndicator }}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      menuIsOpen={menuIsOpen}
    />
  );
};

export default ChangeLanguage;
