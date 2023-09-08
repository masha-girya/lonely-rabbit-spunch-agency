import styles from "./index.module.scss";
import { useRef, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "../news-card";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import { Circles } from "@components/circles";
import { useSwiper } from "src/hooks/useSwiper";

interface IDesktopNews {
  news: typeof NEWS_MOCK;
  cardLength: number;
  circles: typeof NEWS_MOCK;
}

export const DesktopNews: React.FC<IDesktopNews> = (props) => {
  const { news, cardLength, circles } = props;
  const [prevOnHover, setPrevOnHover] = useState(false);
  const [nextOnHover, setNextOnHover] = useState(false);

  const ref = useRef<any | null>(null);

  const {
    circleCounter,
    handleTouchEnd,
    handleTouchStart,
    slideNext,
    slidePrev,
    slideTo,
  } = useSwiper({ cardLength, ref, dataArray: news });

  return (
    <div>
      <div className={styles.cards}>
        <button
          type="button"
          className={styles.cards__prevIcon}
          onClick={slidePrev}
          onMouseEnter={() => setPrevOnHover(true)}
          onMouseLeave={() => setPrevOnHover(false)}
        >
          <PrevIcon color={prevOnHover ? "#54A178" : "#98DDB8"} />
        </button>
        <div ref={ref} className={styles.cards__container}>
          {news.map((item, i) => (
            <div
              onTouchEnd={(e) => handleTouchEnd(e, item.id)}
              onTouchStart={handleTouchStart}
              key={item.id}
              className={styles.cardWrapper}
            >
              <NewsCard key={item.id} card={item} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className={styles.cards__nextIcon}
          onClick={slideNext}
          onMouseEnter={() => setNextOnHover(true)}
          onMouseLeave={() => setNextOnHover(false)}
        >
          <NextIcon color={nextOnHover ? "#54A178" : "#98DDB8"} />
        </button>
      </div>
      <div className={styles.swiper}>
        {circles.map((item, i) => (
          <Circles
            key={item.id}
            highlighted={item.id === circleCounter}
            handleMove={() => slideTo(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
