import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { Button } from "@components/button";
import { CloseIcon } from "@components/icons/CloseIcon";
import ContactUsImg from "./assets/ContactUsImage.png";
import LogoImg from "./assets/Logo.png";
import { Input } from "@components/input";

interface IVacancyApplyModal {
  setIsModalOpen: (isOpen: boolean) => void;
}

export const VacancyApplyModal: React.FC<IVacancyApplyModal> = (props) => {
  const { setIsModalOpen } = props;
  const [title, setTitle] = useState("Lorem ipsum");
  const [subTitle, setSubTitle] = useState("Lorem ipsum");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    coverLetter: "",
  });

  const handleSubmitForm = () => {
    if (name.trim().length === 0) {
      setErrors((prev) => ({ ...prev, name: "Please, enter your name" }));
    }
    if (email.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: "Please, enter your email by pattern: email@email.com",
      }));
    }
    if (coverLetter.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        coverLetter: "Please, write something your experience",
      }));
    }

    if (name.trim().length > 0 && email.trim().length > 0 && coverLetter.trim().length > 0) {
      console.log("request");
    }
  };

  useEffect(() => {
    if(errors.name.length > 0 && name.trim().length > 0) {
      setErrors(prev => ({...prev, name: ""}))
    }
  }, [name, errors]);

  useEffect(() => {
    if(errors.email.length > 0 && email.trim().length > 0) {
      setErrors(prev => ({...prev, email: ""}))
    }
  }, [email, errors]);

  useEffect(() => {
    if(errors.coverLetter.length > 0 && coverLetter.trim().length > 0) {
      setErrors(prev => ({...prev, coverLetter: ""}))
    }
  }, [coverLetter, errors]);

  return (
    <div className={styles.apply}>
      <button
        className={styles.apply__closeBtn}
        type="button"
        onClick={() => setIsModalOpen(false)}
      >
        <CloseIcon />
      </button>
      <div className={styles.apply__container}>
        <div className={styles.apply__leftCol}>
          <img src={ContactUsImg.src} />
        </div>
        <div className={styles.apply__rightCol}>
          <img src={LogoImg.src} />
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <form onSubmit={handleSubmitForm}>
            <Input
              darkMode
              errorText={errors.name}
              value={name}
              placeholder="Full name"
              onChange={setName}
            />
            <Input
              darkMode
              errorText={errors.email}
              value={email}
              placeholder="E-mail"
              onChange={setEmail}
            />
            <Input
              darkMode
              errorText={errors.coverLetter}
              type="textarea"
              value={coverLetter}
              placeholder="Cover letter"
              onChange={setCoverLetter}
            />
            <div className={styles.apply__rightCol__button}>
              <Button name="Submit" onClick={handleSubmitForm} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
