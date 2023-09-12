import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import { Carousel } from "./carousel";
import { useDevice } from "src/hooks/useDevice";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [charsOnShow, setCharsOnShow] = useState<typeof CHARACTERS_MOCK>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentChar, setCurrentChar] = useState<
    undefined | (typeof CHARACTERS_MOCK)[0]
  >(undefined);
  const { isDesktop, isSmallNote, isTablet } = useDevice();

  useEffect(() => {
    setCharsOnShow(CHARACTERS_MOCK);
    setTimeout(() => {
      setCurrentChar(CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]);
      setCurrentSlide(
        CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)].charId
      );
    }, 100);
  }, [CHARACTERS_MOCK]);

  useEffect(() => {
      if(isDesktop || isSmallNote || isTablet) {
      setCurrentChar(CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)]);
      setCurrentSlide(
        CHARACTERS_MOCK[Math.floor(CHARACTERS_MOCK.length / 2)].charId
      );
    }
  }, [isDesktop, isSmallNote, isTablet])

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        {charsOnShow.length > 0 && currentChar !== undefined && (
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
