import styles from "./index.module.scss";
import ContactUsImg from "./assets/ContactUs.png";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { useState } from "react";

export const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <article className={styles.contactUs}>
      <div className={styles.contactUs__container}>
        <img src={ContactUsImg.src} alt="Contact us" />
        <div className={styles.contactUs__formBox}>
          <h1>Contact Us</h1>
          <form className={styles.contactUs__form}>
            <div className={styles.contactUs__form__inputs}>
              <Input
                value={name}
                onChange={setName}
                placeholder="Full name"
              />
              <Input
                value={email}
                onChange={setEmail}
                placeholder="E-mail"
              />
            </div>
            <div className={styles.contactUs__form__button}>
              <Button
                name="Contact Us"
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </article>
  )
}