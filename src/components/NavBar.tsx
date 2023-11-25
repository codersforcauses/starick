import Link from "next/link";
import React from "react";

const linkPaths = [
  { href: "/", label: "Home" },
  { href: "/what-is-domestic-violence", label: "What is Domestic Violence?" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/support-us", label: "Support Us" },
  { href: "/contact", label: "Contact" },
  { href: "/jobs", label: "Job Opportunities at Starick" }
];

const NavBar = () => {
  return (
    <nav className="mb-5 flex h-14 items-center justify-between border-b px-5">
      <ul className="flex space-x-6">
        {linkPaths.map((link) => (
          <Link key={link.href} className="" href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
