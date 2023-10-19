import classNames from "classnames";
import styles from "./index.module.scss";

interface IIntro {
  state: string;
}

export const Intro: React.FC<IIntro> = (props) => {
  const { state } = props;

  return (
    <div className={classNames(styles.intro, `fade-intro-${state}`)}>
      <div className={styles.intro__smoke_1} />
      <div className={styles.intro__smoke_2} />
      <div className={styles.intro__strikeLogo} />
    </div>
  );
};
