import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import { useSpringCarousel } from "react-spring-carousel";
import {
  DEFAULT_STYLE_TEXT,
  DURATION,
  TRANS_STYLES_TEXT,
} from "src/constants/transition";
import { LeftIcon } from "@components/icons/LeftIcon";
import { RightIcon } from "@components/icons/RightIcon";
import { Transition } from "react-transition-group";
import { Circles } from "@components/circles";

interface ICarousel {
  chars: typeof CHARACTERS_MOCK;
}

export const Carousel: React.FC<ICarousel> = (props) => {
  const { chars } = props;

  const refText = useRef<null | any>(null);
  const [currentSlide, setCurrentSlide] = useState(
    chars[Math.floor(chars.length / 2)].charId
  );
  const [mainCharOnChange, setMainCharOnChange] = useState(false);
  const [currentChar, setCurrentChar] = useState<undefined | (typeof chars)[0]>(
    chars[Math.floor(chars.length / 2)]
  );

  const {
    carouselFragment,
    thumbsFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    gutter: 0,
    initialStartingPosition: "center",
    itemsPerSlide: 5,
    withLoop: true,
    initialActiveItem: Math.floor(chars.length / 2),
    withThumbs: true,
    items: chars.map((item) => ({
      id: item.charId.toString(),
      renderItem: (
        <div
          // onClick={() => slideToItem(item.charId.toString())}
          key={item.charId}
          className={classNames(styles.charsList__charBox, {
            [styles.charsList__charBox_main]: currentSlide === item.charId,
          })}
        >
          <div
            className={classNames(styles.charsList__item, {
              [styles.charsList__item_main]: currentSlide === item.charId,
            })}
          >
            <img
              src={item.img.src}
              alt={item.title}
              className={styles.charsList__item__image}
            />
          </div>
        </div>
      ),
      renderThumb: (
        <Circles highlighted={item.charId === currentChar?.charId} handleMove={() => slideToItem(item.charId.toString())} />
      )
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(+event?.nextItem?.id);
      setTimeout(
        () =>
          setCurrentChar(
            chars.find((item) => +event?.nextItem?.id === item.charId)
          ),
        100
      );
    }
  });

  const moveLeft = useCallback(() => {
    slideToPrevItem();
    setMainCharOnChange(true);

    setTimeout(() => {
      setMainCharOnChange(false);
    }, DURATION);
  }, [DURATION]);

  const moveRight = useCallback(() => {
    slideToNextItem();
    setMainCharOnChange(true);

    setTimeout(() => {
      setMainCharOnChange(false);
    }, DURATION);
  }, [DURATION]);

  return (
    <>
      <div className={styles.charsList}>
        <div className={styles.charsList__container}>{carouselFragment}</div>
      </div>
      <div className={styles.mainContent}>
        <button
          onClick={moveRight}
          type="button"
          className={styles.mainContent__button}
          title="Move Right"
        >
          <LeftIcon />
        </button>
        <div className={styles.mainContent__text}>
          <Transition
            in={!mainCharOnChange}
            timeout={DURATION}
            nodeRef={refText}
          >
            {(state) => (
              <div
                ref={refText}
                style={{ ...DEFAULT_STYLE_TEXT, ...TRANS_STYLES_TEXT[state] }}
              >
                <h2>{currentChar?.title}</h2>
                <p>{currentChar?.description}</p>
              </div>
            )}
          </Transition>
        </div>
        <button
          onClick={moveLeft}
          title="Move Left"
          type="button"
          className={styles.mainContent__button}
        >
          <RightIcon />
        </button>
      </div>
      <div className={styles.swiper}>
        {thumbsFragment}
      </div>
    </>
  );
};
