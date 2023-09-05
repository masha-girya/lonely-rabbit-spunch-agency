import styles from "./index.module.scss";
import { Nav } from "@components/nav";
import { RightsIcon } from "@components/icons/RightsIcon";
import Logo from "@styles/assets/Logo.png";
import { Socials } from "@components/socials";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__mainBlock}>
          <img src={Logo.src} alt="logo"/>
          <div className={styles.footer__mainBlock__rightCol}>
            <Nav isFooter />
            <Socials />
          </div>
        </div>
        <div className={styles.footer__rights}>
          <p className={styles.footer__rights__text}>
            <RightsIcon/>
            Lonely Rabbit. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}