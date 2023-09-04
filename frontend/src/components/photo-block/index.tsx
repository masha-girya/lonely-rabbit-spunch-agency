import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Img1 from "./assets/Img1.png";
import Img2 from "./assets/Img2.png";
import Img3 from "./assets/Img3.png";
import { GameIcon } from "@components/icons/GameIcon";
import { useSpringCarousel } from "react-spring-carousel";
import classNames from "classnames";
import { Circles } from "@components/circles";

export const PhotoBlock = () => {
  const [title, setTitle] = useState("Stunning Visuals");
  const images = [Img1, Img2, Img3].map((img, i) => ({img, id: i}));

  const ref = useRef<any | null>(null);
  const [scrollable, setScrollable] = useState(false);
  const [circles, setCircles] = useState([1, 2, 3]);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [currentImg, setCurrentImg] = useState(images[0].id);

  const { 
    carouselFragment, 
    thumbsFragment,
    useListenToCustomEvent,
    slideToItem
  } = useSpringCarousel({
    withLoop: true,
    withThumbs: true, 
    initialStartingPosition: "start",
    gutter: 20,
    items: images.map((img, i) => ({
      id: img.id.toString(),
      renderItem: (
        <img className={styles.photoBlock__photos__fullHeight} src={img.img.src}/>
      ),
      renderThumb: (
        <Circles highlighted={img.id === currentImg} handleMove={() => slideToItem(img.id)} />
      )
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentImg(+event?.nextItem?.id);
    }
  });

  return (
    <article className={styles.photoBlock}>
      <div className={styles.photoBlock__container}>
        <div className={styles.photoBlock__title}>
          <GameIcon />
          <h1>{title}</h1>
        </div>
        <div className={styles.photoBlock__photos}>
          <div className={styles.photoBlock__photos__col}>
            <img src={Img1.src}/>
            <img src={Img2.src}/>
          </div>
          <img className={styles.photoBlock__photos__fullHeight} src={Img3.src}/>
        </div>
        <div className={styles.photoBlock__photosMob} ref={ref}>
          {carouselFragment}
          {/* <div className={styles.photoBlock__photosMob__container}> */}
            {/* {images.map(img => (
              <img className={styles.photoBlock__photos__fullHeight} src={img.src}/>
            ))} */}
          {/* </div> */}
        </div>
        <div className={styles.swiper}>
          {thumbsFragment}
        </div>
      </div>
    </article>
  );
};
