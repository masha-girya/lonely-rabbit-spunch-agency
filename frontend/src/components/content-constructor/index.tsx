import { useEffect, useState } from "react";
import { API_MEDIA_ENDPOINT } from "src/constants";
import { IBody, IBodyImage } from "src/services/api-types";
import styles from "./index.module.scss";

interface IContentConstructor {
  content: IBody[];
  stylesCustom?: string;
}

export const ContentConstructor: React.FC<IContentConstructor> = (props) => {
  const { content, stylesCustom } = props;
  const [contentToShow, setContentToShow] = useState<JSX.Element[]>([]);

  const createContent = () => {
    return content.map((item, i) => {
      switch (item.type) {
        case "h1":
          return <h1 className={styles.h1} key={item.id ?? i}>{item.value}</h1>;
        case "h2":
          return <h2 className={styles.h2} key={item.id ?? i}>{item.value}</h2>;
        case "paragraph":
          return <p className={styles.p} key={item.id ?? i}>{item.value}</p>;
        case "image":
          const imageValue = item.value as IBodyImage;
          return (
            <div key={item.id ?? i} className={stylesCustom}>
              <img
                src={`${API_MEDIA_ENDPOINT}${imageValue.url}`}
                alt={imageValue.title}
              />
            </div>
          );
        default:
          return <p key={i}></p>;
      }
    });
  };

  useEffect(() => {
    console.log("here")
    setContentToShow(createContent());
  }, [content]);

  return (
    <>
      {contentToShow}
    </>
  )
}