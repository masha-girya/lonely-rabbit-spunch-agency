import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { CHARACTERS_MOCK } from "src/constants/characters";
import { Carousel } from "./carousel";
import { useDevice } from "src/hooks/useDevice";
import { HomePage, ICharacters, Page, getData } from "src/services/api";

export const Characters = () => {
  const [title, setTitle] = useState("Meet the Characters");
  const [charsOnShow, setCharsOnShow] = useState<ICharacters[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentChar, setCurrentChar] = useState({
    id: 0,
    meta: { type: "" },
    description: "",
    name: "",
    carousel_image: {
      id: 0,
      meta: {
        type: "",
        detail_url: "",
        download_url: "",
      },
      title: "",
    },
  });
  const [isOnShow, setIsOnShow] = useState(false);

  const loadData = async () => {
    const res = await getData("pages", Page.home, [
      HomePage.characters_carousel,
    ]);

    if (res) {
      const chars = res[HomePage.characters_carousel];
      setCharsOnShow(chars);
      setCurrentChar(chars[Math.floor(chars.length / 2)]);
      setCurrentSlide(chars[Math.floor(chars.length / 2)].id);
    }
  };

  useEffect(() => {
    loadData();
    setTimeout(() => {
      setIsOnShow(true);
    }, 100);
  }, []);

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
