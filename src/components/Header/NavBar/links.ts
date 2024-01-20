import { NavBarItem } from "./types";

export const primaryNav: Array<NavBarItem> = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/what-is-domestic-violence",
    label: "What is Domestic Violence"
  },
  {
    href: "/services",
    label: "Our Services",
    submenu: [
      {
        href: "/core-services",
        label: "Core Services"
      },
      {
        href: "/other-services",
        label: "Other Services"
      }
    ]
  },
  {
    href: "/about-us",
    label: "About Us",
    submenu: [
      {
        href: "/stories",
        label: "Our Stories"
      },
      {
        href: "/contact",
        label: "Contact Us"
      },
      {
        href: "/jobs",
        label: "Job Opportunities"
      },
      {
        href: "/people",
        label: "Our People"
      },
      {
        href: "/support",
        label: "Support Us"
      }
    ]
  },
  {
    href: "/support",
    label: "Support Us"
  },
  {
    href: "/chat",
    label: "Chat"
  }
];
