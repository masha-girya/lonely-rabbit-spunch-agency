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
import { ICharacters } from "src/services/api";

interface ICarouselThumbs {
  movePrev: () => void,
  moveNext: () => void,
  thumbsFragment: React.ReactNode,
  mainCharOnChange: boolean,
  currentChar: ICharacters,
}

export const CarouselThumbs: React.FC<ICarouselThumbs> = (props) => {
  const { movePrev, moveNext, thumbsFragment, mainCharOnChange, currentChar } = props;
  const refText = useRef<null | any>(null);

  return (
    <div className={styles.thumbs}>
      <button
        onClick={movePrev}
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
              <h2>{currentChar?.name}</h2>
              <p>{currentChar?.description}</p>
            </div>
          )}
        </Transition>
      </div>
      <button
        onClick={moveNext}
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
