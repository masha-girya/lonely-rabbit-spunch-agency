import { NAV, NAV_FOOTER } from "src/constants";
import styles from "./index.module.scss";
import classNames from "classnames";

interface INav {
  isFooter?: boolean;
  isMobMenu?: boolean;
}

export const Nav: React.FC<INav> = (props) => {
  const { isFooter, isMobMenu } = props;
  const nav = isFooter ? NAV_FOOTER : NAV;

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.nav_footer]: isFooter,
        [styles.nav_mobMenu]: isMobMenu,
      })}
    >
      <ul
        className={classNames(styles.nav__navList, {
          [styles.nav__navList_footer]: isFooter,
          [styles.nav__navList_mobMenu]: isMobMenu,
        })}
      >
        {nav.map((item) => (
          <li
            className={classNames(styles.nav__link, {
              [styles.nav__link_mobMenu]: isMobMenu
            })}
            key={item.title}
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
