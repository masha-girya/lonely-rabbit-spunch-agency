import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@components/button";
import { CloseIcon } from "@components/icons/CloseIcon";
import { Input } from "@components/input";
import { RequestStatus } from "@components/request-status";
import { sendVacancyRequest } from "src/services/api";
import { emailValidation } from "src/services/validation";
import { STATUS } from "src/services/api-types";
import styles from "./index.module.scss";
import LogoImg from "@styles/assets/Logo.png";
import ContactUsImg from "./assets/ContactUsImage.png";

interface IVacancyApplyModal {
  setIsModalOpen: (isOpen: boolean) => void;
}

export const VacancyApplyModal: React.FC<IVacancyApplyModal> = (props) => {
  const { setIsModalOpen } = props;
  const router = useRouter();
  const [status, setStatus] = useState<STATUS>(STATUS.none);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    coverLetter: "",
  });

  const handleSubmitForm = async () => {
    const isValidName = name.trim().length > 0;
    const isValidCoverLetter = coverLetter.trim().length > 10;
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
    if (!isValidCoverLetter) {
      setErrors((prev) => ({
        ...prev,
        coverLetter: "Please, write something about your experience",
      }));
    }

    if (isValidName && isValidCoverLetter && isValidEmail) {
      setIsLoading(true);

      const reqData = {
        email,
        fullname: name,
        cover_letter: coverLetter,
        vacancy_page: router.asPath,
      };

      const status = await sendVacancyRequest(reqData);
      setStatus(status.status);
      setIsLoading(false);
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

  useEffect(() => {
    if (errors.coverLetter.length > 0 && coverLetter.trim().length > 0) {
      setErrors((prev) => ({ ...prev, coverLetter: "" }));
    }
  }, [coverLetter]);

  useEffect(() => {
    if (status === STATUS.success) {
      setName("");
      setEmail("");
      setCoverLetter("");
    }
  }, [status]);

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
          <h1>Join our team</h1>
          <h2>Please send request. We will contact you</h2>
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
            <RequestStatus setStatus={setStatus} status={status} />
            <div className={styles.apply__rightCol__button}>
              <Button disabled={isLoading} name="Submit" onClick={handleSubmitForm} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
