import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { NEWS_MOCK } from "src/constants/news";
import { useRouter } from "next/router";
import { NEWS_INNER_MOCK } from "src/constants";
import { StaticImageData } from "next/image";
import { NewsList } from "@components/news";

interface INews {
  id: number,
  title: string,
  text: string,
  date: string,
  link: string,
  img: StaticImageData,
  imgContent: StaticImageData,
  text1: string[],
  text2: string[],
}

const NewsInner = () => {
  const [newsData, setNewsData] = useState(NEWS_MOCK);
  const router = useRouter();
  const { slug } = router.query;
  const [news, setNews] = useState<null | INews>(null);
  const [newsTitle, setNewsTitle] = useState("Lorem ipsum");
  const [newsBtnTitle, setNewsBtnTitle] = useState("See more news");
  const [slideAmount, setSlideAmount] = useState(650);

  useEffect(() => {
    if (typeof slug === "string") {
      const data = newsData.find(
        (item) => item.id.toString() === slug.replace("news-", "")
      );
      if (data) {
        setNews({ ...data, ...NEWS_INNER_MOCK });
      }
    }
  }, [newsData, router]);

  const textContent = (
    <section className={styles.newsInner__content__textBox}>
      {news?.text1.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </section>
  )

  return (
    <>
      <Header />
      {news ? (
        <main className={styles.newsInner}>
          <div className={styles.newsInner__banner}>
            <img src={news.img.src} className={styles.newsInner__banner__img} />
          </div>
          <article className={styles.newsInner__content}>
            <div className={styles.newsInner__content__title}>
              <h1>{news.title}</h1>
              <p>{news.date}</p>
            </div>
            {textContent}
            <section className={styles.newsInner__content__imgBox}>
              <img src={news.imgContent.src} />
            </section>
            {textContent}
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
