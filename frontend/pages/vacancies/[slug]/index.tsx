import { Header } from "@components/header";
import styles from "./index.module.scss";
import { Footer } from "@components/footer";
import { VACANCY_MOCK } from "src/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@components/button";
import { Modal } from "@components/modal";
import { VacancyApplyModal } from "@components/modals-ui/vacancy-apply";

const VacancyInner = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [vacancy, setVacancy] = useState<null | typeof VACANCY_MOCK>(
    VACANCY_MOCK
  );

  const handleOpen = (isOpen: boolean) => {
    setIsOpenModal(isOpen);

    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }

  return (
    <>
      <Header />
      <Modal
        isOpen={isOpenModal}
        isOpenCallback={handleOpen}
        children={<VacancyApplyModal setIsModalOpen={handleOpen} />}
      />
      <main className={styles.vacancyInner}>
        {vacancy && (
          <article className={styles.vacancyInner__content}>
            <h1 className={styles.vacancyInner__content__title}>{vacancy.title}</h1>
            <p className={styles.vacancyInner__content__date}>{vacancy.date}</p>
            <p className={styles.vacancyInner__content__desc}>{vacancy.description}</p>
            <div className={styles.vacancyInner__content__button}>
              <Button name="Apply" onClick={() => handleOpen(true)} />
            </div>
            <h2 className={styles.vacancyInner__content__aboutTitle}>{vacancy.about.title}</h2>
            <div className={styles.vacancyInner__content__textBox}>
              {vacancy.about.text.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
};

export default VacancyInner;
