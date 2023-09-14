import { FacebookIcon } from "@components/icons/FacebookIcon";
import { InstaIcon } from "@components/icons/IntaIcon";
import { TwitchIcon } from "@components/icons/TwitchIcon";
import { YoutubeIcon } from "@components/icons/YoutubeIcon";
import Banner1 from "@components/banner/assets/Banner1.png";
import Banner2 from "@components/banner/assets/Banner2.png";
import Banner3 from "@components/banner/assets/Banner3.png";
import Banner4 from "@components/banner/assets/Banner4.png";
import Banner5 from "@components/banner/assets/Banner5.png";

export const API_ENDPOINT = "http://api-lonely-rabbit.spunch.agency/api/v2";
export const API_MEDIA_ENDPOINT = "http://api-lonely-rabbit.spunch.agency";

export const NAV = [
  { title: "Midnight Strikes", link: "/" },
  { title: "News", link: "/news" },
  { title: "About Us", link: "/about-us" },
  { title: "Recruitment", link: "/vacancies" },
];

export const NAV_FOOTER = [
  ...NAV,
  {
    title: "Contact Us",
    link: "",
  },
];

export const SOCIALS = [
  { title: "Twitch", Icon: <TwitchIcon />, link: "" },
  { title: "Instagram", Icon: <InstaIcon />, link: "" },
  { title: "Facebook", Icon: <FacebookIcon />, link: "" },
  { title: "Youtube", Icon: <YoutubeIcon />, link: "" },
];

export const BANNER_IMGS = [
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
];

export const VACANCY_MOCK = {
  slug: "vacancy",
  title: "Lorum ipsum",
  shortText:
    "Lorem ipsum dolor sit amet consectetur. Vulputate montes nullam consectetur leo condimentum.",
  date: "18/08/2023",
  description:
    "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.",
  about: {
    title: "Lorem ipsum dolor sit",
    text: [
      "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.",
      "Sed pellentesque lacus iaculis in non tellus massa imperdiet viverra. Amet suscipit tortor sodales cursus diam. Eget blandit erat turpis netus mauris penatibus in vitae. Pharetra viverra sem praesent pellentesque gravida ut.",
      "Dictum vitae posuere integer purus sit orci sed habitant. Pretium nulla convallis sed et turpis nunc massa porta adipiscing.",
      "Sed pellentesque lacus iaculis in non tellus massa imperdiet viverra. Amet suscipit tortor sodales cursus diam.",
    ],
  },
};