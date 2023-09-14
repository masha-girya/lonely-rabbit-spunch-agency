import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Header } from "@components/header";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { getDataPages } from "src/services/api";
import { AboutUsPage, IAboutUsSection, Page } from "src/services/api-types";
import { API_MEDIA_ENDPOINT } from "src/constants";
import styles from "./index.module.scss";

const AboutUs = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [ctaText, setCtaText] = useState(
    "Lorem ipsum dolor sit amet consectetur.."
  );
  const [aboutUsData, setAboutUsData] = useState<IAboutUsSection[]>([]);

  const loadData = useCallback(async () => {
    const res = await getDataPages(Page.about_us, ["*"]);
    if (res) {
      setText(res[0][AboutUsPage.banner_description]);
      setTitle(res[0][AboutUsPage.banner_title]);
      setAboutUsData(res[0][AboutUsPage.sections]);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.aboutUs}>
        <div className={styles.aboutUs__banner}>
          <div className={styles.aboutUs__banner__container}>
            <div className={styles.aboutUs__banner__text}>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutUs__list}>
          {aboutUsData.length > 0 &&
            aboutUsData.map((item, i) => (
              <section key={i} className={styles.aboutUs__item}>
                <div
                  className={classNames(styles.aboutUs__item__text, {
                    [styles.aboutUs__item__text_even]:
                      item.image_position === "LEFT",
                  })}
                >
                  <h1>Title required from back</h1>
                  <div className={styles.aboutUs__item__text__textBox}>
                    <p>{item.text}</p>
                  </div>
                </div>
                <div
                  className={classNames(styles.aboutUs__item__imgBox, {
                    [styles.aboutUs__item__imgBox]:
                      item.image_position === "LEFT",
                  })}
                >
                  <h1 className={styles.aboutUs__item__imgBox__title}>
                    Title required from back
                  </h1>
                  <img
                    src={`${API_MEDIA_ENDPOINT}${item.image.meta.download_url}`}
                    alt={item.image.title}
                    className={styles.aboutUs__item__imgBox__img}
                  />
                </div>
              </section>
            ))}
        </div>
        <section className={styles.aboutUs__ctaSection}>
          <h1>{ctaText}</h1>
          <div className={styles.aboutUs__ctaSection__button}>
            <Button name="Join Us" onClick={() => {}} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
