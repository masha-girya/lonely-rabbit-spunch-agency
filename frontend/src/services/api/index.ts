import axios from "axios";
import { API_CONTACT_US_ENDPOINT, API_ENDPOINT, API_JOIN_US_ENDPOINT } from "src/constants";
import { IContactUsRequest, IVacancyRequest, Page, STATUS } from "../api-types";

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

export const getPageBySlug = async (slug: string, addField?: string) => {
  const link = addField
    ? `${API_ENDPOINT}/pages/?slug=${slug}&${addField}`
    : `${API_ENDPOINT}/pages/?slug=${slug}`;
  const link2 = `${API_ENDPOINT}/pages`;

  try {
    const response = await axios.get(link);

    const data = await axios.get(`${link2}/${response.data.items[0].id}`);

    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const sendVacancyRequest = async (data: IVacancyRequest) => {
  try {
    await axios.post(`${API_JOIN_US_ENDPOINT}`, data);

    return { status: STATUS.success };
  } catch (error) {
    console.error({error});

    return { status: STATUS.failed };
  }
};

export const sendContactUsRequest = async (data: IContactUsRequest) => {
  try {
    await axios.post(`${API_CONTACT_US_ENDPOINT}`, data);

    return { status: STATUS.success };
  } catch (error) {
    console.error({error});

    return { status: STATUS.failed };
  }
};
