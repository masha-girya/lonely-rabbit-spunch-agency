import { useState } from "react";
import styles from "./index.module.scss";
import Img1 from "./assets/Img1.png";
import Img2 from "./assets/Img2.png";
import Img3 from "./assets/Img3.png";

export const PhotoBlock = () => {
  const [title, setTitle] = useState("Stunning Visuals");

  return (
    <article className={styles.photoBlock}>
      <div className={styles.photoBlock__container}>
        <h1>{title}</h1>
        <div className={styles.photoBlock__photos}>
          <div className={styles.photoBlock__photos__col}>
            <img src={Img1.src}/>
            <img src={Img2.src}/>
          </div>
          <img className={styles.photoBlock__photos__fullHeight} src={Img3.src}/>
        </div>
      </div>
    </article>
  );
};
