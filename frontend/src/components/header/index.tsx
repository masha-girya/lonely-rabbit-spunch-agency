import styles from "./index.module.scss";
import Logo from "@styles/assets/Logo.png";
import { Nav } from "@components/nav";
import { useRef, useState } from "react";
import { Socials } from "@components/socials";
import classNames from "classnames";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<null | any>(null);

  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={Logo.src} alt="logo" className={styles.header__logo} />
        <div className={styles.burger}>
          <input onClick={handleMobileMenu} type="checkbox" />
          <span></span>
        </div>
        <Nav />
      </div>
      <div
        className={classNames(styles.mobMenu, {
          [styles.mobMenu_open]: menuOpen,
        })}
        ref={ref}
      >
        <div className={styles.mobMenu__nav}>
          <Nav isMobMenu />
        </div>
        <div className={styles.mobMenu__socials}>
          <Socials />
        </div>
      </div>
    </header>
  );
};
