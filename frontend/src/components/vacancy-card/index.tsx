import { useRouter } from "next/router";
import { Button } from "@components/button";
import styles from "./index.module.scss";
import { IVacancySinglePage } from "src/services/api-types";

interface IVacancyCard {
  vacancy: IVacancySinglePage;
}

export const VacancyCard: React.FC<IVacancyCard> = (props) => {
  const { vacancy } = props;
  const { caption, date, meta, title } = vacancy;

  return (
    <div className={styles.vacancy}>
      <div className={styles.vacancy__text}>
        <h1 className={styles.vacancy__text__title}>{title}</h1>
        <p className={styles.vacancy__text__shortText}>{caption}</p>
        <p className={styles.vacancy__text__date}>{date.split("-").reverse().join("/")}</p>
      </div>
      <a href={`vacancies/${meta.slug}`} className={styles.vacancy__button}>
        <Button onClick={() => {}} name="Apply" />
      </a>
    </div>
  );
};
