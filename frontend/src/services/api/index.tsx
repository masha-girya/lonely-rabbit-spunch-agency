import axios from "axios";
import { API_ENDPOINT } from "src/constants";

export enum Page {
  home = "home.HomePage",
  news = "news.NewsPage",
  newsSingle = "news.NewsSinglePage",
  about_us = "about_us.AboutUsPage",
}

export enum HomePage {
  first_block_title = "first_block_title",
  second_block_title = "second_block_title",
  video_block_title = "video_block_title",
  video_block_description = "video_block_description",
  characters_carousel = "characters_carousel",
}

export enum NewsPage {
  banner_title = "banner_title",
}

export enum NewsSinglePage {
  title = "title",
  date = "date",
  main_image = "main_image",
  thumbnail_image = "thumbnail_image",
  caption = "caption",
  body = "body",
}

export enum AboutUsPage {
  banner_title = "banner_title",
  banner_description = "banner_description",
  sections = "sections",
}

export interface ICharacters {
  id: number;
  meta: { type: string };
  description: string;
  name: string;
  carousel_image: IImage;
}

export interface INewsSingle {
  id: number;
  meta: any;
  [NewsSinglePage.title]: string;
  [NewsSinglePage.date]: string;
  [NewsSinglePage.caption]: string;
  [NewsSinglePage.main_image]: IImage;
  [NewsSinglePage.thumbnail_image]: IImage;
  [NewsSinglePage.body]: {
    type: "h1" | "h2" | "paragraph" | "image";
    value: string | IBodyImage;
  }[];
}

export interface IAboutUs {
  [AboutUsPage.banner_description]: string;
  [AboutUsPage.banner_title]: string;
  [AboutUsPage.sections]: IAboutUsSection;
}

export interface IAboutUsSection {
  image: IImage;
  text: string;
  image_position: "RIGHT" | "LEFT";
}

export interface IBodyImage {
  url: string;
  width: number;
  height: number;
  title: string;
}

export interface IImage {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    download_url: string;
  };
  title: string;
}

export const getDataPages = async (
  page: Page,
  fields: string[],
  addField?: string
) => {
  const formattedFields = fields.join(",");
  const link = addField
    ? `${API_ENDPOINT}/pages/?type=${page}&fields=${formattedFields}&${addField}`
    : `${API_ENDPOINT}/pages/?type=${page}&fields=${formattedFields}`;

  try {
    const response = await axios.get(link);

    return response.data.items;
  } catch (err) {
    console.error(err);
  }
};

export const getPageBySlug = async (slug: string) => {
  const link = `${API_ENDPOINT}/pages/?slug=${slug}`;
  const link2 = `${API_ENDPOINT}/pages`;

  try {
    const response = await axios.get(link);

    const data = await axios.get(`${link2}/${response.data.items[0].id}`);

    return data.data;
  } catch (err) {
    console.error(err);
  }
};
