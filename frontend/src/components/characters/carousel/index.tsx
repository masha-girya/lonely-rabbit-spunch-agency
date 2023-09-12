import React, { useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { useSpringCarousel } from "react-spring-carousel";
import { DURATION } from "src/constants/transition";
import { Circles } from "@components/circles";
import { CarouselThumbs } from "../carousel-thumbs";
import { useDevice } from "src/hooks/useDevice";
import { ICharacters } from "src/services/api";
import { API_MEDIA_ENDPOINT } from "src/constants";

interface ICarousel {
  chars: ICharacters[];
  currentChar: ICharacters;
  setCurrentChar: (currentChar: ICharacters) => void;
  currentSlide: number;
  setCurrentSlide: (currentSlide: number) => void;
}

export const Carousel: React.FC<ICarousel> = (props) => {
  const { isMobile } = useDevice();
  const { chars, currentChar, setCurrentChar, currentSlide, setCurrentSlide } =
    props;
  const [mainCharOnChange, setMainCharOnChange] = useState(false);

  const {
    carouselFragment,
    thumbsFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    getCurrentActiveItem,
  } = useSpringCarousel({
    gutter: 0,
    initialStartingPosition: "center",
    itemsPerSlide: chars.length % 2 === 0 ? chars.length - 1 : chars.length,
    withLoop: true,
    initialActiveItem: chars.length % 2 === 0 ? Math.floor((chars.length - 1) / 2) : Math.floor(chars.length / 2),
    withThumbs: true,
    items: chars.map((item) => ({
      id: item.id.toString(),
      renderItem: (
        <div
          // onClick={() => slideToItem(item.charId.toString())}
          key={item.id}
          className={classNames(styles.charsList__charBox, {
            [styles.charsList__charBox_main]: currentSlide === item.id,
          })}
        >
          <div
            className={classNames(styles.charsList__item, {
              [styles.charsList__item_main]: currentSlide === item.id,
            })}
          >
            <img
              src={`${API_MEDIA_ENDPOINT}${item.carousel_image.meta.download_url}`}
              alt={item.carousel_image.title}
              className={classNames(styles.charsList__item__image, {
                [styles.charsList__item__image_main]: currentSlide === item.id
              })}
              loading="eager"
            />
          </div>
        </div>
      ),
      renderThumb: (
        <Circles
          highlighted={item.id === currentChar.id}
          handleMove={() => slideToItem(item.id.toString())}
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
      setTimeout(() => {
        const char = chars.find((item) => +event?.nextItem?.id === item.id);
        if (char) {
          setCurrentChar(char);
        }
      }, 100);
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
