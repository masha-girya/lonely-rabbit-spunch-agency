import { GameIcon } from "@components/icons/GameIcon";
import styles from "./index.module.scss";
import { Button } from "@components/button";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "./news-card";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import classNames from "classnames";

export const News = () => {
  const [news, setNews] = useState(NEWS_MOCK);
  const ref = useRef<any | null>(null);
  const [scrollable, setScrollable] = useState(false);
  const [scrollFinish, setScrollFinish] = useState(false);
  const [circle, setCircle] = useState(1);
  const [scrollingTimeout, setScrollingTimeout] = useState<null | any>(null);
  const [prevOnHover, setPrevOnHover] = useState(false);
  const [nextOnHover, setNextOnHover] = useState(false);

  const cardWidth = useMemo(() => {
    return 600;
  }, []);

  const listWidth = useMemo(() => {
    return cardWidth * news.length + cardWidth;
  }, [news, cardWidth]);

  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(scrollingTimeout);

      // we detect when scroll stops via timeout
      const newTimeout = setTimeout(() => {
        // finish
        if (window.innerWidth + ref.current.scrollLeft > listWidth - (cardWidth - 200)) {
          setCircle(news.length);
          return;
        }

        // start
        if (ref.current.scrollLeft < cardWidth) {
          console.log("cond 1")
          setCircle(1);
          return;
        }

        // second circle
        if (ref.current.scrollLeft >= cardWidth && ref.current.scrollLeft < cardWidth * 2) {
          setCircle(2);
          return;
        }

        const newCircle =
          news.length - Math.floor(listWidth / ref.current.scrollLeft);
        setCircle(newCircle);

        console.log({
          newCircle,
          refScroll: ref.current.scrollLeft,
          listWidth
        })

        setScrollingTimeout(null);
      }, 200);

      setScrollingTimeout(newTimeout);
    }
  };

  const handleScrollRight = useCallback(() => {
    if (ref.current) {
      ref.current.scrollLeft += 600;
    }
  }, [ref.current]);

  const handleScrollLeft = useCallback(() => {
    if (ref.current) {
      ref.current.scrollLeft -= 600;
    }
  }, [ref.current]);

  const moveTo = useCallback((i: number) => {
    if(ref.current) {
      ref.current.scrollTo(600 * i, 0)
    }
  }, [ref])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < listWidth) {
        setScrollable(true);
      } else {
        setScrollable(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
        <div className={styles.cards} ref={ref}>
          {scrollable && (
            <button
              type="button"
              className={styles.cards__prevIcon}
              onClick={handleScrollLeft}
              onMouseEnter={() => setPrevOnHover(true)}
              onMouseLeave={() => setPrevOnHover(false)}
            >
              <PrevIcon color={prevOnHover ? "#54A178" : "#98DDB8"} />
            </button>
          )}
          {news.map((item) => (
            <NewsCard key={item.id} card={item} />
          ))}
          {scrollable && (
            <button
              type="button"
              className={styles.cards__nextIcon}
              onClick={handleScrollRight}
              onMouseEnter={() => setNextOnHover(true)}
              onMouseLeave={() => setNextOnHover(false)}
            >
              <NextIcon color={nextOnHover ? "#54A178" : "#98DDB8"} />
            </button>
          )}
        </div>
        <div className={styles.swiper}>
          {news.map((item, i) => (
            <div
              key={item.id}
              onClick={() => moveTo(i)}
              className={classNames(styles.swiper__circle, {
                [styles.swiper__circle_main]: item.id === circle,
              })}
            ></div>
          ))}
        </div>
      </div>
    </article>
  );
};
