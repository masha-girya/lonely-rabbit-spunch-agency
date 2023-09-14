import { useCallback, useEffect, useState } from "react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { getDataPages } from "src/services/api";
import { IPolicy, Page, PolicyPage, } from "src/services/api-types";
import styles from "./index.module.scss";

const PrivacyPolicy = () => {
  const [policyText, setPolicyText] = useState<IPolicy["body"]>([]);

  const loadData = useCallback(async () => {
    const res = await getDataPages(Page.licensig, ["*"]);
    if (res) {
      setPolicyText(res[0][PolicyPage.body]);
      console.log(res[0][PolicyPage.body])
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const createContent = (body: IPolicy["body"]) => {
    return body.map((item) => {
      switch (item.type) {
        case "h1":
          return <h1 key={item.id}>{item.value}</h1>;
        case "h2":
          return <h2 key={item.id}>{item.value}</h2>;
        case "paragraph":
          return <p key={item.id}>{item.value}</p>;
        default:
          return <p key={item.id}></p>;
      }
    });
  };

  return (
    <>
      <Header />
      <main className={styles.privacy}>
        <article className={styles.privacy__container}>
          <section className={styles.privacy__articleBlock}>
            {createContent(policyText)}
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
