import { useCallback, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import classNames from "classnames";
import { LeftIcon } from "@components/icons/LeftIcon";
import { RightIcon } from "@components/icons/RightIcon";
import { Transition } from "react-transition-group";
import {
  DEFAULT_STYLE,
  DURATION,
  TRANS_STYLES_LEFT,
  TRANS_STYLES_RIGHT,
} from "src/constants/transition";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [mainChar, setMainChar] = useState(
    CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]
  );
  const [charsOnShow, setCharsOnShow] = useState(CHARACTERS_MOCK);
  const [onMove, setOnMove] = useState(true);
  const [transStyles, setTransStyles] = useState(TRANS_STYLES_RIGHT);
  const ref = useRef<null | any>(null);

  const moveLeft = () => {
    setOnMove(false);
    setTransStyles(TRANS_STYLES_LEFT);

    const lastChar = charsOnShow[charsOnShow.length - 1];
    const newChars = [
      lastChar,
      ...charsOnShow.slice(0, charsOnShow.length - 1),
    ];

    setTimeout(() => {
      setCharsOnShow(newChars);
      setMainChar(newChars[Math.floor(newChars.length / 2)]);
    }, DURATION);

    setTimeout(() => setOnMove(true), DURATION);
  };

  const moveRight = () => {
    setOnMove(false);
    setTransStyles(TRANS_STYLES_RIGHT);

    const firstChar = charsOnShow[0];
    const newChars = [...charsOnShow.slice(1), firstChar];

    setTimeout(() => {
      setCharsOnShow(newChars);
      setMainChar(newChars[Math.floor(newChars.length / 2)]);
    }, DURATION);

    setTimeout(() => setOnMove(true), DURATION);
  };

  const handleChangeMainChar = (item: (typeof charsOnShow)[0]) => {
    setMainChar(item);
    const centerPos = Math.floor(charsOnShow.length / 2);
    const newArr = [...charsOnShow];

    while (newArr[centerPos].charId !== item.charId) {
      const first = newArr[0];
      newArr.shift();
      newArr.push(first);
    }

    setCharsOnShow(newArr);
  };

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        <div className={styles.chars__charsList}>
          {charsOnShow.map((item, i) => (
            <div
              onClick={() => handleChangeMainChar(item)}
              key={item.charId}
              className={classNames(styles.chars__charsList__box, {
                [styles.chars__charsList__box_main]:
                  mainChar.charId === item.charId,
              })}
            >
              <div
                className={classNames(styles.chars__charsList__item, {
                  [styles.chars__charsList__item_main]:
                    Math.floor(charsOnShow.length / 2) === i,
                })}
              >
                <Transition
                  in={onMove}
                  nodeRef={ref}
                  timeout={DURATION}
                  key={item.charId}
                >
                  {(state) => {
                    if(i === 3 ) {
                      console.log(state)
                    }
                    return (
                      <img
                        ref={ref}
                        style={{ ...DEFAULT_STYLE, ...transStyles[state] }}
                        src={item.img.src}
                        alt={
                          charsOnShow.find((char) => char.charId === item.charId)
                            ?.title ?? ""
                        }
                        className={classNames(styles.chars__charsList__item__image, {
                          // [styles.chars__charsList__item__image_left]: onMoveLeft,
                          // [styles.chars__charsList__item__image_right]: onMoveRight,
                          // [styles.chars__charsList__item__image_first]: i === 0
                        })}
                      />
                    )
                  }}
                </Transition>
              </div>
            </div>
          ))}
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
            <h2>{mainChar.title}</h2>
            <p>{mainChar.description}</p>
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
      </div>
    </article>
  );
};
