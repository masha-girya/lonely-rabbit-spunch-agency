import { Button } from "@components/button";
import styles from "./index.module.scss";
import { Header } from "@components/header";
import { useState } from "react";
import { BANNER_IMGS } from "src/constants";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export const Banner = () => {
  const [title, setTitle] = useState(
    "Lonely Rabbit: Into the Realm of Darkness and Fear"
  );
  const [images, setImages] = useState([...BANNER_IMGS]);

  return (
    <div className={styles.banner}>
      <Header />
      <div className={styles.banner__bannerContainer}>
        <div className={styles.banner__content}>
          <h1>{title}</h1>
          <div className={styles.banner__content__button}>
            <Button onClick={() => {}} name="Play Now" />
          </div>
        </div>
        <div className={styles.banner__images}>
          <div className={styles.banner__images__box}>
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay]}
              loop={true}
              className={styles.banner__images__boxItem}
            >
              {images.map((img, i) => (
                <SwiperSlide key={img.src + i}>
                  <img className={styles.banner__images__img} src={img.src} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <svg
            style={{ visibility: "hidden", position: "absolute" }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="round">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="20"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          className={classNames(
            styles.banner__content__button,
            styles.banner__content__button_mob
          )}
        >
          <Button onClick={() => {}} name="Play Now" />
        </div>
      </div>
    </div>
  );
};
