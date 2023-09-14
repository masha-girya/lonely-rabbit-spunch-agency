import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Button } from "@components/button";
import { Modal } from "@components/modal";
import { VacancyApplyModal } from "@components/modals-ui/vacancy-apply";
import { IBodyImage, IVacancySinglePage, Page } from "src/services/api-types";
import { getPageBySlug } from "src/services/api";
import styles from "./index.module.scss";
import { API_MEDIA_ENDPOINT } from "src/constants";


const VacancyInner = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [vacancy, setVacancy] = useState<null | IVacancySinglePage>(null);

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

  const createContent = (body: IVacancySinglePage["body"]) => {
    return body.map((item, i) => {
      switch (item.type) {
        case "h1":
          return <h1 key={i}>{item.value}</h1>;
        case "h2":
          return <h2 key={i}>{item.value}</h2>;
        case "paragraph":
          return <p key={i}>{item.value}</p>;
        case "image":
          const imageValue = item.value as IBodyImage;
          return (
            <div key={i} className={styles.vacancyInner__content__textBox__imgBox}>
              <img
                src={`${API_MEDIA_ENDPOINT}${imageValue.url}`}
                alt={imageValue.title}
              />
            </div>
          );
        default:
          return <p key={i}></p>;
      }
    });
  };

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
            <h1 className={styles.vacancyInner__content__title}>Title is required</h1>
            <p className={styles.vacancyInner__content__date}>{vacancy.date.split("-").reverse().join("/")}</p>
            <p className={styles.vacancyInner__content__desc}>{vacancy.caption}</p>
            <div className={styles.vacancyInner__content__button}>
              <Button name="Apply" onClick={() => setIsOpenModal(true)} />
            </div>
            <div className={styles.vacancyInner__content__textBox}>
              {createContent(vacancy.body)}
            </div>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
};

export default VacancyInner;
