import { VideoBlock } from "@components/video-block";
import { PhotoBlock } from "@components/photo-block";
import FootstepL from "./assets/FootStepLeft.png";
import FootstepR from "./assets/FootstepRight.png";
import styles from "./index.module.scss";
import { Transition } from "react-transition-group";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDevice } from "src/hooks/useDevice";

export const Gameplay = () => {
  const transRef = useRef<any | null>(null);
  const transRef2 = useRef<any | null>(null);
  const [isOnStep, setIsOnStep] = useState(true);
  const [isOnStep2, setIsOnStep2] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const [translateX2, setTranslateX2] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [translateY2, setTranslateY2] = useState(0);
  const [step, setStep] = useState(0);
  const [step2, setStep2] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [isOnPlay, setIsOnPlay] = useState(false);
  const { isMobile, isTablet } = useDevice();

  const duration = 400;

  const defaultStyle = {
    transition: `opacity ${duration}ms linear`,
    transform: "translate(0, 0)",
    opacity: 1,
  };

  const transStyle: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const transformSetter = useCallback((trX, trY, rotate) => {
    setTranslateX(trX);
    setTranslateY(trY);
    setRotate(rotate);
  }, []);

  const transformSetter2 = useCallback((trX, trY, rotate) => {
    setTranslateX2(trX);
    setTranslateY2(trY);
    setRotate2(rotate);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOnPlay && !isMobile && !isTablet) {
      timer = setInterval(() => {
        setIsOnStep(false);

        setTimeout(() => {
          if (window.innerWidth < translateX || step >= 10) {
            transformSetter(0, 0, 0);
            setStep(0);
          } else {
            switch (step) {
              case 0:
                transformSetter(-75, 75, 5);
                break;
              case 1:
                // translate(-197px, 281px) rotate(-25deg);
                transformSetter(-197, 280, -25);
                break;
              case 2:
                // translate(-200px, 490px) rotate(-40deg);
                transformSetter(-200, 490, -40);
                break;
              case 3:
                // translate(-103px, 717px) rotate(-75deg);
                transformSetter(-103, 717, -75);
                break;
              case 4:
                // translate(47px, 897px) rotate(-85deg);
                transformSetter(47, 897, -85);
                break;
              case 5:
                // translate(230px, 983px) rotate(-100deg);
                transformSetter(230, 983, -100);
                break;
              case 6:
                // translate(438px, 1032px) rotate(-120deg)
                transformSetter(438, 1032, -120);
                break;
              case 7:
                // translate(648px, 1065px) rotate(-100deg)
                transformSetter(648, 1065, -100);
                break;
              case 8:
                // translate(864px, 1149px) rotate(-105deg)
                transformSetter(864, 1149, -105);
                break;
              case 9:
                // translate(1069px, 1216px) rotate(-100deg)
                transformSetter(1069, 1216, -100);
                break;
              default:
                break;
            }
          }
          setStep((prev) => prev + 1);

          setTimeout(() => {
            setIsOnStep(true);
          }, 100);
        }, duration);
      }, duration * 2);
    }

    return () => {
      clearInterval(timer);
    };
  }, [translateX, translateY, step, isOnPlay, isMobile, isTablet]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    if (isOnPlay && !isMobile && !isTablet) {
      timeout = setTimeout(
        () => {
          timer = setInterval(() => {
            setIsOnStep2(false);

            setTimeout(() => {
              if (window.innerWidth < translateX2 || step2 >= 10) {
                transformSetter2(0, 0, 0);
                setStep2(0);
              } else {
                switch (step2) {
                  case 0:
                    transformSetter2(-157, 186, 35);
                    break;
                  case 1:
                    // translate(-209px, 391px) rotate(0deg);
                    transformSetter2(-209, 391, 0);
                    break;
                  case 2:
                    // translate(-168px, 595px) rotate(-35deg);
                    transformSetter2(-168, 595, -35);
                    break;
                  case 3:
                    // translate(-46px, 791px) rotate(-45deg);
                    transformSetter2(-46, 791, -45);
                    break;
                  case 4:
                    // translate(110px, 919px) rotate(-80deg);
                    transformSetter2(110, 919, -80);
                    break;
                  case 5:
                    // translate(283px, 984px) rotate(-85deg)
                    transformSetter2(283, 948, -85);
                    break;
                  case 6:
                    // translate(504px, 1018px) rotate(-90deg)
                    transformSetter2(504, 1018, -90);
                    break;
                  case 7:
                    // translate(718px, 1085px) rotate(-75deg)
                    transformSetter2(718, 1085, -75);
                    break;
                  case 8:
                    // translate(926px, 1161px) rotate(-80deg)
                    transformSetter2(926, 1161, -80);
                    break;
                  case 9:
                    // translate(1143px, 1229px) rotate(-75deg)
                    transformSetter2(1143, 1229, -75);
                    break;
                  default:
                    break;
                }
              }
              setStep2((prev) => prev + 1);

              setTimeout(() => {
                setIsOnStep2(true);
              }, 100);
            }, duration);
          }, duration * 2);
        },
        translateY2 === 0 ? duration * 1.7 : 0
      );
    }

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [translateX2, translateY2, step2, isOnPlay, isMobile, isTablet]);

  useEffect(() => {
    const handleScroll = () => {
      if (transRef.current) {
        if (transRef.current.getBoundingClientRect().y < 400) {
          setIsOnPlay(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.gameplay}>
      <div className={styles.gameplay__container}>
        <div className={styles.footsteps}>
          <Transition in={isOnStep} timeout={duration * 2} nodeRef={transRef}>
            {(state) => (
              <div
                className={styles.footsteps__left}
                ref={transRef}
                style={{
                  ...defaultStyle,
                  ...transStyle[state],
                  transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
                }}
              >
                <img src={FootstepL.src} />
              </div>
            )}
          </Transition>
          <Transition in={isOnStep2} timeout={duration * 2} nodeRef={transRef2}>
            {(state) => (
              <div
                className={styles.footsteps__right}
                ref={transRef2}
                style={{
                  ...defaultStyle,
                  ...transStyle[state],
                  transform: `translate(${translateX2}px, ${translateY2}px) rotate(${rotate2}deg)`,
                }}
              >
                <img src={FootstepR.src} />
              </div>
            )}
          </Transition>
        </div>
        <VideoBlock />
        <PhotoBlock />
      </div>
    </section>
  );
};
