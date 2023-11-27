import { useCallback, useEffect, useState } from "react";
import { Header } from "@components/header";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { NewsCard } from "@components/news/news-card";
import { getDataPages } from "src/services/api";
import { INewsSingle, NewsPage, Page } from "src/services/api-types";
import styles from "./index.module.scss";

const News = () => {
  const [title, setTitle] = useState("Lonely Rabbit News");
  const [newsData, setNewsData] = useState<INewsSingle[]>([]);
  const [newsAmount, setNewsAmount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = useCallback(() => {
    setNewsAmount((prev) => prev + 4);
  }, []);

  const loadData = useCallback(async () => {
    setIsLoading(true);

    try {
      const res = await getDataPages(Page.news, [NewsPage.banner_title]);
      if (res) {
        setTitle(res[0][NewsPage.banner_title]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadNewsData = useCallback(async () => {
    const res = await getDataPages(
      Page.newsSingle,
      ["*"],
      `limit=${newsAmount}`
    );

    if (res) {
      setNewsData(res);
    }
  }, [newsAmount]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadNewsData();
  }, [newsAmount]);

  return (
    <>
      <Header />
      <main className={styles.news}>
        <div className={styles.news__banner}>
          <div className={styles.news__banner__img}>
            <h1>{title}</h1>
          </div>
        </div>
        <div className={styles.news__newsList}>
          {newsData.map((item) => (
            <div key={item.id} className={styles.news__newsList__item}>
              <NewsCard key={item.id} card={item} />
            </div>
          ))}
          {newsData.length === 0 && !isLoading && (
            <p>There are no news yet</p>
          )}
        </div>
        <div className={styles.news__button}>
          <Button name="Show More" onClick={handleShowMore} isOnLoad={isLoading} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
