import { useRef } from "react";
import styles from "./index.module.scss";
import { Circles } from "@components/circles";
import { useSwiper } from "src/hooks/useSwiper";
import { StaticImageData } from "next/image";

interface IPhotosMobile {
  cardLength: number;
  images: {
    img: StaticImageData;
    id: number;
  }[];
}

export const PhotosMobile: React.FC<IPhotosMobile> = (props) => {
  const { cardLength, images } = props;
  const ref = useRef<any | null>(null);

  const { slideTo, handleTouchEnd, handleTouchStart, circleCounter } =
    useSwiper({
      ref,
      dataArray: images,
      cardLength,
    });

  return (
    <>
      <div className={styles.photosMob} ref={ref}>
        {images.map((img) => (
          <img
            key={img.id}
            className={styles.photosMob__img}
            src={img.img.src}
            onTouchEnd={(e) => handleTouchEnd(e, img.id)}
            onTouchStart={handleTouchStart}
          />
        ))}
      </div>
      <div className={styles.swiper}>
        {images.map((img) => (
          <Circles
            key={img.id}
            highlighted={img.id === circleCounter}
            handleMove={() => slideTo(img.id)}
          />
        ))}
      </div>
    </>
  );
};
