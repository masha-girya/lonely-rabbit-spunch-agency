import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import VideoImg from "./assets/VideoImg.png";
import { PlayIcon } from "@components/icons/PlayIcon";
import { HomePage, Page, getData } from "src/services/api";

export const VideoBlock = () => {
  const [title, setTitle] = useState("Dive into the Unknown");
  const [description, setDescription] = useState(
    'Brave confronting your demons as they awaken in a world of darkness and terror. In the game "Midnight Strikes" by Lonely Rabbit, you\'ll immerse into an uncharted realm, bridging science and fantasy. \n No one will believe you, and nothing can halt the malevolence. \n Escape before midnight—the sole hope. Prepare for an extraordinary journey where your darkest thoughts and fears come to life.'
  );

  const loadData = async () => {
    const res = await getData("pages", Page.home, [HomePage.video_block_title, HomePage.video_block_description]);
    if (res) {
      setTitle(res[HomePage.video_block_title]);
      setDescription(res[HomePage.video_block_description])
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <article className={styles.videoBlock}>
      <div className={styles.videoBlock__container}>
        <h1>{title}</h1>
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
