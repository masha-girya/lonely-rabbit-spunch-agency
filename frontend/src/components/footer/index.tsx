import styles from "./index.module.scss";
import { Nav } from "@components/nav";
import { RightsIcon } from "@components/icons/RightsIcon";
import Logo from "@styles/assets/Logo.png";
import { Socials } from "@components/socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__mainBlock}>
          <Link href="/">
            <img
              className={styles.footer__mainBlock__logo}
              src={Logo.src}
              alt="logo"
            />
          </Link>
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
