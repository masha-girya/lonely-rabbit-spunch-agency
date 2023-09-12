import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "@components/news/news-card";
import {
  INewsSingle,
  NewsPage,
  NewsSinglePage,
  Page,
  getDataPages,
} from "src/services/api";

const News = () => {
  const [title, setTitle] = useState("");
  const [newsData, setNewsData] = useState<INewsSingle[]>([]);
  const [newsLength, setNewsLength] = useState(0);
  const [visibleNews, setVisibleNews] = useState<INewsSingle[]>([]);

  const handleShowMore = useCallback(() => {
    if (newsLength - 4 < newsData.length) {
      setVisibleNews(newsData.slice(0, newsLength));
      setNewsLength((prev) => prev + 4);
    }
  }, [newsLength, newsData]);

  const loadData = useCallback(async () => {
    const res = await getDataPages(Page.news, [NewsPage.title]);
    if (res) {
      setTitle(res[NewsPage.title]);
    }
  }, []);

  const loadNewsData = useCallback(async () => {
    const res = await getDataPages(Page.newsSingle, ["*"]);

    if (res) {
      setNewsLength(res.length);
      setNewsData(res);
      setVisibleNews(res.length > 4 ? res.slice(0, 4) : res);
    }
  }, []);

  useEffect(() => {
    loadData();
    loadNewsData();
  }, []);

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
          {visibleNews.map((item) => (
            <div key={item.id} className={styles.news__newsList__item}>
              <NewsCard key={item.id} card={item} />
            </div>
          ))}
        </div>
        <div className={styles.news__button}>
          <Button name="Show More" onClick={handleShowMore} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
