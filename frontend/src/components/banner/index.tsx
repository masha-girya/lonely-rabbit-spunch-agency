import { Button } from "@components/button";
import styles from "./index.module.scss";
import { Header } from "@components/header";
import { useState } from "react";

export const Banner = () => {
  const [title, setTitle] = useState("Lonely Rabbit: Into the Realm of Darkness and Fear");

  return (
    <div className={styles.banner}>
      <Header/>
      <div className={styles.banner__bannerContainer}>
        <div className={styles.banner__content}>
          <h1>{title}</h1>
          <div className={styles.banner__content__button}>
            <Button onClick={() => {}} name="Play Now"/>
          </div>
        </div>
        <div className={styles.banner__images}>
          <img src="" />
        </div>
      </div>
    </div>
  )
}