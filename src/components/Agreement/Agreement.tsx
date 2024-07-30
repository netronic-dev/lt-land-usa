import { FC } from "react";
import { Controller } from "react-hook-form";
import style from "./style.module.scss";

interface IAgreement {
  error?: string;
  agreementText: string;
  agreementLinkSpanText: string | undefined;
  agreementLink?: string;
  control: any;
  name: string;
  onClick: () => void;
}
const Agreement: FC<IAgreement> = ({
  error,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
  control,
  name,
  onClick,
}) => {
  return (
    <div className="relative mt-[18px] mb-[49px]">
      <div className="flex items-center gap-[11px]">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className={`${style.agreement}`}>
              <button
                type="button"
                onClick={onClick}
                className={`${style.checkBox} ${
                  field.value ? style.checkBox_active : ""
                }`}
              >
                <div className={style.checkBox_inside} />
              </button>
            </div>
          )}
        />
        <label
          className="font-manrope text-[var(--primary-text-color)] text-[14px] leading-[23px]"
          htmlFor={name}
        >
          {agreementText}{" "}
          <span className="text-[var(--accent-color)] cursor-pointer underline">
            <a href={agreementLink ? agreementLink : "/privacy"}>
              {agreementLinkSpanText}
            </a>
          </span>
        </label>
      </div>
      {error && (
        <p className="absolute text-[var(--error-color)] left-0 bottom-[-16px] text-[12px] font-manrope">
          {error}
        </p>
      )}
    </div>
  );
};
export default Agreement;
