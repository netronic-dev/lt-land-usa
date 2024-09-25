import Image from "next/image";
import style from "./style.module.scss";
import loaderImg from "../../assets/images/loaderImg.webp";
import circleImg from "../../assets/images/circle.webp";

const Loader = () => {
  return (
    <div className={`${style.container}`}>
      <div
        className={`${style.animatedImageContainer} relative flex items-center justify-center w-[300px] h-[300px] rounded-full border-[2px] border-solid border-[var(--accent-color)]`}
      >
        <div
          className={`${style.animatedCircle} absolute w-[25px] h-[25px] z-10`}
        >
          <Image
            src={circleImg}
            alt="circleImg"
            layout="fill"
            objectFit="cover"
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div
          className={`${style.animatedImageBox} relative w-[253px] h-[253px] rounded-full`}
        >
          <Image
            src={loaderImg}
            alt="loaderImg"
            layout="fill"
            objectFit="cover"
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
