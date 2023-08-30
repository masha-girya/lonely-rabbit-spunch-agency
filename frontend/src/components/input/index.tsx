import { TransitionWrapper } from "@components/transition-wrapper";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { useDevice } from "src/hooks/useDevice";
import { Lang } from "src/hooks/useLang";
import styles from "./index.module.scss";

interface IInput {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  errorText?: string;
  type?: string;
}

export const Input: React.FC<IInput> = (props) => {
  const { value, placeholder, onChange, errorText, type = "text" } = props;
  const { isMobile } = useDevice();
  const router = useRouter();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = useCallback((event: any) => {
    onChange(event.target.value);
  }, []);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight + 2;
      const emptyHeight = router.locale === Lang.ua ? "52px" : "53px";

      textAreaRef.current.style.height =
        value.length > 0 ? scrollHeight + "px" : emptyHeight;
    }
  }, [textAreaRef, value]);

  return (
    <div>
      {type === "text" && (
        <input
          name={placeholder}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={styles.input}
        />
      )}
      {type === "textarea" && (
        <textarea
          ref={textAreaRef}
          className={classNames(styles.input, styles.input__message)}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          rows={1}
        />
      )}
      <TransitionWrapper inCondition={errorText !== undefined && errorText.length > 0}>
        <p className={styles.error}>{errorText}</p>
      </TransitionWrapper>
    </div>
  );
};
