import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Footer } from "@components/footer";
import { useRouter } from "next/router";
import { API_MEDIA_ENDPOINT } from "src/constants";
import { NewsList } from "@components/news";
import {
  IBodyImage,
  INewsSingle,
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

  const createContent = (body: INewsSingle["body"]) => {
    return body.map((item, i) => {
      switch (item.type) {
        case "h1":
          return <h1 key={i}>{item.value}</h1>;
        case "h2":
          return <h2 key={i}>{item.value}</h2>;
        case "paragraph":
          return <p>{item.value}</p>;
        case "image":
          const imageValue = item.value as IBodyImage;
          return (
            <div key={i} className={styles.newsInner__content__imgBox}>
              <img
                src={`${API_MEDIA_ENDPOINT}${imageValue.url}`}
                alt={imageValue.title}
              />
            </div>
          );
        default:
          return <p></p>;
      }
    });
  };

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
            <section className={styles.newsInner__content__textBox}>
              {createContent(news.body)}
            </section>
          </article>
          <NewsList title={newsTitle} buttonTitle="See more news" />
        </main>
      ) : (
        <div className={styles.newsInner__banner}>
        </div>
      )}
      <Footer />
    </>
  );
};

export default NewsInner;
