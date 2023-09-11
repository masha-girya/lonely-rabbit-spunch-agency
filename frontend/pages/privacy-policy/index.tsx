import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { useState } from "react";
import { PRIVACY_POLICY } from "src/constants";
import styles from "./index.module.scss";

const PrivacyPolicy = () => {
  const [privacyText, setPrivacyText] = useState(PRIVACY_POLICY);

  return (
    <>
      <Header />
      <main className={styles.privacy}>
        <article className={styles.privacy__container}>
          <div className={styles.privacy__articleBlock}>
            {privacyText.map((item, i) => (
              <section key={i} className={styles.privacy__article}>
                <h1>{item.title}</h1>
                <div className={styles.privacy__article__textBlock}>
                  {item.text.map((text, n) => (
                    <p key={n}>{text}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
