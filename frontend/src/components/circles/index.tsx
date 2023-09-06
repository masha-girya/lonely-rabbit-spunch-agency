import classNames from "classnames";
import React from "react";
import styles from "./index.module.scss";

interface ICircles {
  handleMove: () => void;
  highlighted: boolean,
}

export const Circles: React.FC<ICircles> = (props) => {
  const { handleMove, highlighted } = props;

  return (
    <div
      onClick={handleMove}
      className={classNames(styles.circle, {
        [styles.circle_main]: highlighted,
      })}
    ></div>
  );
};
