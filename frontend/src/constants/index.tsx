import { FacebookIcon } from "@components/icons/FacebookIcon";
import { InstaIcon } from "@components/icons/IntaIcon";
import { TwitchIcon } from "@components/icons/TwitchIcon";
import { YoutubeIcon } from "@components/icons/YoutubeIcon";
import Banner1 from "@components/banner/assets/Banner1.png";
import Banner2 from "@components/banner/assets/Banner2.png";
import Banner3 from "@components/banner/assets/Banner3.png";
import Banner4 from "@components/banner/assets/Banner4.png";
import Banner5 from "@components/banner/assets/Banner5.png";
import Char3 from "@components/characters/assets/CenterMan.png";
import Char4 from "@components/characters/assets/Rabbit.png";
import Char5 from "@components/characters/assets/Teacher.png";
import Char1 from "@components/characters/assets/Showman.png";
import Char2 from "@components/characters/assets/Man.png";
import { STATUS } from "src/services/api-types";

export const API_ENDPOINT = process.env.NEXT_PUBLIC_BACK_END_ENDPOINT;
export const API_MEDIA_ENDPOINT =
  process.env.NEXT_PUBLIC_BACK_END_MEDIA_ENDPOINT;
export const API_CONTACT_US_ENDPOINT =
  process.env.NEXT_PUBLIC_BACK_END_CONTACT_US_ENDPOINT;
export const API_JOIN_US_ENDPOINT =
  process.env.NEXT_PUBLIC_BACK_END_JOIN_US_ENDPOINT;

export const NAV = [
  { title: "Midnight Strikes", link: "/" },
  { title: "News", link: "/news" },
  { title: "About Us", link: "/about-us" },
  { title: "Recruitment", link: "/vacancies" },
];

export const SOCIALS = [
  { title: "Twitch", Icon: <TwitchIcon />, link: "" },
  { title: "Instagram", Icon: <InstaIcon />, link: "" },
  { title: "Facebook", Icon: <FacebookIcon />, link: "" },
  { title: "Youtube", Icon: <YoutubeIcon />, link: "" },
];

export const BANNER_IMGS = [Banner1, Banner2, Banner3, Banner4, Banner5];

export const VACANCY_MOCK = {
  slug: "vacancy",
  title: "Lorum ipsum",
  meta: { slug: "vacancy-mock" },
  shortText:
    "Lorem ipsum dolor sit amet consectetur. Vulputate montes nullam consectetur leo condimentum.",
  date: "18/08/2023",
  caption:
    "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.",
  body: [
    {
      type: "h1",
      value: "Lorem ipsum dolor sit",
    },
    {
      type: "h2",
      value:
        "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.",
    },
    {
      type: "paragraph",
      value:
        "Sed pellentesque lacus iaculis in non tellus massa imperdiet viverra. Amet suscipit tortor sodales cursus diam. Eget blandit erat turpis netus mauris penatibus in vitae. Pharetra viverra sem praesent pellentesque gravida ut.",
    },
    {
      type: "paragraph",
      value:
        "Dictum vitae posuere integer purus sit orci sed habitant. Pretium nulla convallis sed et turpis nunc massa porta adipiscing.",
    },
    {
      type: "p",
      value:
        "Sed pellentesque lacus iaculis in non tellus massa imperdiet viverra. Amet suscipit tortor sodales cursus diam.",
    },
  ],
};

export const REQUEST_STATUS = {
  [STATUS.failed]: "Request failed, please, check out inputs and try again",
  [STATUS.success]: "Your application has been successfully sent!",
};

export const CHARACTERS_MOCK = [
  {
    id: 0,
    meta: { type: "" },
    description: "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in.",
    name: "CHaracter 1",
    carousel_image: Char1,
  },
  {
    id: 1,
    meta: { type: "" },
    description: "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in.",
    name: "Character 2",
    carousel_image: Char2,
  },
  {
    id: 2,
    meta: { type: "" },
    description: "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in.",
    name: "Character 3",
    carousel_image: Char3,
  },
  {
    id: 3,
    meta: { type: "" },
    description: "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in.",
    name: "Character 4",
    carousel_image: Char4,
  },
  {
    id: 4,
    meta: { type: "" },
    description: "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in.",
    name: "Character 5",
    carousel_image: Char5,
  }
]