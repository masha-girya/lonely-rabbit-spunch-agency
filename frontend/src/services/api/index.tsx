import axios from "axios";
import { API_ENDPOINT } from "src/constants";

export type Data = "pages" | "images";
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

export const getData = async (dataType: Data, page: Page, fields: string[]) => {
  const formattedFields = fields.join(",");

  try {
    const response = await axios.get(
      `${API_ENDPOINT}/${dataType}/?type=${page}&fields=${formattedFields}`
    );

    console.log(response);

    return response.data.items;
  } catch (err) {
    console.error(err);
  }
};

export const getTestData = async () => {
  try {
    const res = await axios.get(
      "http://api-lonely-rabbit.spunch.agency/api/v2/pages/?type=home.HomePage&fields=characters_carousel"
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
