import { useRouter } from "next/router";
import { Button } from "@components/button";
import { VACANCY_MOCK } from "src/constants";
import styles from "./index.module.scss";

interface IVacancyCard {
  vacancy: typeof VACANCY_MOCK;
}

export const VacancyCard: React.FC<IVacancyCard> = (props) => {
  const { vacancy } = props;
  const { title, date, shortText, slug } = vacancy;
  const router = useRouter();

  return (
    <div className={styles.vacancy}>
      <div className={styles.vacancy__text}>
        <h1 className={styles.vacancy__text__title}>{title}</h1>
        <p className={styles.vacancy__text__shortText}>{shortText}</p>
        <p className={styles.vacancy__text__date}>{date}</p>
      </div>
      <div className={styles.vacancy__button}>
        <Button onClick={() => router.push(`vacancies/${slug}`)} name="Apply" />
      </div>
    </div>
  );
};
