import { NavBarItem } from "./types";

export const primaryNav: Array<NavBarItem> = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/what-is-domestic-violence",
    label: "What is Domestic Violence?"
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
    href: "/about",
    label: "About Us",
    submenu: [
      {
        href: "/about",
        label: "About Starick"
      },
      {
        href: "/people",
        label: "Our People"
      },
      {
        href: "/supporters",
        label: "Our Supporters"
      },
      {
        href: "/stories",
        label: "Our Stories"
      },
      {
        href: "/publications",
        label: "Our Publications"
      }
    ]
  },
  {
    href: "/support",
    label: "Support Us",
    submenu: [
      {
        href: "/donations",
        label: "Donations"
      },
      {
        href: "/op-shop",
        label: "Op Shop"
      }
    ]
  },
  {
    href: "/faq",
    label: "FAQ"
  }
];
