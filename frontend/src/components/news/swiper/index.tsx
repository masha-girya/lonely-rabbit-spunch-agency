import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { INewsSingle } from "src/services/api";
import classNames from "classnames";
import { NewsCard } from "../news-card";
import styles from "./index.module.scss";
import { useDevice } from "src/hooks/useDevice";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import { useCallback, useRef, useState } from "react";

interface ISwiperNews {
  news: INewsSingle[];
}

export const SwiperNews: React.FC<ISwiperNews> = (props) => {
  const { news } = props;
  const { isMobile } = useDevice();
  const [prevOnHover, setPrevOnHover] = useState(false);
  const [nextOnHover, setNextOnHover] = useState(false);
  const [swiper, setSwiper] = useState<any | null>(null);

  const handlePrev = useCallback(() => {
    if(swiper) {
      swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if(swiper) {
      swiper.slideNext();
    }
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={14}
        slidesPerView={isMobile ? 1 : "auto"}
        freeMode={isMobile ? false : true}
        navigation={isMobile ? false : {
          prevEl: "styles.prevIcon",
          nextEl: "styles.nextIcon",
        }}
        modules={[FreeMode, Mousewheel, Pagination, Navigation]}
        pagination={{ clickable: true }}
        mousewheel={isMobile ? false : true}
        className={classNames(styles["newsList"])}
        onSwiper={(swiper)=> {setSwiper(swiper)}}
      >
        {news.map((item, i) => (
          <SwiperSlide className={styles["newsList__item"]} key={item.id + i}>
            <NewsCard card={item} />
          </SwiperSlide>
        ))}
        <div
          className={styles.prevIcon}
          onMouseEnter={() => setPrevOnHover(true)}
          onMouseLeave={() => setPrevOnHover(false)}
          onClick={handlePrev}
        >
          <PrevIcon color={prevOnHover ? "#54A178" : "#98DDB8"} />
        </div>
        <div
          className={styles.nextIcon}
          onMouseEnter={() => setNextOnHover(true)}
          onMouseLeave={() => setNextOnHover(false)}
          onClick={handleNext}
        >
          <NextIcon color={nextOnHover ? "#54A178" : "#98DDB8"} />
        </div>
      </Swiper>
    </div>
  );
};
