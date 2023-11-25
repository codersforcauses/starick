import { primaryNav, secondaryNav } from "./links";
import NavItem from "./NavItem";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="mb-5 flex h-14 items-center justify-between border-b px-5">
      <div>
        <ul className="flex space-x-6">
          <Link href="/">
            <h2 className="font-bold">Starick Logo</h2>
          </Link>
          {primaryNav.map((link, i) => (
            <NavItem
              key={i}
              href={link.href}
              label={link.label}
              submenu={link.submenu}
            />
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-6 font-bold">
          {secondaryNav.map((link, i) => (
            <NavItem key={i} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
