import { Button } from "@components/button";
import styles from "./index.module.scss";
import { useState } from "react";

export const CtaBanner = () => {
  const [title, setTitle] = useState('Unveiling the Unseen - Lonely Rabbit, where nightmares are born. Explore the abyss between reality and terror');

  return (
    <article className={styles.ctaBanner}>
      <div className={styles.ctaBanner__container}>
        <h1>
          {title}
        </h1>
        <div className={styles.ctaBanner__button}>
          <Button onClick={() => {}} name="Pre order the game"/>
        </div>
      </div>
    </article>
  )
}