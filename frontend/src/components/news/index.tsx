import { GameIcon } from "@components/icons/GameIcon";
import styles from "./index.module.scss";
import { Button } from "@components/button";
import { useCallback, useEffect, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { useDevice } from "src/hooks/useDevice";
import { useRouter } from "next/router";
import { DesktopNews } from "./desktop-news";
import { INewsSingle, Page, getDataPages } from "src/services/api";

interface INews {
  title?: string;
  buttonTitle?: string;
}

export const NewsList: React.FC<INews> = (props) => {
  const { title, buttonTitle } = props;
  const router = useRouter();
  const [news, setNews] = useState<INewsSingle[]>([]);
  const { isMobile, isDesktop } = useDevice();
  const [circles, setCircles] = useState<INewsSingle[]>([]);

  const cardLength = isMobile ? (window.innerWidth - 18) : 614;

  const loadNewsData = useCallback(async () => {
    const res = await getDataPages(Page.newsSingle, ["*"]);

    if (res) {
      setCircles(isDesktop ? res.slice(0, -1) : res);
      setNews(res);
    }
  }, [isDesktop, isMobile]);

  useEffect(() => {
    loadNewsData();
  }, []);

  const button = (
      <Button name={buttonTitle ?? "All our news"} onClick={() => router.push("/news")} />
  )

  return (
    <article className={styles.news}>
      <div className={styles.news__container}>
        <div className={styles.news__header}>
          <div className={styles.news__header__title}>
            <GameIcon />
            <h1>{title ?? "News"}</h1>
          </div>
          <div className={styles.news__header__button}>
            {button}
          </div>
        </div>
        <DesktopNews cardLength={cardLength} circles={circles} news={news} />
        <div className={styles.news__header__buttonMob}>
          {button}
        </div>
      </div>
    </article>
  );
};
