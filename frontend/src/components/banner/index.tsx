import { Button } from "@components/button";
import { animated, useTransition, config } from '@react-spring/web'
import styles from "./index.module.scss";
import { Header } from "@components/header";
import { useEffect, useRef, useState } from "react";
import { BANNER_IMGS } from "src/constants";

export const Banner = () => {
  const [title, setTitle] = useState(
    "Lonely Rabbit: Into the Realm of Darkness and Fear"
  );
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOnChange, setImageOnChange] = useState(false);
  // const [items, setItems] = useState(BANNER_IMGS.map((img, index) => ({ ...img, key: index })));
  const ref = useRef<any | null>(null);

  const [index, setIndex] = useState(0);
  const [indexBack, setIndexBack] = useState(BANNER_IMGS.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      // const lastItem = items[items.length - 1];

      // setItems(prev => [...prev.slice(1), lastItem]);
      setIndex((prevIndex) => (prevIndex + 1) % BANNER_IMGS.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const transitions = useTransition(index, {
    from: { opacity: '0' },
    enter: { opacity: '1' },
    // leave: { transform: 'translateX(100%)' },
    lazy: false,
  });

  return (
    <div className={styles.banner}>
      <Header />
      <div className={styles.banner__bannerContainer}>
        <div className={styles.banner__content}>
          <h1>{title}</h1>
          <div className={styles.banner__content__button}>
            <Button onClick={() => {}} name="Play Now" />
          </div>
        </div>
        <div className={styles.banner__images}>
          <div className={styles.banner__images__box}>
            {transitions((style, i) => (
              <animated.div
                key={i}
                style={{
                  ...style,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  className={styles.banner__images__img}
                  src={BANNER_IMGS[index].src}
                  ref={ref}
                />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
