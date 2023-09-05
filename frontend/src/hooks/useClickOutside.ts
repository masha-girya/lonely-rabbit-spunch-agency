import { useEffect } from "react";

export const useClickOutside = (
  ref: any,
  callback: any,
  state: boolean,
  additionalRef?: any
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        ref.current &&
        !ref?.current?.contains(event.target) &&
        !additionalRef?.current?.contains(event.target)
      ) {
        setTimeout(() => {
          callback();
        }, 50);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, state]);
};
