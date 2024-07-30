"use client";

import { FC, useState } from "react";
import Select, {
  components,
  DropdownIndicatorProps,
  StylesConfig,
} from "react-select";
import { ISelectBudgetOptions } from "@/constants/globalConstants";
import { Controller } from "react-hook-form";

interface IChangeBudgetOptions {
  control: any;
  name: string;
  options: ISelectBudgetOptions[];
  error?: string;
  placeholder: string;
}

const ChangeBudgetOptions: FC<IChangeBudgetOptions> = ({
  control,
  name,
  options,
  error,
  placeholder,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    
  const customStyles: StylesConfig<ISelectBudgetOptions, false> = {
    control: (provided) => ({
      ...provided,
      boxSizing: "border-box",
      width: "100%",
      height: "55px",
      borderRadius: "8px",
      border: "1px solid #777",
      fontFamily: "Manrope",
      color: "#777",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      outline: 0,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Manrope",
      color: "#000",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
      fontFamily: "Manrope",
      color: "#000",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
    }),
    option: (provided) => ({
      ...provided,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#000",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      fontFamily: "Manrope",
    }),
  };

  const handleMenuOpen = () => setMenuIsOpen(true);
  const handleMenuClose = () => setMenuIsOpen(false);

  const DropdownIndicator = (
    props: DropdownIndicatorProps<ISelectBudgetOptions, false>
  ) => {
    const { selectProps } = props;
    const isMenuOpen = selectProps.menuIsOpen;
    return (
      <components.DropdownIndicator {...props}>
        {isMenuOpen ? (
          <svg id="icon-arrow-down" viewBox="0 0 37 32" width={12} height={12}>
            <path
              fill="#000"
              d="M18.667 32l-16.166-28h32.332l-16.166 28z"
            ></path>
          </svg>
        ) : (
          <svg id="icon-arrow-up" viewBox="0 0 37 32" width={12} height={12}>
            <path fill="#000" d="M18.667 0l16.166 28h-32.332l16.166-28z"></path>
          </svg>
        )}
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="relative w-full">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            placeholder={placeholder}
            options={options}
            isSearchable={false}
            components={{ DropdownIndicator }}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
            menuIsOpen={menuIsOpen}
            styles={customStyles}
          />
        )}
      />
      {error && (
        <p className="absolute text-[var(--error-color)] left-0 bottom-[-16px] text-[12px] font-manrope">
          {error}
        </p>
      )}
    </div>
  );
};

export default ChangeBudgetOptions;
