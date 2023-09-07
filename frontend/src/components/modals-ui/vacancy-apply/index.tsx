import styles from "./index.module.scss";
import { useState } from "react";
import { Button } from "@components/button";
import { CloseIcon } from "@components/icons/CloseIcon";
import CenterImg from "./assets/Center.png";
import RightImg from "./assets/Right.png";
import LeftImg from "./assets/Left.png";
import ContactUsImg from "./assets/ContactUsImage.png";
import LogoImg from "./assets/Logo.png";
import { Input } from "@components/input";

interface IVacancyApplyModal {
  setIsModalOpen: (isOpen: boolean) => void;
}

export const VacancyApplyModal: React.FC<IVacancyApplyModal> = (props) => {
  const { setIsModalOpen } = props;
  const [title, setTitle] = useState("Lorem ipsum");
  const [subTitle, setSubTitle] = useState("Lorem ipsum");

  return (
    <div className={styles.apply}>
      <div className={styles.apply__container}>
        <div className={styles.apply__leftCol}>
          <img src={ContactUsImg.src} />
        </div>
        <div className={styles.apply__rightCol}>
          <img src={LogoImg.src} />
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <form>
          </form>
        </div>
      </div>
    </div>
  );
};
