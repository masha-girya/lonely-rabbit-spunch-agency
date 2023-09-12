import axios from "axios";
import { API_ENDPOINT } from "src/constants";

export enum Page {
  home = "home.HomePage",
  news = "news.NewsPage",
  newsSingle = "news.NewsSinglePage",
}

export enum HomePage {
  first_block_title = "first_block_title",
  second_block_title = "second_block_title",
  video_block_title = "video_block_title",
  video_block_description = "video_block_description",
  characters_carousel = "characters_carousel",
}

export enum NewsPage {
  title = "title",
}

export enum NewsSinglePage {
  title = "title",
  date = "date",
  main_image = "main_image",
  thumbnail_image = "thumbnail_image",
  caption = "caption",
  body = "body",
}

export interface ICharacters {
  id: number;
  meta: { type: string };
  description: string;
  name: string;
  carousel_image: ICharactersImage;
}

export interface INewsSingle {
  id: number;
  meta: any;
  title: string;
  date: string;
  caption: string;
  main_image: ICharactersImage;
  thumbnail_image: ICharactersImage;
  body: {
    type: "h1" | "h2" | "paragraph" | "image";
    value: string | IImage;
  };
}

interface IImage {
  url: string;
  width: number;
  height: number;
  title: string;
}

export interface ICharactersImage {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    download_url: string;
  };
  title: string;
}

export const getDataPages = async (page: Page, fields: string[]) => {
  const formattedFields = fields.join(",");

  try {
    const response = await axios.get(
      `${API_ENDPOINT}/pages/?type=${page}&fields=${formattedFields}`
    );

    return response.data.items;
  } catch (err) {
    console.error(err);
  }
};
