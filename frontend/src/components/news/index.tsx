import { useCallback, useEffect, useState } from "react";
import { useDevice } from "src/hooks/useDevice";
import { useRouter } from "next/router";
import { SwiperNews } from "./swiper";
import { GameIcon } from "@components/icons/GameIcon";
import { Button } from "@components/button";
import { getDataPages } from "src/services/api";
import { INewsSingle, Page } from "src/services/api-types";
import styles from "./index.module.scss";

interface INews {
  title?: string;
  buttonTitle?: string;
}

export const NewsList: React.FC<INews> = (props) => {
  const { title, buttonTitle } = props;
  const router = useRouter();
  const [news, setNews] = useState<INewsSingle[]>([]);
  const { isMobile, isDesktop } = useDevice();

  const loadNewsData = useCallback(async () => {
    const res = await getDataPages(Page.newsSingle, ["*"]);

    if (res) {
      setNews(res);
    }
  }, [isDesktop, isMobile]);

  useEffect(() => {
    loadNewsData();
  }, []);

  const button = (
    <Button
      name={buttonTitle ?? "All our news"}
      onClick={() => router.push("/news")}
    />
  );

  return (
    <article className={styles.news}>
      <div className={styles.news__container}>
        <div className={styles.news__header}>
          <div className={styles.news__header__title}>
            <GameIcon />
            <h1>{title ?? "News"}</h1>
          </div>
          <div className={styles.news__header__button}>{button}</div>
        </div>
        {news.length > 0 && <SwiperNews news={news} />}
        <div className={styles.news__header__buttonMob}>{button}</div>
      </div>
    </article>
  );
};
