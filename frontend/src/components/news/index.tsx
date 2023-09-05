import { GameIcon } from "@components/icons/GameIcon";
import styles from "./index.module.scss";
import { Button } from "@components/button";
import { useMemo, useRef, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "./news-card";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import classNames from "classnames";
import { Circles } from "@components/circles";
import { useSpringCarousel } from "react-spring-carousel";
import { useDevice } from "src/hooks/useDevice";

export const News = () => {
  const [news, setNews] = useState(NEWS_MOCK);
  const ref = useRef<any | null>(null);
  const [prevOnHover, setPrevOnHover] = useState(false);
  const [nextOnHover, setNextOnHover] = useState(false);

  const [listOnEnd, setListOnEnd] = useState(false);
  const [currentNews, setCurrentNews] = useState(news[0].id);
  const { isMobile } = useDevice();
  const circlesArr = useMemo(() => {
    return isMobile ? news : news.slice(0, -1);
  }, [isMobile]);
  //   const handleScroll = () => {
  //     if (ref.current) {
  //       if (ref.current.scrollX > 2400) {
  //         setListOnEnd(true);
  //       } else {
  //         setListOnEnd(false);
  //       }
  //     }
  //   };

  //   ref.current.addEventListener("scroll", handleScroll);

  //   return () => ref.current.removeEventListener("scroll", handleScroll)
  // });

  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToNextItem,
    slideToPrevItem,
    slideToItem,
  } = useSpringCarousel({
    withLoop: false,
    itemsPerSlide: isMobile ? 1 : 3,
    gutter: 20,
    items: news.map((item, i) => ({
      id: item.id.toString(),
      renderItem: <NewsCard card={item} />,
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentNews(+event?.nextItem?.id);
    }
  });

  return (
    <article className={styles.news}>
      <div className={styles.news__container}>
        <div className={styles.news__header}>
          <div className={styles.news__header__title}>
            <GameIcon />
            <h1>News</h1>
          </div>
          <div className={styles.news__header__button}>
            <Button name="All our news" onClick={() => {}} />
          </div>
        </div>
        <div
          className={classNames(styles.cards, {
            [styles.cards_end]: listOnEnd,
          })}
          ref={ref}
        >
          <button
            type="button"
            className={styles.cards__prevIcon}
            onClick={slideToPrevItem}
            onMouseEnter={() => setPrevOnHover(true)}
            onMouseLeave={() => setPrevOnHover(false)}
          >
            <PrevIcon color={prevOnHover ? "#54A178" : "#98DDB8"} />
          </button>
          {carouselFragment}
          <button
            type="button"
            className={styles.cards__nextIcon}
            onClick={slideToNextItem}
            onMouseEnter={() => setNextOnHover(true)}
            onMouseLeave={() => setNextOnHover(false)}
          >
            <NextIcon color={nextOnHover ? "#54A178" : "#98DDB8"} />
          </button>
        </div>
        <div className={styles.swiper}>
          {circlesArr.map((item, i) => (
            <Circles
              key={item.id}
              highlighted={item.id === currentNews}
              handleMove={() => slideToItem(i)}
            />
          ))}
        </div>
        <div className={styles.news__header__buttonMob}>
          <Button name="All our news" onClick={() => {}} />
        </div>
      </div>
    </article>
  );
};
