import { useEffect, useState } from "react";
import { Carousel } from "./carousel";
import { getDataPages } from "src/services/api";
import { HomePage, ICharacters, Page } from "src/services/api-types";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [charsOnShow, setCharsOnShow] = useState<ICharacters[]>(CHARACTERS_MOCK);
  const [currentSlide, setCurrentSlide] = useState(2);
  const [currentChar, setCurrentChar] = useState<ICharacters>(CHARACTERS_MOCK[3]);
  const [isOnShow, setIsOnShow] = useState(true);

  const loadData = async () => {
    const res = await getDataPages(Page.home, [
      HomePage.characters_carousel,
    ]);

    if (res) {
      const chars = res[0][HomePage.characters_carousel];
      setCharsOnShow(chars);
      const currentPosition = chars.length % 2 === 0 ? chars.length - 1 : chars.length;
      setCurrentChar(chars[Math.floor(currentPosition / 2)]);
      setCurrentSlide(chars[Math.floor(currentPosition / 2)].id);

      setTimeout(() => {
        setIsOnShow(true);
      }, 100)
    }
  };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <article className={styles.chars}>
      <div className={styles.chars__container}>
        <h1>{title}</h1>
        {(charsOnShow.length > 0 && isOnShow) && (
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
