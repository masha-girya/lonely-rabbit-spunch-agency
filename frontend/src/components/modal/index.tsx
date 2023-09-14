import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useDevice } from "src/hooks/useDevice";
import styles from "./index.module.scss";

interface IModal {
  children: any;
  isOpen: boolean;
  isOpenCallback: (state: boolean) => void;
  clickOutside?: () => void;
  isFullScreen?: boolean;
}

export const Modal: React.FC<IModal> = (props) => {
  const { isOpen, isFullScreen, isOpenCallback, clickOutside } = props;

  const [open, setOpen] = useState(isOpen);
  const ref = useRef(null);
  const { isMobile } = useDevice();
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
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.getElementsByTagName("html")[0].style.overflow = "visible";
    }
  }, [isOpen]);

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
