import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { NewsList } from "@components/news";
import { ContentConstructor } from "@components/content-constructor";
import { getPageBySlug } from "src/services/api";
import { INewsSingle } from "src/services/api-types";
import { API_MEDIA_ENDPOINT } from "src/constants";
import styles from "./index.module.scss";

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

  return (
    <>
      <Header />
      {news ? (
        <main className={styles.newsInner}>
          <div className={styles.newsInner__banner}>
            {news.main_image && (
              <img
                alt={news.main_image.title}
                src={`${API_MEDIA_ENDPOINT}${news.main_image.meta.download_url}`}
                className={styles.newsInner__banner__img}
              />
            )}
          </div>
          <article className={styles.newsInner__content}>
            <div className={styles.newsInner__content__title}>
              <h1>{news.title}</h1>
              <p>{news.date.split("-").reverse().join(".")}</p>
            </div>
            <section className={styles.newsInner__content__textBox}>
              <ContentConstructor
                content={news.body}
                stylesCustom={styles.newsInner__content__imgBox}
              />
            </section>
          </article>
          <NewsList title={newsTitle} buttonTitle="See more news" />
        </main>
      ) : (
        <div className={styles.newsInner__banner}></div>
      )}
      <Footer />
    </>
  );
};

export default NewsInner;
