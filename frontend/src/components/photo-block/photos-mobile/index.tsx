import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./index.module.scss";

interface IPhotosMobile {
  images: {
    img: StaticImageData;
    id: number;
  }[];
}

export const PhotosMobile: React.FC<IPhotosMobile> = (props) => {
  const { images } = props;

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={14}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={styles["photosMob"]}
      >
        {images.map((img) => (
          <SwiperSlide className={styles["photosMob__img"]} key={img.id}>
            <img
              className={styles.photosMob__img}
              src={img.img.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
