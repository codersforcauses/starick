import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// todo: routes once in place
// todo: styling, icons?

export default function QuickLinks() {
  const linkDetails = [
    {
      name: "Counselling",
      route: "/counselling"
      // icon:
    },
    {
      name: "Support in police stations",
      route: "/police-court-support"
    },
    {
      name: "Refuges",
      route: "/refuges"
    },
    {
      name: "Safe at Home",
      route: "/safe-at-home"
    },
    {
      name: "Transitional housing",
      route: "/transitional-housing"
    }
  ];

  const quickLinks = linkDetails.map((link) => {
    return (
      <Link href={link.route} key={link.name}>
        {link.name}
      </Link>
    );
  });

  return (
    <div className={`flex justify-between ${inter.className}`}>
      {quickLinks}
    </div>
  );
}
