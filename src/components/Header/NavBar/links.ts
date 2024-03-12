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
      },
      {
        href: "/useful-numbers-and-information",
        label: "Useful numbers & information"
      },
      {
        href: "/supporter",
        label: "Our Supporters"
      }
    ]
  },
  {
    href: "https://us20.campaign-archive.com/?u=fd9ee23110367fb6d7afdc749&id=bc2242df48",
    label: "News"
  },
  {
    href: "/op-shop",
    label: "Op Shop"
  },
  {
    href: "/donate",
    label: "Donate"
  }
];
