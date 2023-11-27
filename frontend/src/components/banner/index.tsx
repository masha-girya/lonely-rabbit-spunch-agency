import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import { Button } from "@components/button";
import { Header } from "@components/header";
import { Modal } from "@components/modal";
import { PreOrderModal } from "@components/modals-ui/pre-order-modal";
import styles from "./index.module.scss";
import { ImagesSwiper } from "./images-swiper";
import { getDataPages } from "src/services/api";
import { HomePage, Page } from "src/services/api-types";
import { SmokeEffect } from "./smoke-effect";
import { Intro } from "./intro";

export const Banner = () => {
  const [title, setTitle] = useState("Lorem ipsum dolor sit amet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [introState, setIntroState] = useState<boolean>(false);
  const [isInvisible, setIsInvisible] = useState(false);

  const loadData = async () => {
    const res = await getDataPages(Page.home, [HomePage.first_block_title]);
    if (res) {
      setTitle(res[0][HomePage.first_block_title]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIntroState(false);
  //   }, 2500);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight + 10) {
        setIsInvisible(true);
      } else {
        setIsInvisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Transition in={introState} timeout={0}>
      {(state) => (
        <div className={classNames(styles.banner, {
          [styles.banner_invisible]: isInvisible
        })}>
          <Header classNamesProps={classNames(`fade-banner-${state}`)} />
          <Modal
            isOpen={isModalOpen}
            isOpenCallback={setIsModalOpen}
            children={<PreOrderModal setIsModalOpen={setIsModalOpen} />}
          />
          <div className={styles.banner__fixedContainer}>
            <Intro state={state} />
            <div
              className={classNames(
                styles.banner__bannerContainer,
                `fade-banner-${state}`, {
                  [styles.banner__bannerContainer_invisible]: isInvisible,
                }
              )}
            >
              <div
                className={classNames(
                  styles.banner__content,
                  `slide-right-content-${state}`
                )}
              >
                <h1>{title}</h1>
                <div className={styles.banner__content__button}>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    name="Play Now"
                  />
                </div>
              </div>
              <ImagesSwiper />
              <div
                className={classNames(
                  styles.banner__content__button,
                  styles.banner__content__button_mob
                )}
              >
                <Button onClick={() => setIsModalOpen(true)} name="Play Now" />
              </div>
              <SmokeEffect />
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};
