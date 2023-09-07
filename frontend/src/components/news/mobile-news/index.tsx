import { useSpringCarousel } from "react-spring-carousel";
import { NewsCard } from "../news-card";
import { NEWS_MOCK } from "src/constants/news";
import { useState } from "react";
import { Circles } from "@components/circles";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IMobNews {
  news: typeof NEWS_MOCK;
}

export const MobNews: React.FC<IMobNews> = (props) => {
  const { news } = props;
  const [currentNews, setCurrentNews] = useState(news[0].id);

  const {
    carouselFragment,
    thumbsFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToItem,
  } = useSpringCarousel({
    withLoop: false,
    itemsPerSlide: 1,
    slideType: "fixed",
    gutter: 20,
    withThumbs: true,
    items: news.map((item, i) => ({
      id: item.id.toString(),
      renderItem: <NewsCard card={item} />,
      renderThumb: (
        <Circles
          highlighted={item.id === currentNews}
          handleMove={() => slideToItem(i)}
        />
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentNews(+event?.nextItem?.id);
    }
  });

  return (
    <div>
      <div className={styles.cards}>{carouselFragment}</div>
      <div className={styles.swiper}>{thumbsFragment}</div>
    </div>
  );
};
