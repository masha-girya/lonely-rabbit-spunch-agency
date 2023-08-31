import { useCallback, useRef, useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import classNames from "classnames";
import { LeftIcon } from "@components/icons/LeftIcon";
import { RightIcon } from "@components/icons/RightIcon";
import { Transition } from "react-transition-group";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [mainChar, setMainChar] = useState(
    CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]
  );
  const [initialChars, setInitialChars] = useState(CHARACTERS_MOCK);
  const [charsOnShow, setCharsOnShow] = useState(CHARACTERS_MOCK);
  const [onMove, setOnMove] = useState(false);
  const ref = useRef<null | any>(null);

  const moveLeft = () => {
    setOnMove(true);
    const lastChar = charsOnShow[charsOnShow.length - 1];
    const newChars = [
      lastChar,
      ...charsOnShow.slice(0, charsOnShow.length - 1),
    ];
    setCharsOnShow(newChars);
    setMainChar(newChars[Math.floor(newChars.length / 2)]);
    setOnMove(false);
  };

  const moveRight = () => {
    setOnMove(true);
    const firstChar = charsOnShow[0];
    const newChars = [...charsOnShow.slice(1), firstChar];
    setCharsOnShow(newChars);
    setMainChar(newChars[Math.floor(newChars.length / 2)]);
    setOnMove(false);
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

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        <div className={styles.chars__charsList}>
          {charsOnShow.map((item) => (
            <Transition
              in={charsOnShow.length > 0}
              nodeRef={ref}
              timeout={duration}
              key={item.charId}
            >
              {(state) => (
                <div
                  onClick={() => handleChangeMainChar(item)}
                  style={{ ...defaultStyle, ...transitionStyles[state] }}
                  key={item.charId}
                  className={classNames(styles.chars__charsList__box, {
                    [styles.chars__charsList__box_main]:
                      mainChar.charId === item.charId,
                  })}
                >
                  <div
                    className={classNames(styles.chars__charsList__item, {
                      [styles.chars__charsList__item_main]:
                        mainChar.charId === item.charId,
                    })}
                  >
                    <img
                      src={item.img.src}
                      alt={
                        charsOnShow.find((char) => char.charId === item.charId)
                          ?.title ?? ""
                      }
                    />
                  </div>
                </div>
              )}
            </Transition>
          ))}
        </div>
        <div className={styles.mainContent}>
          <button
            onClick={moveLeft}
            type="button"
            className={styles.mainContent__button}
          >
            <LeftIcon />
          </button>
          <div className={styles.mainContent__text}>
            <h2>{mainChar.title}</h2>
            <p>{mainChar.description}</p>
          </div>
          <button
            onClick={moveRight}
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
