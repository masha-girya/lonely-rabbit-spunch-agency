import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Img1 from "./assets/Img1.png";
import Img2 from "./assets/Img2.png";
import Img3 from "./assets/Img3.png";
import { GameIcon } from "@components/icons/GameIcon";
import { useDevice } from "src/hooks/useDevice";
import { PhotosMobile } from "./photos-mobile";

export const PhotoBlock = () => {
  const [title, setTitle] = useState("Stunning Visuals");
  const images = [Img1, Img2, Img3].map((img, i) => ({ img, id: i + 1 }));
  const [cardLength , setCardLength] = useState(0);
  const { isMobile } = useDevice();

  useEffect(() => {
    if(window) {
      setCardLength(isMobile ? (window.innerWidth - 18) : 600);
    }
  }, [isMobile])

  return (
    <article className={styles.photoBlock}>
      <div className={styles.photoBlock__container}>
        <div className={styles.photoBlock__title}>
          <GameIcon />
          <h1>{title}</h1>
        </div>
        <div className={styles.photoBlock__photos}>
          <div className={styles.photoBlock__photos__col}>
            <img src={Img1.src} />
            <img src={Img2.src} />
          </div>
          <img
            className={styles.photoBlock__photos__fullHeight}
            src={Img3.src}
          />
        </div>
        {isMobile && <PhotosMobile images={images} cardLength={cardLength} />}
      </div>
    </article>
  );
};
