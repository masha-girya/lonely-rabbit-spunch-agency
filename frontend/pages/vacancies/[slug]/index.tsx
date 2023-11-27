import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Button } from "@components/button";
import { Modal } from "@components/modal";
import { VacancyApplyModal } from "@components/modals-ui/vacancy-apply";
import { IVacancySinglePage, Page } from "src/services/api-types";
import { getPageBySlug } from "src/services/api";
import styles from "./index.module.scss";
import { ContentConstructor } from "@components/content-constructor";
import { VACANCY_MOCK } from "src/constants";

const VacancyInner = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [vacancy, setVacancy] = useState(VACANCY_MOCK);

  const loadData = useCallback(async () => {
    if (typeof slug === "string") {
      const res = await getPageBySlug(slug, `type=${Page.recruitmentSingle}`);

      if (res) {
        setVacancy(res);
      }
    }
  }, [slug]);

  useEffect(() => {
    loadData();
  }, [slug]);

  return (
    <>
      <Header />
      <Modal
        isOpen={isOpenModal}
        isOpenCallback={setIsOpenModal}
        children={<VacancyApplyModal setIsModalOpen={setIsOpenModal} />}
      />
      <main className={styles.vacancyInner}>
        {vacancy && (
          <article className={styles.vacancyInner__content}>
            <h1 className={styles.vacancyInner__content__title}>
              {vacancy.title}
            </h1>
            <p className={styles.vacancyInner__content__date}>
              {vacancy.date.split("-").reverse().join("/")}
            </p>
            <p className={styles.vacancyInner__content__desc}>
              {vacancy.caption}
            </p>
            <div className={styles.vacancyInner__content__button}>
              <Button name="Apply" onClick={() => setIsOpenModal(true)} />
            </div>
            <div className={styles.vacancyInner__content__textBox}>
              <ContentConstructor
                content={vacancy.body}
                stylesCustom={styles.vacancyInner__content__textBox__imgBox}
              />
            </div>
          </article>
        )}
      </main>
      {vacancy && <Footer />}
    </>
  );
};

export default VacancyInner;
