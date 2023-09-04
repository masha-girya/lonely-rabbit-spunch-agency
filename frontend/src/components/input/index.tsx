import classNames from "classnames";
import { useCallback, useRef, useState } from "react";
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
  const [focus, setFocus] = useState(false);
  const ref = useRef<null | any>(null);

  const handleChange = useCallback((event: any) => {
    onChange(event.target.value);
  }, []);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const focusOnInput = useCallback(() => {
    if(ref.current) {
      ref.current.focus();
      handleFocus();
    }
  }, [ref]);

  return (
    <div className={styles.inputBox}>
      {type === "text" && (
        <>
        <span
          onClick={focusOnInput}
          className={classNames(styles.inputBox__placeholder, {
            [styles.inputBox__placeholder_onFocus]: focus || value.trim().length > 0
          })}
        >
          {placeholder}
        </span>
        <input
          ref={ref}
          name={placeholder}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={styles.inputBox__input}
        />
        </>
      )}
      {/* <TransitionWrapper inCondition={errorText !== undefined && errorText.length > 0}>
        <p className={styles.error}>{errorText}</p>
      </TransitionWrapper> */}
    </div>
  );
};
