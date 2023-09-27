import classNames from "classnames";
import styles from "./index.module.scss";

interface IBurgerMenu {
  handleMobileMenu: () => void;
  menuOpen: boolean;
}

export const BurgerMenu: React.FC<IBurgerMenu> = (props) => {
  const { handleMobileMenu, menuOpen } = props;
  return (
    <div className={styles.burger} onClick={handleMobileMenu}>
      {Array(3)
        .fill(0)
        .map((item, i) => (
          <div
            key={i}
            className={classNames(styles[`burger__${i + 1}`], {
              [styles[`burger__${i + 1}_open`]]: menuOpen,
            })}
          ></div>
        ))}
    </div>
  );
};
