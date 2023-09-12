import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import { Carousel } from "./carousel";
import { useDevice } from "src/hooks/useDevice";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [charsOnShow, setCharsOnShow] = useState<typeof CHARACTERS_MOCK>([]);
  const [currentSlide, setCurrentSlide] = useState(CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)].charId);
  const [currentChar, setCurrentChar] = useState(CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]);
  const { isDesktop, isSmallNote, isTablet } = useDevice();
  const [isOnShow, setIsOnShow] = useState(false);

  useEffect(() => {
    setCharsOnShow(CHARACTERS_MOCK);
    setTimeout(() => {
      setIsOnShow(true);
      setCurrentChar(CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]);
      setCurrentSlide(
        CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)].charId
      );
    }, 100);
  }, [CHARACTERS_MOCK]);

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        {charsOnShow.length > 0 && isOnShow && (
          <Carousel
            currentChar={currentChar}
            setCurrentChar={setCurrentChar}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            chars={charsOnShow}
          />
        )}
      </div>
    </article>
  );
};
