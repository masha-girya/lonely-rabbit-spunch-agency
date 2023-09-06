import { Header } from "@components/header";
import styles from "./index.module.scss";
import { useCallback, useState } from "react";
import { Button } from "@components/button";
import { Footer } from "@components/footer";

const Vacancies = () => {
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.")

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
      </main>
      <Footer />
    </>
  );
};

export default Vacancies;
