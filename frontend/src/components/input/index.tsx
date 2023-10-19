import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import {
  DURATION_FADE_IN,
  DEFAULT_STYLE_FADE_IN,
  TRANS_STYLES_FADE_IN,
} from "src/constants/transition";
import styles from "./index.module.scss";

interface IInput {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  errorText?: string;
  type?: "text" | "textarea";
  darkMode?: boolean;
}

export const Input: React.FC<IInput> = (props) => {
  const {
    value,
    placeholder,
    onChange,
    errorText,
    type = "text",
    darkMode,
  } = props;
  const [focus, setFocus] = useState(false);
  const ref = useRef<null | any>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const transRef = useRef(null);

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
    if (ref.current) {
      ref.current.focus();
    }
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
    handleFocus();
  }, [ref]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight + 2;
      const emptyHeight = "33px";

      textAreaRef.current.style.height =
        value.length > 0 ? scrollHeight + "px" : emptyHeight;
    }
  }, [textAreaRef, value]);

  return (
    <div className={styles.inputContainer}>
      <div
        className={classNames(styles.inputBox, {
          [styles.inputBox_textarea]: type === "textarea",
        })}
      >
        <span
          onClick={focusOnInput}
          className={classNames(styles.inputBox__placeholder, {
            [styles.inputBox__placeholder_onFocus]:
              focus || value.trim().length > 0,
            [styles.inputBox__placeholder_darkMode]: darkMode,
          })}
        >
          {placeholder}
        </span>
        {type === "text" && (
          <input
            ref={ref}
            name={placeholder}
            type={type}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={classNames(styles.inputBox__input, {
              [styles.inputBox__input_darkMode]: darkMode,
            })}
          />
        )}
        {type === "textarea" && (
          <textarea
            ref={textAreaRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={classNames(
              styles.inputBox__input,
              styles.inputBox__textarea,
              {
                [styles.inputBox__input_darkMode]: darkMode,
              }
            )}
            onChange={handleChange}
            value={value}
            rows={1}
          />
        )}
      </div>
      <Transition
        unmountOnExit
        in={errorText !== undefined && errorText.length > 0}
        timeout={DURATION_FADE_IN}
        nodeRef={transRef}
      >
        {(state) => (
          <p
            ref={transRef}
            className={styles.error}
            style={{
              ...DEFAULT_STYLE_FADE_IN,
              ...TRANS_STYLES_FADE_IN[state],
            }}
          >
            {errorText}
          </p>
        )}
      </Transition>
    </div>
  );
};
