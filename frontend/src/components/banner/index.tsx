import { Button } from "@components/button";
import styles from "./index.module.scss";
import { Header } from "@components/header";
import { useEffect, useRef, useState } from "react";
import { BANNER_IMGS } from "src/constants";
import { useSpringCarousel } from "react-spring-carousel";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const Banner = () => {
  const [title, setTitle] = useState(
    "Lonely Rabbit: Into the Realm of Darkness and Fear"
  );
  const ref = useRef<any | null>(null);
  const refBox = useRef<any | null>(null);

  const [images, setImages] = useState([...BANNER_IMGS]);
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  // const { carouselFragment, slideToItem, slideToNextItem, getCurrentActiveItem } = useSpringCarousel({
  //   withLoop: true,
  //   initialActiveItem: 0,
  //   initialStartingPosition: "start",
  //   items: images.map((item, index) => ({
  //     id: item.src,
  //     renderItem: (
  //       <img className={styles.banner__images__img} src={item.src} ref={ref} />
  //     ),
  //   })),
  // });

  // const slideToNextItem = () => {
  //   if (refBox.current && ref.current) {
  //     const translateAmount = ref.current.offsetWidth;
  //     setTranslate(-translateAmount * currImgIndex);
  //     setCurrImgIndex((prev) => prev + 1);
  //     if (currImgIndex === BANNER_IMGS.length - 1) {
  //       setImages((prev) => [
  //         ...BANNER_IMGS.slice(BANNER_IMGS.length),
  //         ...BANNER_IMGS,
  //       ]);
  //       setCurrImgIndex(0);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const timer = setInterval(slideToNextItem, 5000);

  //   return () => clearInterval(timer);
  // });

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
            <div className={styles.banner__images__boxItem}>
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
              >
                {images.map((img, i) => (
                  <SwiperSlide key={img.src + i}>
                    <img
                      className={styles.banner__images__img}
                      src={img.src}
                      ref={ref}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
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
