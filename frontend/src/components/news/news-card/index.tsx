import { Button } from "@components/button";
import styles from "./index.module.scss";
import { useDevice } from "src/hooks/useDevice";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { INewsSingle } from "src/services/api";
import { API_MEDIA_ENDPOINT } from "src/constants";

interface INewsCard {
  card: INewsSingle;
}

export const NewsCard: React.FC<INewsCard> = (props) => {
  const { card } = props;
  const { id, main_image, title, caption, date, meta } = card;
  const { isMobile } = useDevice();
  const router = useRouter();
  console.log(card)

  const formatDesc = useMemo(() => {
    return isMobile ? caption.split(" ").slice(0, 5).join(" ") : caption;
  }, [isMobile]);

  return (
    <div className={styles.card} key={id}>
      <img
        src={`${API_MEDIA_ENDPOINT}${main_image.meta.download_url}`}
        alt={main_image.title}
        className={styles.card__img}
      />
      <div className={styles.card__text}>
        <h1 className={styles.card__text__title}>{title}</h1>
        <p className={styles.card__text__desc}>{formatDesc}</p>
        <p className={styles.card__text__date}>{date}</p>
        <div className={styles.card__button}>
          <Button
            name="Read more"
            onClick={() => router.push(`/news/news-${meta.slug}`)}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};
