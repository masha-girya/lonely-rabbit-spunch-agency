import axios from "axios";
import { API_ENDPOINT } from "src/constants";

export enum Page {
  home = "home.HomePage",
}

export enum HomePage {
  first_block_title = "first_block_title",
  second_block_title = "second_block_title",
  video_block_title = "video_block_title",
  video_block_description = "video_block_description",
  characters_carousel = "characters_carousel",
}

export interface ICharacters {
  id: number;
  meta: { type: string };
  description: string;
  name: string;
  carousel_image: ICharactersImage;
}

export interface ICharactersImage {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    download_url: string;
  };
  title: string,
}

export const getDataPages = async (page: Page, fields: string[]) => {
  const formattedFields = fields.join(",");

  try {
    const response = await axios.get(
      `${API_ENDPOINT}/pages/?type=${page}&fields=${formattedFields}`
    );

    return response.data.items[0];
  } catch (err) {
    console.error(err);
  }
};
