import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import { Carousel } from "./carousel";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [charsOnShow, setCharsOnShow] = useState<typeof CHARACTERS_MOCK>([]);

  useEffect(() => {
    setCharsOnShow(CHARACTERS_MOCK);
  }, [CHARACTERS_MOCK])

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        {charsOnShow.length > 0 && <Carousel chars={charsOnShow} />}
      </div>
    </article>
  );
};
