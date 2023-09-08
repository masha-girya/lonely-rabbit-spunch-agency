import { useEffect, useState } from "react";
import { useDevice } from "./useDevice";

interface IUseSwiper {
  cardLength: number;
  ref: any | null;
  dataArray: any[];
}

export const useSwiper = (props: IUseSwiper) => {
  const { cardLength, ref, dataArray } = props;
  const [touchStartX, setTouchStartX] = useState(0);
  const [circleCounter, setCircleCounter] = useState(1);
  const { isMobile, isDesktop } = useDevice();

  const slideNext = () => {
    if (ref.current) {
      ref.current.scrollTo(ref.current.scrollLeft + cardLength, 0);
    }
  };

  const slidePrev = () => {
    if (ref.current) {
      ref.current.scrollTo(ref.current.scrollLeft - cardLength, 0);
    }
  };

  const slideTo = (id: number) => {
    const targetScrollX = (id - 1) * cardLength;

    ref.current.scrollTo({
      left: targetScrollX,
    });

    if (isMobile) {
      setCircleCounter(id);
    }
  };

  const handleScroll = () => {
    if (ref.current) {
      const currCircle = Math.ceil(ref.current.scrollLeft / cardLength);
      console.log(currCircle)

      if (currCircle === dataArray.length - 1 && isDesktop) {
        setCircleCounter(currCircle);
      } else {
        setCircleCounter(currCircle + 1);
      }
    }
  };

  useEffect(() => {
    if (ref.current && !isMobile) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current && !isMobile) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref, isMobile]);


  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any, id: number) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const scrollDirection = deltaX < 0 ? 1 : -1;

    if (ref.current) {
      if (scrollDirection > 0 && circleCounter !== dataArray.length) {
        slideTo(id + 1);
        setCircleCounter(id + 1);
      }
      if (scrollDirection < 0 && circleCounter !== 1) {
        slideTo(id - 1);
        setCircleCounter(id - 1);
      }
    }
  };

  return { circleCounter, handleTouchEnd, handleTouchStart, slideTo, slideNext, slidePrev }
}