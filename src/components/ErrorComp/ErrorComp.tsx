"use client";

import { FC, useEffect } from "react";
import style from "./style.module.scss";
import bg from "../../assets/images/planet-earth-background.webp";
import Image from "next/image";
import { PrimaryButton } from "../PrimaryButton";

interface IErrorComp {
  variant: "serverError" | "notFound";
  onClick?: () => void;
  statusCode?: number;
  errorMessage?: string;
}

const ErrorComp: FC<IErrorComp> = ({
  variant,
  onClick,
  statusCode,
  errorMessage,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.bg}>
        <Image src={bg} alt="bg" layout="fill" objectFit="cover"/>
      </div>
      <div className={style.insideContentBox}>
        <h2 className={`${style.subtitle} font-manrope`}>
          Oops! Something Went Wrong :(
        </h2>
        <h1 className={`${style.title} font-manrope`}>
          {statusCode ? statusCode : "404"}
        </h1>
        <p className={`${style.text} font-manrope`}>
          {errorMessage
            ? errorMessage
            : "It seems like you've ventured into uncharted territory, and the laser beams got a bit crossed. The page you're looking for may have disappeared into the digital wilderness. But fear not, you can always return to the home and continue your laser tag business with LASERTAG.NET."}
        </p>
        <PrimaryButton
          size="small"
          type="button"
          className="font-manrope"
          onClick={onClick}
        >
          {variant === "serverError" ? "Reload" : "Back to homepage"}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ErrorComp;
