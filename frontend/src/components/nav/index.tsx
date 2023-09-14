import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAV, NAV_FOOTER } from "src/constants";
import styles from "./index.module.scss";

interface INav {
  isFooter?: boolean;
  isMobMenu?: boolean;
}

export const Nav: React.FC<INav> = (props) => {
  const { isFooter, isMobMenu } = props;
  const nav = isFooter ? NAV_FOOTER : NAV;
  const router = useRouter();

  const isActive = (link: string) => {
    if (link === "/") {
      return router.asPath === link;
    }
    return router.asPath.includes(link);
  };

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
              [styles.nav__link_mobMenu]: isMobMenu,
              [styles.nav__link_isActive]: !isFooter && isActive(item.link),
            })}
            key={item.title}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
