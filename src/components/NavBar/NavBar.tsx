import React, { useState } from "react";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./NavItem";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(menuOpen ? false : true);

  return (
    <nav className="relative flex h-14 items-center justify-between px-2 md:px-6">
      <div className="flex basis-0 items-center md:basis-auto">
        <div>
          <Link href="/">
            <h2 className="font-bold md:pr-6">Starick Logo</h2>
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
                <NavItem classNames="p-2 bg-white rounded-lg" link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex">
        <ul className="flex space-x-2 font-thin md:space-x-6 md:font-bold">
          <li>
            <NavItem
              classNames="bg-[--starick-orange] text-[--starick-white] p-1 md:p-2 rounded-lg"
              link={{ href: "/help", label: "Seek Help" }}
            />
          </li>
          <li>
            <NavItem
              classNames="bg-[--starick-green] text-[--starick-white] p-1 md:p-2 rounded-lg"
              link={{ href: "/donate", label: "Donate" }}
            />
          </li>
          <li className="z-10 md:hidden">
            <button className="text-xs" onClick={handleMenuClick}>
              hamburger
              <br />
              menu
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
