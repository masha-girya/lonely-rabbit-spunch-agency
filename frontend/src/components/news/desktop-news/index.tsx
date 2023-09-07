import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "../news-card";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import { Circles } from "@components/circles";
import { useDevice } from "src/hooks/useDevice";

interface IDesktopNews {
  news: typeof NEWS_MOCK;
  cardLength: number;
  circles: typeof NEWS_MOCK;
}

export const DesktopNews: React.FC<IDesktopNews> = (props) => {
  const { news, cardLength, circles } = props;
  const { isMobile } = useDevice();
  const ref = useRef<any | null>(null);
  const cardRef = useRef<any | null>(null);
  const [prevOnHover, setPrevOnHover] = useState(false);
  const [nextOnHover, setNextOnHover] = useState(false);
  const [circleCounter, setCircleCounter] = useState(1);

  const slideNext = () => {
    if (ref.current) {
      ref.current.scrollTo(ref.current.scrollLeft + cardLength, 0);
    }
  };

  const slidePrev = () => {
    if (ref.current) {
      ref.current.scrollTo(ref.current.scrollLeft - cardLength, 0);
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

      if (currCircle === news.length - 1 && !isMobile) {
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

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any, id: number) => {
    setTouchEndX(e.changedTouches[0].clientX);
    console.log({touchEndX, touchStartX})

    const deltaX = touchEndX - touchStartX;

    const scrollDirection = deltaX < 0 ? 1 : -1;

    if (ref.current) {
      if(scrollDirection > 0) {
        slideTo(id + 1)
      } else {
        slideTo(id - 1)
      }
        // const scrollAmount = ref.current.offsetWidth - 7;
        // console.log(scrollAmount * scrollDirection)

        // ref.current.scrollBy(362 - 7, 0);
  
      // if(scrollDirection === 1) {
      //   ref.current.scrollTo({
      //     left: scrollAmount * (circleCounter - 1) * scrollDirection
      //   })
      // } else {
      //   const lastScroll = ref.current.scrollLeft;
      //   ref.current.scrollLeft = lastScroll - (lastScroll % scrollAmount)
      // }
    }
  };

  const handleMobScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if(isMobile && ref.current) {
      ref.current.scrollBy(ref.current.offsetWidth - 7, 0);
    }
  }

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
        <div
          ref={ref}
          className={styles.cards__container}
          // onTouchStart={handleTouchStart}
          // onTouchEnd={handleTouchEnd}
          // onTouchEnd={handleMobScroll}
        >
          {news.map((item, i) => (
            <div
              onTouchEnd={(e) => handleTouchEnd(e, item.id)}
              onTouchStart={handleTouchStart}
              ref={cardRef}
              key={item.id}
              style={{minWidth: "100%", width: "100%", minHeight: "187px"}}
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
