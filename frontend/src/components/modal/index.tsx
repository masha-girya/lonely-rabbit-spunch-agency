import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Transition } from "react-transition-group";
import { useDevice } from "src/hooks/useDevice";
import classNames from "classnames";

interface IModal {
  children: any;
  isOpen: boolean;
  isOpenCallback: (state: boolean) => void;
  clickOutside?: () => void;
  isFullScreen?: boolean;
}

export const Modal: React.FC<IModal> = (props) => {
  const { isMobile } = useDevice();
  const { isOpen, isFullScreen, isOpenCallback, clickOutside } = props;

  const [open, setOpen] = useState(isOpen);
  const ref = useRef(null);
  const transRef = useRef(null);
  const duration = 200;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const handleClickOutside = () => {
    setOpen(false);
    if (clickOutside) clickOutside();
  };

  useEffect(() => {
    setOpen(isOpen);
    if (isOpen) {
      if (isMobile) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.body.classList.add(styles.modalOpen);
      }
    } else {
      if (isMobile) {
        document.documentElement.style.overflow = "auto";
      } else {
        document.documentElement.style.overflow = "visible";
      }
    }

    return () => {
      document.body.classList.remove(styles.modalOpen);
      if (isMobile) {
        document.documentElement.style.overflow = "auto";
      } else {
        document.documentElement.style.overflow = "visible";
      }
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    isOpenCallback(open);
  }, [open]);

  useClickOutside(ref, () => handleClickOutside(), open);

  return (
    <Transition
      in={open}
      nodeRef={transRef}
      timeout={duration}
      unmountOnExit
      onEnter={() => setOpen(true)}
      onExit={() => setOpen(false)}
    >
      {(state) => (
        <div
          ref={transRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className={styles.modal}
        >
          <div
            ref={ref}
            className={classNames(styles.modal__body, {
              [styles.modal__body_fullScreen]: isFullScreen,
            })}
          >
            {props.children}
          </div>
        </div>
      )}
    </Transition>
  );
};
