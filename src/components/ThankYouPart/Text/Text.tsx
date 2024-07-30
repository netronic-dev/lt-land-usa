import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";

const Text = (props: any) => {
  return (
    <section className={style.section}>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.text}>{props.text}</p>
      {props.image && (
        <Link href={props.link || "#"} target="_blank">
          <div className={style.image}>
            <div className={style.image_desktop}>
              <Image
                src={props.image}
                fill
                sizes="100vw"
                style={{
                  objectFit: props.objectFit,
                  objectPosition: `${props.objectPosition}`,
                }}
                alt="Image"
              />
            </div>
            {props.imageResponsive && (
              <div className={style.image_responsive}>
                <Image
                  src={props.imageResponsive}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: props.objectFitResponsive,
                    objectPosition: `${props.objectPositionResponsive}`,
                  }}
                  alt=""
                />
              </div>
            )}
          </div>
        </Link>
      )}
    </section>
  );
};

export default Text;
