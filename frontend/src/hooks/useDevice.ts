import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallNote, setIsSmallNote] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      setIsTablet(window.innerWidth < 800 && window.innerWidth >= 480);
      setIsSmallNote(window.innerWidth < 1200 && window.innerWidth >= 800);
      setIsDesktop(window.innerWidth >= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isSmallNote, isTablet, isDesktop };
};
