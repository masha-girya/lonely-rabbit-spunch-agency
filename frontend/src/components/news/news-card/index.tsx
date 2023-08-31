import { Button } from "@components/button";
import { NEWS_MOCK } from "src/constants/news";
import styles from "./index.module.scss";

interface INewsCard {
  card: (typeof NEWS_MOCK)[0];
}

export const NewsCard: React.FC<INewsCard> = (props) => {
  const { card } = props;
  const { id, img, title, text, date } = card;

  return (
    <div className={styles.card} key={id}>
      <img src={img.src} alt={title} className={styles.card__img} />
      <div className={styles.card__text}>
        <h1 className={styles.card__text__title}>{title}</h1>
        <p className={styles.card__text__desc}>{text}</p>
        <p className={styles.card__text__date}>{date}</p>
        <div className={styles.card__button}>
          <Button name="Read more" onClick={() => {}} variant="secondary" />
        </div>
      </div>
    </div>
  );
};
