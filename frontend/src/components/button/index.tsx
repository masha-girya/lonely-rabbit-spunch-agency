import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface IButton {
  variant?: "primary" | "secondary";
  name?: string;
  onClick: () => void;
  disabled?: boolean;
  isOnLoad?: boolean;
}

export const Button: React.FC<IButton> = (props) => {
  const {
    variant = "primary",
    name,
    disabled,
    isOnLoad,
    onClick,
  } = props;

  const handleClick = () => {
    if (!disabled) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(styles.button, {
        [styles[`button--${variant}`]]: variant,
        [styles.button_disabled]: disabled,
      })}
    >
      {isOnLoad && <div className={styles.loading} />}
      <div
        className={classNames(styles.button__name, styles[`button--${variant}__name`], {
          [styles.button__name_invisible]: isOnLoad,
        })}
      >
        {name}
      </div>
    </button>
  );
};
