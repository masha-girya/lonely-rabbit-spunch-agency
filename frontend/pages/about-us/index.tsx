import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useState } from "react";
import BannerImg from "./assets/Banner.png";

const AboutUs = () => {
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.");

  return (
    <main className={styles.aboutUs}>
      <Header />
      <div className={styles.aboutUs__banner}>
        <img src={BannerImg.src}/>
        <div className={styles.aboutUs__banner__text}>
          <h1>About us</h1>
          <p>{text}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
