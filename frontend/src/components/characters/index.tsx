import { useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_IMGS, CHARACTERS_MOCK } from "src/constants/characters";
import classNames from "classnames";
import { LeftIcon } from "@components/icons/LeftIcon";
import { RightIcon } from "@components/icons/RightIcon";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [chars, setChars] = useState(CHARACTERS_MOCK);
  const [mainChar, setMainChar] = useState(
    CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]
  );

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        <div className={styles.chars__charsList}>
          {CHARACTERS_IMGS.map((item) => (
            <div
              key={item.charId}
              className={classNames(styles.chars__charsList__item, {
                [styles.chars__charsList__item_main]:
                  mainChar.charId === item.charId,
              })}
            >
              <img
                src={item.img.src}
                alt={
                  chars.find((char) => char.charId === item.charId)?.title ?? ""
                }
              />
              {mainChar.charId === item.charId && (
                <div className={styles.mainContent}>
                  <button type="button" className={styles.mainContent__button}>
                    <LeftIcon />
                  </button>
                  <div className={styles.mainContent__text}>
                    <h2>{mainChar.title}</h2>
                    <p>{mainChar.description}</p>
                  </div>
                  <button type="button" className={styles.mainContent__button}>
                    <RightIcon />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
