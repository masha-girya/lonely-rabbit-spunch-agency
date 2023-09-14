import { useCallback, useEffect, useState } from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { VacancyCard } from "@components/vacancy-card";
import { VACANCY_MOCK } from "src/constants";
import styles from "./index.module.scss";
import { getDataPages } from "src/services/api";
import { IVacancySinglePage, Page, VacanciesPage } from "src/services/api-types";

const Vacancies = () => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("");
  const [vacancies, setVacancies] = useState<IVacancySinglePage[]>([]);


  const loadData = useCallback(async () => {
    const res = await getDataPages(Page.recruitment, ["*"]);
    if (res) {
      setTitle(res[0][VacanciesPage.banner_title]);
      setText(res[0][VacanciesPage.banner_description]);
    }
  }, []);

  const loadNewsData = useCallback(async () => {
    const res = await getDataPages(Page.recruitmentSingle, ["*"]);

    if (res) {
      setVacancies(res);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadNewsData();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.vacancies}>
        <div className={styles.vacancies__banner}>
          <div className={styles.vacancies__banner__img}>
            <div className={styles.vacancies__banner__img__text}>
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div className={styles.vacancies__listBox}>
          <div className={styles.vacancies__list}>
            {vacancies.map((item) => (
              <VacancyCard key={item.id} vacancy={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Vacancies;
