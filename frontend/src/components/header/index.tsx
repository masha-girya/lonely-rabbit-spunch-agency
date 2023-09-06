import styles from "./index.module.scss";
import Logo from "@styles/assets/Logo.png";
import { Nav } from "@components/nav";
import { useRef, useState } from "react";
import { Socials } from "@components/socials";
import classNames from "classnames";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<null | any>(null);

  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) document.getElementsByTagName("html")[0].style.overflow = "hidden";
    else document.getElementsByTagName("html")[0].style.overflow = "auto";
  };

  return (
    <header
      className={classNames(styles.header, {
        [styles.header_open]: menuOpen,
      })}
    >
      <div className={styles.header__container}>
        <Link href="/">
          <img src={Logo.src} alt="logo" className={styles.header__logo} />
        </Link>
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
