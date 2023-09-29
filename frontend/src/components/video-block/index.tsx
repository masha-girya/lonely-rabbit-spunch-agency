import { useEffect, useState } from "react";
import { PlayIcon } from "@components/icons/PlayIcon";
import { getDataPages } from "src/services/api";
import { HomePage, Page } from "src/services/api-types";
import VideoImg from "./assets/VideoImg.png";
import styles from "./index.module.scss";

export const VideoBlock = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
