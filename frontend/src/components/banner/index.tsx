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

export const Banner = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState(BANNER_IMGS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSafari, setIsSafari] = useState(true);

  const loadData = async () => {
    const res = await getDataPages(Page.home, [HomePage.first_block_title]);
    if (res) {
      setTitle(res[0][HomePage.first_block_title]);
    }
  };

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, [])

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.banner}>
      <Header />
      <Modal
        isOpen={isModalOpen}
        isOpenCallback={setIsModalOpen}
        children={<PreOrderModal setIsModalOpen={setIsModalOpen} />}
      />
      <div className={styles.banner__bannerContainer}>
        <div className={styles.banner__content}>
          <h1>{title}</h1>
          <div className={styles.banner__content__button}>
            <Button onClick={() => setIsModalOpen(true)} name="Play Now" />
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
                [styles.banner__images__boxItem_safari]: isSafari
              })}
            >
              {images.map((img, i) => (
                <SwiperSlide key={img.src + i}>
                  <img className={styles.banner__images__img} src={img.src} />
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
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
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
      </div>
    </div>
  );
};
