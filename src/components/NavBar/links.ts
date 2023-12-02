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
        href: "/service1",
        label: "Service 1"
      },
      {
        href: "/service2",
        label: "Service 2"
      },
      {
        href: "/service3",
        label: "Service 3"
      },
      {
        href: "/service4",
        label: "Service 4"
      },
      {
        href: "/service5",
        label: "Service 5"
      }
    ]
  },
  {
    href: "/about",
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
