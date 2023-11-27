import { StaticImageData } from "next/image";

export enum Page {
  home = "home.HomePage",
  news = "news.NewsPage",
  newsSingle = "news.NewsSinglePage",
  about_us = "about_us.AboutUsPage",
  licensig = "licensig.LicensigPage",
  recruitment = "recruitment.RecruitmentPage",
  recruitmentSingle = "recruitment.RecruitmentSinglePage",
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
  footer_banner_title = "footer_banner_title",
  sections = "sections",
}

export enum PolicyPage {
  body = "body",
}

export enum VacanciesPage {
  banner_title = "banner_title",
  banner_description = "banner_description",
}

export enum VacanciesSinglePage {
  date = "date",
  caption = "caption",
  body = "body",
}

export interface ICharacters {
  id: number;
  meta: { type: string };
  description: string;
  name: string;
  carousel_image: StaticImageData | null;
}

export interface INewsSingle {
  id: number;
  meta: any;
  [NewsSinglePage.title]: string;
  [NewsSinglePage.date]: string;
  [NewsSinglePage.caption]: string;
  [NewsSinglePage.main_image]: IImage | null;
  [NewsSinglePage.thumbnail_image]: IImage | null;
  [NewsSinglePage.body]: IBody[];
}

export interface IAboutUs {
  [AboutUsPage.banner_description]: string;
  [AboutUsPage.banner_title]: string;
  [AboutUsPage.sections]: IAboutUsSection;
}

export interface IAboutUsSection {
  image: IImage | null;
  text: string;
  title: string;
  image_position: "RIGHT" | "LEFT";
}

export interface IPolicy {
  body: IBody[];
}

export interface IVacancySinglePage {
  id: number;
  meta: any;
  title: string;
  [VacanciesSinglePage.date]: string;
  [VacanciesSinglePage.caption]: string;
  [VacanciesSinglePage.body]: IBody[];
}

export interface IBody {
  id?: string;
  type: "h1" | "h2" | "paragraph" | "image";
  value: string | IBodyImage;
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

export interface IVacancyRequest {
  email: string;
  fullname: string;
  cover_letter: string;
  vacancy_page?: string;
}

export interface IContactUsRequest {
  email: string;
  fullname: string;
}

export enum STATUS {
  success = "success",
  failed = "failed",
  none = "none",
}
