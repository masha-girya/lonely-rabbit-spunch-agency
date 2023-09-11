import { Button } from "@components/button";
import styles from "./index.module.scss";
import { Header } from "@components/header";
import { useEffect, useRef, useState } from "react";
import { BANNER_IMGS } from "src/constants";
import { useSpringCarousel } from "react-spring-carousel";
import classNames from "classnames";

export const Banner = () => {
  const [title, setTitle] = useState(
    "Lonely Rabbit: Into the Realm of Darkness and Fear"
  );
  const ref = useRef<any | null>(null);

  const [images, setImages] = useState(BANNER_IMGS);

  const { carouselFragment, slideToItem, slideToNextItem, getCurrentActiveItem } = useSpringCarousel({
    withLoop: true,
    initialActiveItem: 0,
    items: images.map((item, index) => ({
      id: item.src,
      renderItem: (
        <img className={styles.banner__images__img} src={item.src} ref={ref} />
      ),
    })),
  });

  useEffect(() => {
    const timer = setInterval(slideToNextItem, 5000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    setTimeout(() => {
      slideToItem(BANNER_IMGS[0].src)
    }, 100)
  }, []);

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
              {carouselFragment}
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
        <div className={classNames(styles.banner__content__button, styles.banner__content__button_mob)}>
          <Button onClick={() => {}} name="Play Now" />
        </div>
      </div>
    </div>
  );
};
