import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { NEWS_MOCK } from "src/constants/news";
import { useRouter } from "next/router";
import { API_MEDIA_ENDPOINT, NEWS_INNER_MOCK } from "src/constants";
import { StaticImageData } from "next/image";
import { NewsList } from "@components/news";
import {
  INewsSingle,
  Page,
  getDataPages,
  getPageBySlug,
} from "src/services/api";

const NewsInner = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [news, setNews] = useState<null | INewsSingle>(null);
  const [newsTitle, setNewsTitle] = useState("Lorem ipsum");

  const loadData = useCallback(async () => {
    if (typeof slug === "string") {
      const res = await getPageBySlug(slug);

      if (res) {
        setNews(res);
      }
    }
  }, [slug]);

  useEffect(() => {
    loadData();
  }, [slug]);

  const textContent = (
    <section className={styles.newsInner__content__textBox}>
      {news?.body.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </section>
  );

  return (
    <>
      <Header />
      {news ? (
        <main className={styles.newsInner}>
          <div className={styles.newsInner__banner}>
            <img
              alt={news.main_image.title}
              src={`${API_MEDIA_ENDPOINT}${news.main_image.meta.download_url}`}
              className={styles.newsInner__banner__img}
            />
          </div>
          <article className={styles.newsInner__content}>
            <div className={styles.newsInner__content__title}>
              <h1>{news.title}</h1>
              <p>{news.date}</p>
            </div>
            {/* {textContent} */}
            <section className={styles.newsInner__content__imgBox}>
              {/* <img
                src={}
                
              /> */}
            </section>
            {/* {textContent} */}
          </article>
          <NewsList title={newsTitle} buttonTitle="See more news" />
        </main>
      ) : (
        <div className={styles.newsInner__banner}>
          {/* <h1>There are no news under this route</h1> */}
        </div>
      )}
      <Footer />
    </>
  );
};

export default NewsInner;
