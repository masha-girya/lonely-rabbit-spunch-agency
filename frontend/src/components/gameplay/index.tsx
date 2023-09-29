import { VideoBlock } from "@components/video-block";
import { PhotoBlock } from "@components/photo-block";
import FootstepL from "./assets/FootStepLeft.png";
import FootstepR from "./assets/FootstepRight.png";
import styles from "./index.module.scss";
import { Transition } from "react-transition-group";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDevice } from "src/hooks/useDevice";
import classNames from "classnames";

export const Gameplay = () => {
  const transRef = useRef<any | null>(null);
  const [isOnPlay, setIsOnPlay] = useState(false);
  const { isTablet, isMobile } = useDevice();

  useEffect(() => {
    if (!isMobile && !isTablet) {
      const handleScroll = () => {
        if (transRef.current) {
          if (transRef.current.getBoundingClientRect().y < 500) {
            setIsOnPlay(true);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile, isTablet]);

  return (
    <section className={styles.gameplay}>
      <div className={styles.gameplay__container}>
        <div className={styles.footsteps} ref={transRef}>
          {isOnPlay && (
            <>
              {Array(11)
                .fill(0)
                .map((item, i) => (
                  <img
                    key={i}
                    src={FootstepL.src}
                    style={{ animationDelay: `${i * 2}s` }}
                    className={classNames(
                      styles.footsteps__left,
                      styles[`footsteps__left_${i + 1}`]
                    )}
                  />
                ))}
              {Array(11)
                .fill(0)
                .map((item, i) => (
                  <img
                    key={i}
                    src={FootstepR.src}
                    style={{ animationDelay: `${i * 2 + 1}s` }}
                    className={classNames(
                      styles.footsteps__right,
                      styles[`footsteps__right_${i + 1}`]
                    )}
                  />
                ))}
            </>
          )}
        </div>
        <VideoBlock />
        <PhotoBlock />
      </div>
    </section>
  );
};
