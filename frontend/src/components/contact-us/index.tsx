import { useEffect, useState } from "react";
import { Input } from "@components/input";
import { Button } from "@components/button";
import { STATUS } from "src/services/api-types";
import { emailValidation } from "src/services/validation";
import { sendContactUsRequest } from "src/services/api";
import styles from "./index.module.scss";
import ContactUsImg from "./assets/ContactUs.png";
import { RequestStatus } from "@components/request-status";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<STATUS>(STATUS.none);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleSubmitForm = async (event: any) => {
    event.preventDefault();
    const isValidName = name.trim().length > 0;
    const isValidEmail = emailValidation(email);

    if (!isValidName) {
      setErrors((prev) => ({ ...prev, name: "Please, enter your name" }));
    }
    if (!isValidEmail) {
      setErrors((prev) => ({
        ...prev,
        email: "Please, enter your email by pattern: email@email.com",
      }));
    }

    if (isValidName && isValidEmail) {
      const reqData = {
        email,
        fullname: name,
      };

      const status = await sendContactUsRequest(reqData);
      setStatus(status.status);
    }
  };

  useEffect(() => {
    if (errors.name.length > 0 && name.trim().length > 0) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  }, [name]);

  useEffect(() => {
    if (errors.email.length > 0 && email.trim().length > 0) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  }, [email]);

  return (
    <article className={styles.contactUs}>
      <div className={styles.contactUs__container}>
        <img src={ContactUsImg.src} alt="Contact us" />
        <div className={styles.contactUs__rightCol}>
          <div className={styles.contactUs__formBox}>
            <h1>Contact Us</h1>
            <form
              className={styles.contactUs__form}
              onSubmit={handleSubmitForm}
            >
              <div className={styles.contactUs__form__inputs}>
                <Input
                  value={name}
                  onChange={setName}
                  placeholder="Full name"
                  errorText={errors.name}
                />
                <Input
                  value={email}
                  onChange={setEmail}
                  placeholder="E-mail"
                  errorText={errors.email}
                />
              </div>
              <RequestStatus setStatus={setStatus} status={status} />
              <div className={styles.contactUs__form__button}>
                <Button
                  disabled={status !== STATUS.none}
                  type="submit"
                  name="Contact Us"
                  onClick={() => {}}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};
