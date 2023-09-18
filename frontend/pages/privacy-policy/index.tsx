import { useCallback, useEffect, useState } from "react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { getDataPages } from "src/services/api";
import { IPolicy, Page, PolicyPage, } from "src/services/api-types";
import styles from "./index.module.scss";
import { ContentConstructor } from "@components/content-constructor";
import classNames from "classnames";

const PrivacyPolicy = () => {
  const [policyText, setPolicyText] = useState<IPolicy["body"]>([]);

  const loadData = useCallback(async () => {
    const res = await getDataPages(Page.licensig, ["*"]);
    if (res) {
      setPolicyText(res[0][PolicyPage.body]);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />
      <main className={classNames(styles.privacy, {
        [styles.privacy_noContent]: policyText.length === 0,
      })}>
        <article className={styles.privacy__container}>
          <section className={styles.privacy__articleBlock}>
            <ContentConstructor content={policyText} />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
