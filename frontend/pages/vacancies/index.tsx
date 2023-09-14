import { useState } from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { VacancyCard } from "@components/vacancy-card";
import { VACANCY_MOCK } from "src/constants";
import styles from "./index.module.scss";

const Vacancies = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus."
  );
  const [vacancies, setVacancies] = useState(
    Array(7)
      .fill(VACANCY_MOCK)
      .map((item, i) => ({ ...item, slug: `${item.slug}-${i}` }))
  );

  return (
    <>
      <Header />
      <main className={styles.vacancies}>
        <div className={styles.vacancies__banner}>
          <div className={styles.vacancies__banner__img}>
            <div className={styles.vacancies__banner__img__text}>
              <h1>Careers</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div className={styles.vacancies__listBox}>
          <div className={styles.vacancies__list}>
            {vacancies.map((item) => (
              <VacancyCard key={item.slug} vacancy={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Vacancies;
