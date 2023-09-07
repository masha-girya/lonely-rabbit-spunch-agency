import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "../news-card";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import { Circles } from "@components/circles";

interface IDesktopNews {
  news: typeof NEWS_MOCK;
}

export const DesktopNews: React.FC<IDesktopNews> = (props) => {
  const { news } = props;
  const ref = useRef<any | null>(null);
  const [prevOnHover, setPrevOnHover] = useState(false);
  const [nextOnHover, setNextOnHover] = useState(false);
  const [circleCounter, setCircleCounter] = useState(1);

  const cardLength = 614;

  const slideNext = () => {
    if (circleCounter < news.length - 1 && ref.current) {
      ref.current.scrollTo(ref.current.scrollLeft + cardLength, 0);
      setCircleCounter((prev) => prev + 1);
    }
  };

  const slidePrev = () => {
    if (circleCounter !== 1 && ref.current) {
      ref.current.scrollTo(ref.current.scrollLeft - cardLength, 0);
      setCircleCounter((prev) => prev - 1);
    }
  };

  const slideTo = (id: number) => {
    const targetScrollX = (id - 1) * cardLength;

    ref.current.scrollTo({
      left: targetScrollX,
    });
  };

  const handleScroll = () => {
    if (ref.current) {
      const currCircle = Math.ceil(ref.current.scrollLeft / cardLength);
      if (currCircle === news.length - 1) {
        setCircleCounter(currCircle);
      } else {
        setCircleCounter(currCircle + 1);
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
            <NewsCard key={item.id} card={item} />
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
        {news.slice(0, -1).map((item, i) => (
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
