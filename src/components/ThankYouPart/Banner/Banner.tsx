import Image from "next/image";
import style from "./style.module.scss";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 150}px,${y / 150}px,0)`;
const trans2 = (x: number, y: number) =>
  `translate3d(${x / 50}px,${y / 50}px,0)`;

const Banner = (props: any) => {
  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <section
      className={style.section}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className={style.wrapper}>
        <div className={style.images_wrapper}>
          <animated.div
            style={{ transform: springProps.xy.to(trans2) }}
            className={`${style.image} ${style.image_1}`}
          >
            <Image
              src={props.image_2}
              fill
              sizes="100vw"
              loading="lazy"
              style={{
                objectFit: "contain",
              }}
              alt="image_banner_two"
            />
          </animated.div>
          <animated.div
            style={{ transform: springProps.xy.to(trans1) }}
            className={`${style.image} ${style.image_2}`}
          >
            <Image
              src={props.image_1}
              fill
              sizes="100vw"
              loading="lazy"
              style={{
                objectFit: "contain",
              }}
              alt="image_banner_one"
            />
          </animated.div>
        </div>
        <div className={style.content_cell}>
          <h2 className={style.title}>{props.title}</h2>
          <Link href={props.buttonLink || ""} target="_blank">
            <button className={style.button}>{props.buttonText}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
