import { useDevice } from "src/hooks/useDevice";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { Button } from "@components/button";
import { INewsSingle } from "src/services/api-types";
import { API_MEDIA_ENDPOINT } from "src/constants";
import styles from "./index.module.scss";

interface INewsCard {
  card: INewsSingle;
}

export const NewsCard: React.FC<INewsCard> = (props) => {
  const { card } = props;
  const { id, thumbnail_image, title, caption, date, meta } = card;
  const { isMobile } = useDevice();
  const router = useRouter();

  const formatDesc = useMemo(() => {
    const splitCaption = caption.split(" ");
    if (splitCaption.length > 5 && isMobile) {
      return splitCaption.slice(0, 5).join(" ");
    }
    if (splitCaption.length > 12 && !isMobile) {
      return splitCaption.slice(0, 12).join(" ") + "...";
    }
    return caption;
  }, [isMobile]);

  return (
    <div className={styles.card} key={id}>
      <img
        src={`${API_MEDIA_ENDPOINT}${thumbnail_image.meta.download_url}`}
        alt={thumbnail_image.title}
        className={styles.card__img}
      />
      <div className={styles.card__text}>
        <h1 className={styles.card__text__title}>{title}</h1>
        <p className={styles.card__text__desc}>{formatDesc}</p>
        <p className={styles.card__text__date}>{date.split("-").reverse().join("/")}</p>
        <div className={styles.card__button}>
          <Button
            name="Read more"
            onClick={() => router.push(`/news/${meta.slug}`)}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};
