import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Nav } from "@components/nav";
import { Socials } from "@components/socials";
import Logo from "@styles/assets/Logo.png";
import styles from "./index.module.scss";
import { LogoLinkWrapper } from "@components/logo-link-wrapper";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  const handleMobileMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.getElementsByTagName("html")[0].style.overflow = "visible";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.getElementsByTagName("html")[0].style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles.header_open]: menuOpen,
        [styles.header_scroll]: onScroll,
      })}
    >
      <div className={styles.header__container}>
        <LogoLinkWrapper>
          <img
            src={Logo.src}
            alt="logo"
            className={classNames(styles.header__logo, {
              [styles.header__logo_scroll]: onScroll,
            })}
          />
        </LogoLinkWrapper>
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
