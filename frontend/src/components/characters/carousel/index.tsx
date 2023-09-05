import React, { useCallback, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import { useSpringCarousel } from "react-spring-carousel";
import { DURATION } from "src/constants/transition";
import { Circles } from "@components/circles";
import { CarouselThumbs } from "../carousel-thumbs";

interface ICarousel {
  chars: typeof CHARACTERS_MOCK;
}

export const Carousel: React.FC<ICarousel> = (props) => {
  const { chars } = props;

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
        <Circles
          highlighted={item.charId === currentChar?.charId}
          handleMove={() => slideToItem(item.charId.toString())}
        />
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setMainCharOnChange(true);

      setTimeout(() => {
        setMainCharOnChange(false);
      }, DURATION);

      setCurrentSlide(+event?.nextItem?.id);
      setTimeout(() =>
        setCurrentChar(
          chars.find((item) => +event?.nextItem?.id === item.charId)
      ),100);
    }
  });

  return (
    <div className={styles.charListBox}>
      <div className={styles.charsList}>
        <div>{carouselFragment}</div>
      </div>
      <CarouselThumbs
        moveLeft={slideToPrevItem}
        moveRight={slideToNextItem}
        thumbsFragment={thumbsFragment}
        mainCharOnChange={mainCharOnChange}
        currentChar={currentChar}
      />
    </div>
  );
};
