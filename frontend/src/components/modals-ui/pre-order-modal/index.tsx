import styles from "./index.module.scss";
import { useState } from "react";
import { Button } from "@components/button";
import { CloseIcon } from "@components/icons/CloseIcon";
import CenterImg from "./assets/Center.png";
import RightImg from "./assets/Right.png";
import LeftImg from "./assets/Left.png";

interface IPreOrderModal {
  setIsModalOpen: (isOpen: boolean) => void
}

export const PreOrderModal: React.FC<IPreOrderModal> = (props) => {
  const { setIsModalOpen } = props;
  const [title, setTitle] = useState("Lorem ipsum");
  const [buttonName, setButtonName] = useState("Pre order now");
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetu. Sit tellus ullamcorper arcu et velit erat massa sit. Duis orci tempor convallis massa.");
  const [releaseDate, setReleaseDate] = useState("COMING SOON SEPTEMBER 10, 2023");
  const [price, setPrice] = useState("30");

  return (
    <div className={styles.preOrder}>
      <button className={styles.preOrder__closeBtn} type="button" onClick={() => setIsModalOpen(false)}>
        <CloseIcon />
      </button>
      <div className={styles.preOrder__leftCol}>
        <h1 className={styles.preOrder__title}>{title}</h1>
        <div className={styles.preOrder__centerText}>
          <p className={styles.preOrder__releaseDate}>{releaseDate}</p>
          <p className={styles.preOrder__text}>{text}</p>
        </div>
        <div className={styles.preOrder__bottomText}>
          <p className={styles.preOrder__price}>{`Starting at ${price}$`}</p>
          <div className={styles.preOrder__button}>
            <Button
              name={buttonName}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className={styles.preOrder__rightCol}>
        <img className={styles.preOrder__leftImg} src={LeftImg.src}/>
        <img className={styles.preOrder__centerImg} src={CenterImg.src}/>
        <img className={styles.preOrder__rightImg} src={RightImg.src}/>
      </div>
    </div>
  )
}