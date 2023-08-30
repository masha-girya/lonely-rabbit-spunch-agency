import styles from "./index.module.scss";
import Logo from "@styles/assets/Logo.png";
import { Nav } from "@components/nav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={Logo.src} alt="logo" className={styles.header__logo} />
        <Nav/>
      </div>
    </header>
  )
}