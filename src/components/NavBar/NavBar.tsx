import { primaryNav, secondaryNav } from "./links";
import NavItem from "./NavItem";
import Link from "next/link";
import styles from "./NavBar.module.css";
import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(menuOpen ? false : true);

  return (
    <nav className="relative flex h-14 items-center justify-between border-b px-6">
      <div className="flex">
        <div>
          <Link href="/">
            <h2 className="pr-6 font-bold">Starick Logo</h2>
          </Link>
        </div>
        <div
          className={`${
            menuOpen ? styles.responsiveContainer : styles.hidden
          } md:block`}
        >
          <ul className={`flex md:space-x-6 ${styles.responsiveList}`}>
            {primaryNav.map((link, i) => (
              <li key={i}>
                <NavItem
                  href={link.href}
                  label={link.label}
                  submenu={link.submenu}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex">
        <ul className="flex space-x-6 font-bold">
          {secondaryNav.map((link, i) => (
            <li key={i}>
              <NavItem href={link.href} label={link.label} />
            </li>
          ))}
          <li className="z-10 md:hidden">
            <button onClick={handleMenuClick}>hamburger menu</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
