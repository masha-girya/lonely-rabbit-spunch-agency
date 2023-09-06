import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useState } from "react";
import { ABOUT_US_MOCK } from "src/constants";
import classNames from "classnames";
import { Button } from "@components/button";
import { Footer } from "@components/footer";

const AboutUs = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus."
  );
  const [ctaText, setCtaText] = useState("Lorem ipsum dolor sit amet consectetur..")
  const [aboutUsData, setAboutUsData] = useState(ABOUT_US_MOCK);

  return (
    <main className={styles.aboutUs}>
      <Header />
      <div className={styles.aboutUs__banner}>
        <div className={styles.aboutUs__banner__container}>
          <div className={styles.aboutUs__banner__text}>
            <h1>About us</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs__list}>
        {aboutUsData.map((item, i) => (
          <section key={i} className={styles.aboutUs__item}>
            <div
              className={classNames(styles.aboutUs__item__text, {
                [styles.aboutUs__item__text_even]: i % 2 === 0,
              })}
            >
              <h1>{item.title}</h1>
              <div className={styles.aboutUs__item__text__textBox}>
                {item.text.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
            <div className={classNames(styles.aboutUs__item__imgBox, {
                  [styles.aboutUs__item__imgBox]: i % 2 === 0,
                })}>
              <h1 className={styles.aboutUs__item__imgBox__title}>
                {item.title}
              </h1>
              <img
                src={item.image.src}
                alt={item.title}
                className={styles.aboutUs__item__imgBox__img}
              />
            </div>
          </section>
        ))}
      </div>
      <section className={styles.aboutUs__ctaSection}>
        <h1>{ctaText}</h1>
        <div className={styles.aboutUs__ctaSection__button}>
          <Button
            name="Join Us"
            onClick={() => {}}
          />
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default AboutUs;
