import { useEffect, useState } from "react";
import { useDevice } from "src/hooks/useDevice";
import { Button } from "@components/button";
import { Modal } from "@components/modal";
import { PreOrderModal } from "@components/modals-ui/pre-order-modal";
import { getDataPages } from "src/services/api";
import { Parallax } from "react-parallax";
import { HomePage, Page } from "src/services/api-types";
import bgImage from "./assets/Banner.png";
import logoImage from "./assets/strikes_logo_white.png";
import styles from "./index.module.scss";

export const CtaBanner = () => {
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const { isMobile, isTablet, isDesktop, isSmallNote } = useDevice();

  const loadData = async () => {
    const res = await getDataPages(Page.home, [HomePage.second_block_title]);
    if (res) {
      setTitle(res[0][HomePage.second_block_title]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(isDesktop || isSmallNote) {
      setTimeout(() => setIsLogoVisible(true), 4000);
    }
    if(isMobile || isTablet){
      setIsLogoVisible(true);
    }
  }, [isDesktop, isSmallNote, isMobile, isTablet]);

  return (
    <article className={styles.ctaBanner}>
      {isLogoVisible &&  <img className={styles.ctaBanner__logo} src={logoImage.src} />}
      <Modal
        isOpen={isModalOpen}
        isOpenCallback={setIsModalOpen}
        children={<PreOrderModal setIsModalOpen={setIsModalOpen} />}
      />
      <Parallax
        bgImage={bgImage.src}
        strength={200}
        blur={0}
        style={{ width: "100%", height: "100%" }}
        bgClassName={styles.imageParallax}
        contentClassName={styles.ctaBanner__paralaxContent}
      >
        <div className={styles.ctaBanner__container}>
          <h1 className={styles.ctaBanner__title}>{title}</h1>
          <div className={styles.ctaBanner__button}>
            <Button
              onClick={() => setIsModalOpen(true)}
              name="Pre order the game"
            />
          </div>
        </div>
      </Parallax>
    </article>
  );
};
