import { FC } from "react";
import { Controller } from "react-hook-form";

interface IInput {
  name: string;
  placeholder: string;
  error?: string;
  rules?: object;
  control: any;
}

const Input: FC<IInput> = ({
  name,
  placeholder,
  error,
  rules = {},
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="w-full relative">
          <input
            className={`outline-none placeholder:font-manrope placeholder:text-[#000] w-full rounded-[8px] h-[55px] py-[16px] px-[14px] border-solid border-[1px] ${
              error ? "border-[var(--error-color)]" : "border-[#000]"
            } bg-[#fff]`}
            {...field}
            placeholder={placeholder}
          />
          <p className="absolute text-[var(--error-color)] left-0 bottom-[-16px] text-[12px] font-manrope">
            {error}
          </p>
        </div>
      )}
    />
  );
};

export default Input;
