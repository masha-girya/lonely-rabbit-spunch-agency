import { NAV } from "src/constants";
import styles from "./index.module.scss";
import classNames from "classnames";

interface INav {
  isFooter?: boolean;
}

export const Nav: React.FC<INav> = (props) => {
  const { isFooter } = props;

  return (
    <nav className={styles.nav}>
      <ul className={classNames(styles.nav__navList, {
        [styles.nav__navList_footer]: isFooter,
      })}>
        {NAV.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
