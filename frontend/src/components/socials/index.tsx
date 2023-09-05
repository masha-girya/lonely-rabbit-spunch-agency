import styles from "./index.module.scss";
import { SOCIALS } from "src/constants";

export const Socials = () => {
  return (
    <ul className={styles.socials}>
      {SOCIALS.map(item => (
        <li key={item.title}>
          <a href={item.link} title={item.title}>{item.Icon}</a>
        </li>
      ))}
    </ul>
  )
}