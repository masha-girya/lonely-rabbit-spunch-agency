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

  const character = chars.map((item) => (
    <div
      onClick={() => slideToItem(item.charId)}
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
  ));

  const {
    carouselFragment,
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
    items: chars.map((item) => ({
      id: item.charId.toString(),
      renderItem: (
        <div
          onClick={() => slideToItem(item.charId.toString())}
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
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentSlide(+event?.nextItem?.id);
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
                <h2>
                  {
                    CHARACTERS_MOCK.find(
                      (item) => item.charId === +currentSlide
                    )?.title
                  }
                </h2>
                <p>
                  {
                    CHARACTERS_MOCK.find(
                      (item) => item.charId === +currentSlide
                    )?.description
                  }
                </p>
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
    </>
  );
};
