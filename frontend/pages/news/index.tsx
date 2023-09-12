import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useCallback, useState } from "react";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "@components/news/news-card";
import { Page, getDataPages } from "src/services/api";

const News = () => {
  const [newsData, setNewsData] = useState(NEWS_MOCK);
  const [newsLength, setNewsLength] = useState(8);
  const [visibleNews, setVisibleNews] = useState(newsData.slice(0, 4));

  const handleShowMore = useCallback(() => {
    if (newsLength - 4 < newsData.length) {
      setVisibleNews(newsData.slice(0, newsLength));
      setNewsLength((prev) => prev + 4);
    }
  }, [newsLength, newsData]);

  // const loadData = async () => {
  //   const res = await getDataPages(Page.news, [HomePage.second_block_title]);
  //   if (res) {
  //     setTitle(res[HomePage.second_block_title]);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <>
      <Header />
      <main className={styles.news}>
        <div className={styles.news__banner}>
          <div className={styles.news__banner__img}>
            <h1>Latest News</h1>
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
