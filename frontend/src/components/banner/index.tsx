import { useEffect, useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Button } from "@components/button";
import { Header } from "@components/header";
import { BANNER_IMGS } from "src/constants";
import { getDataPages } from "src/services/api";
import { HomePage, Page } from "src/services/api-types";
import styles from "./index.module.scss";
import { Modal } from "@components/modal";
import { PreOrderModal } from "@components/modals-ui/pre-order-modal";
import { Transition } from "react-transition-group";
import smokeImg from "./assets/smoke.png";

export const Banner = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState(BANNER_IMGS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSafari, setIsSafari] = useState(true);
  const [introState, setIntroState] = useState<boolean>(true);

  const loadData = async () => {
    const res = await getDataPages(Page.home, [HomePage.first_block_title]);
    if (res) {
      setTitle(res[0][HomePage.first_block_title]);
    }
  };

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIntroState(false);
    }, 2500);
  }, []);

  return (
    <Transition in={introState} timeout={0}>
      {(state) => (
        <div className={styles.banner}>
          <Header classNamesProps={classNames(`fade-banner-${state}`)} />
          <Modal
            isOpen={isModalOpen}
            isOpenCallback={setIsModalOpen}
            children={<PreOrderModal setIsModalOpen={setIsModalOpen} />}
          />
          <div style={{ width: "100%", height: "100%" }}>
            <div className={classNames(styles.intro, `fade-intro-${state}`)}>
              <div className={styles.intro__smoke_1} />
              <div className={styles.intro__smoke_2} />
              <div className={styles.intro__strikeLogo} />
            </div>
            <div
              className={classNames(
                styles.banner__bannerContainer,
                `fade-banner-${state}`
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
              <div className={styles.banner__images}>
                <div className={styles.banner__images__box}>
                  <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    speed={700}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    loop={true}
                    className={classNames(styles.banner__images__boxItem, {
                      [styles.banner__images__boxItem_safari]: isSafari,
                    })}
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={img.src + i}>
                        <img
                          className={styles.banner__images__img}
                          src={img.src}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <svg
                  style={{ visibility: "hidden", position: "absolute" }}
                  width="0"
                  height="0"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <defs>
                    <filter id="round">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="20"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 19 -9"
                        result="goo"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="goo"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div
                className={classNames(
                  styles.banner__content__button,
                  styles.banner__content__button_mob
                )}
              >
                <Button onClick={() => setIsModalOpen(true)} name="Play Now" />
              </div>
              <div className={styles.smokeElement}>
                <div className={styles.smokeContainer}>
                  <div className={styles.smoke}>
                    <img className={styles.smoke__itemBig} src={smokeImg.src} />
                  </div>
                  <div className={styles.smoke}>
                    <img
                      className={styles.smoke__itemMedium}
                      src={smokeImg.src}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};
