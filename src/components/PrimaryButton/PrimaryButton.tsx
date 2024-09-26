import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import style from "./style.module.scss";

interface Props {
  children?: ReactNode;
  size?: "small" | "medium" | "mediumThinner" | "large" | "largeThinner";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  variant?: VariantProps<typeof button>["intent"];
  disabled?: boolean;
  className?: string;
}

const button = cva("button", {
  variants: {
    intent: {
      order: [
        "bg-[var(--accent-color)]",
        "text-[var(--secondary-text-color)] font-bold uppercase font-manrope",
        "flex justify-center items-center",
        "border-transparent",
        "rounded-[7px]",
        "transition-colors cursor-pointer",
      ],
    },
    size: {
      small: ["text-[14px] tracking-[0.28px] w-[203px] h-[45px]"],
      medium: ["text-[16px] tracking-[0.32px] px-[25px] py-[20px]"],
      mediumThinner: [
        "text-[16px] tracking-[0.32px] px-[25px] py-[20px] h-[56px]",
      ],
      large: ["text-[18px] tracking-[0.28px] px-[25px] py-[20px]"],
      largeThinner: [
        "text-[18px] tracking-[0.28px] px-[25px] py-[20px] w-[345px] h-[65px]",
      ],
    },
  },
  defaultVariants: {
    intent: "order",
    size: "medium",
  },
});

const PrimaryButton: FC<Props> = ({
  children,
  type,
  onClick,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${button({ ...props, intent: "order" })} ${style.button} ${
        className && className
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
