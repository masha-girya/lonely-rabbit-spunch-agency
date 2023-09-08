import { Button } from "@components/button";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "@components/modal";
import { PreOrderModal } from "@components/modals-ui/pre-order-modal";

export const CtaBanner = () => {
  const [title, setTitle] = useState(
    "Unveiling the Unseen - Lonely Rabbit, where nightmares are born. Explore the abyss between reality and terror"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (isOpen: boolean) => {
    setIsModalOpen(isOpen);

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  return (
    <article className={styles.ctaBanner}>
      <Modal
        isOpen={isModalOpen}
        isOpenCallback={handleOpen}
        children={<PreOrderModal setIsModalOpen={handleOpen} />}
      />
      <div className={styles.ctaBanner__container}>
        <h1 className={styles.ctaBanner__title}>{title}</h1>
        <div className={styles.ctaBanner__button}>
          <Button
            onClick={() => handleOpen(true)}
            name="Pre order the game"
          />
        </div>
      </div>
    </article>
  );
};
