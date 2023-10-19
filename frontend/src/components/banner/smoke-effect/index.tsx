import styles from "./index.module.scss";
import smokeImg from "../assets/smoke.png";

export const SmokeEffect = () => {
  return (
    <div className={styles.smokeElement}>
      <div className={styles.smokeElement__container}>
        <div className={styles.smoke}>
          <img className={styles.smoke__itemBig} src={smokeImg.src} />
        </div>
        <div className={styles.smoke}>
          <img className={styles.smoke__itemMedium} src={smokeImg.src} />
        </div>
      </div>
    </div>
  );
};
