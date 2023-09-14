import axios from "axios";
import { API_ENDPOINT } from "src/constants";
import { Page } from "../api-types";

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
