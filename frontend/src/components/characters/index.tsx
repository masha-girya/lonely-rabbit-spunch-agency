import { useEffect, useState } from "react";
import { Carousel } from "./carousel";
import { HomePage, ICharacters, Page, getDataPages } from "src/services/api";
import styles from "./index.module.scss";

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
    const res = await getDataPages(Page.home, [
      HomePage.characters_carousel,
    ]);

    if (res) {
      const chars = res[HomePage.characters_carousel];
      setCharsOnShow(chars);
      const currentPosition = chars.length % 2 === 0 ? chars.length - 1 : chars.length
      setCurrentChar(chars[Math.floor(currentPosition / 2)]);
      setCurrentSlide(chars[Math.floor(currentPosition / 2)].id);

      setTimeout(() => {
        setIsOnShow(true);
      }, 100)
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
