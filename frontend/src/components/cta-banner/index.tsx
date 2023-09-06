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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);

  return (
    <article className={styles.ctaBanner}>
      <Modal
        isFullScreen
        isOpen={isModalOpen}
        isOpenCallback={setIsModalOpen}
        children={<PreOrderModal setIsModalOpen={setIsModalOpen} />}
      />
      <div className={styles.ctaBanner__container}>
        <h1 className={styles.ctaBanner__title}>{title}</h1>
        <div className={styles.ctaBanner__button}>
          <Button
            onClick={() => setIsModalOpen(true)}
            name="Pre order the game"
          />
        </div>
      </div>
    </article>
  );
};
