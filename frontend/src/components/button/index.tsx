import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

export interface IButton {
  variant?: "primary" | "secondary";
  name?: string;
  onClick: () => void;
  disabled?: boolean;
  Icon?: any;
  iconStart?: boolean;
  iconOnly?: boolean;
  iconStroke?: boolean;
  iconMove?: boolean;
  isOnLoad?: boolean;
}

export const Button: React.FC<IButton> = (props) => {
  const {
    variant = "primary",
    name,
    Icon,
    disabled,
    iconStart,
    iconStroke,
    iconOnly,
    iconMove,
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
        // [styles[`button--${variant}_notIcon`]]: !iconOnly,
        // [styles[`button--${variant}_move`]]: iconMove,
      })}
    >
      {/* {Icon && iconStart && !isOnLoad && (
        <div
          className={classNames(styles.button__icon, {
            // [styles.button__icon_stroke]: iconStroke,
            [styles.button__icon_start]: name,
            [styles.button__icon_invisible]: isOnLoad,
          })}
        >
          <Icon className={styles.icon} />
        </div>
      )} */}
      {isOnLoad && <div className={styles.loading} />}
      <div
        className={classNames(styles.button__name, {
          [styles.button__name_invisible]: isOnLoad,
        })}
      >
        {name}
      </div>
      {/* {Icon && !iconStart && !isOnLoad && (
        <div
          id="icon"
          className={classNames(styles.button__icon, {
            [styles.button__icon_stroke]: iconStroke,
            [styles.button__icon_end]: name,
            [styles.button__icon_invisible]: isOnLoad,
          })}
        >
          <Icon />
        </div>
      )} */}
    </button>
  );
};
