import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import classNames from "classnames";
import { RoundedFilter } from "../rounded-filter";
import { BANNER_IMGS } from "src/constants";
import styles from "./index.module.scss";

export const ImagesSwiper = () => {
  const [isSafari, setIsSafari] = useState(true);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div className={styles.images}>
      <div className={styles.images__box}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          loop={true}
          className={classNames(styles.images__boxItem, {
            [styles.images__boxItem_safari]: isSafari,
          })}
        >
          {BANNER_IMGS.map((img, i) => (
            <SwiperSlide key={img.src + i}>
              <img className={styles.images__img} src={img.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <RoundedFilter />
    </div>
  );
};
