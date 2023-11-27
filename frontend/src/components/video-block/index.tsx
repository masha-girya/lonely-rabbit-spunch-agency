import { useEffect, useState } from "react";
import { PlayIcon } from "@components/icons/PlayIcon";
import { getDataPages } from "src/services/api";
import { HomePage, Page } from "src/services/api-types";
import VideoImg from "./assets/VideoImg.png";
import styles from "./index.module.scss";

export const VideoBlock = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

  const loadData = async () => {
    const res = await getDataPages(Page.home, [HomePage.video_block_title, HomePage.video_block_description]);
    if (res) {
      setTitle(res[0][HomePage.video_block_title]);
      setDescription(res[0][HomePage.video_block_description]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <article className={styles.videoBlock}>
      <div className={styles.videoBlock__container}>
        <h1>Gameplay</h1>
        <div className={styles.videoBlock__content}>
          <div className={styles.videoBlock__content__text}>
            <p>{description}</p>
          </div>
          <div className={styles.videoBlock__content__video}>
            <img src={VideoImg.src} alt="Video" />
            <div
              className={styles.videoBlock__content__video__playButton}
            >
              <PlayIcon onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
