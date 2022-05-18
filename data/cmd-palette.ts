import { IconType } from "react-icons/lib";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMoon } from "react-icons/io5";

import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "src/constants";

type BaseItem = {
  title: string;
};

export type PageItem = BaseItem & {
  href: string;
};

export type SocialItem = BaseItem & {
  href: string;
  icon: IconType;
};

export type ThemeItem = BaseItem & {
  id: "theme";
  icon: IconType;
};

export type SearchItemsType = {
  pages: PageItem[];
  social: SocialItem[];
  theme: ThemeItem[];
};

export const searchItems: SearchItemsType = {
  pages: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Colophon",
      href: "/colophon",
    },

    {
      title: "Uses",
      href: "/uses",
    },
    {
      title: "Bookmarks",
      href: "/bookmarks",
    },
  ],
  social: [
    {
      title: "GitHub",
      icon: SiGithub,
      href: GITHUB_PROFILE,
    },
    {
      title: "LinkedIn",
      icon: SiLinkedin,
      href: LINKEDIN_PROFILE,
    },
  ],
  theme: [
    {
      id: "theme",
      title: "Change theme",
      icon: IoMoon,
    },
  ],
};
