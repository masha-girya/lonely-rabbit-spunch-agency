import { SOCIALS } from "src/constants";
import styles from "./index.module.scss";

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