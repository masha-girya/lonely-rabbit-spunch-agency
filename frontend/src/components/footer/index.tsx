import Link from "next/link";
import { Nav } from "@components/nav";
import { RightsIcon } from "@components/icons/RightsIcon";
import { Socials } from "@components/socials";
import Logo from "@styles/assets/Logo.png";
import styles from "./index.module.scss";
import { LogoLinkWrapper } from "@components/logo-link-wrapper";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__mainBlock}>
          <LogoLinkWrapper>
            <img
              className={styles.footer__mainBlock__logo}
              src={Logo.src}
              alt="logo"
            />
          </LogoLinkWrapper>
          <div className={styles.footer__mainBlock__rightCol}>
            <Nav isFooter />
            <Socials />
          </div>
        </div>
        <div className={styles.footer__rights}>
          <p className={styles.footer__rights__text}>
            <RightsIcon />
            Lonely Rabbit.
          </p>
          <a className={styles.footer__rights__link} href="/privacy-policy">
            All rights reserved
          </a>
        </div>
      </div>
    </footer>
  );
};
