import React, { useRef } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import {
  DEFAULT_STYLE_TEXT,
  DURATION,
  TRANS_STYLES_TEXT,
} from "src/constants/transition";
import { LeftIcon } from "@components/icons/LeftIcon";
import { RightIcon } from "@components/icons/RightIcon";
import { Transition } from "react-transition-group";

interface ICarouselThumbs {
  moveRight: () => void,
  moveLeft: () => void,
  thumbsFragment: React.ReactNode,
  mainCharOnChange: boolean,
  currentChar: typeof CHARACTERS_MOCK[0] | undefined,
}

export const CarouselThumbs: React.FC<ICarouselThumbs> = (props) => {
  const { moveRight, moveLeft, thumbsFragment, mainCharOnChange, currentChar } = props;
  const refText = useRef<null | any>(null);

  return (
    <div className={styles.thumbs}>
      <button
        onClick={moveRight}
        type="button"
        className={styles.thumbs__button}
        title="Move Right"
      >
        <LeftIcon />
      </button>
      <div className={styles.thumbs__text}>
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
        className={styles.thumbs__button}
      >
        <RightIcon />
      </button>
      <div className={styles.swiper}>
        {thumbsFragment}
      </div>
    </div>
  );
};
