import { GameIcon } from "@components/icons/GameIcon";
import styles from "./index.module.scss";
import { Button } from "@components/button";
import { useEffect, useMemo, useRef, useState } from "react";
import { NEWS_MOCK } from "src/constants/news";
import { NewsCard } from "./news-card";
import { NextIcon } from "@components/icons/NextIcon";
import { PrevIcon } from "@components/icons/PrevIcon";
import classNames from "classnames";
import { Circles } from "@components/circles";
import { useSpringCarousel } from "react-spring-carousel";
import { useDevice } from "src/hooks/useDevice";
import { useRouter } from "next/router";
import { MobNews } from "./mobile-news";
import { DesktopNews } from "./desktop-news";

interface INews {
  title?: string;
  buttonTitle?: string;
}

export const NewsList: React.FC<INews> = (props) => {
  const { title, buttonTitle } = props;
  const router = useRouter();
  const [news, setNews] = useState(NEWS_MOCK);
  const { isMobile } = useDevice();

  return (
    <article className={styles.news}>
      <div className={styles.news__container}>
        <div className={styles.news__header}>
          <div className={styles.news__header__title}>
            <GameIcon />
            <h1>{title ?? "News"}</h1>
          </div>
          <div className={styles.news__header__button}>
            <Button name={buttonTitle ?? "All our news"} onClick={() => {}} />
          </div>
        </div>
        {isMobile ? <MobNews news={news} /> : <DesktopNews news={news} />}
        <div className={styles.news__header__buttonMob}>
          <Button
            name={buttonTitle ?? "All our news"}
            onClick={() => router.push("/news")}
          />
        </div>
      </div>
    </article>
  );
};
