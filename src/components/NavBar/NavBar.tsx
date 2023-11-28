import React, { useState } from "react";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./NavItem";

import styles from "./NavBar.module.css";

import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(menuOpen ? false : true);

  return (
    <nav className="flex h-14 items-center justify-between px-6">
      <div className="flex basis-auto items-center">
        <div>
          <Link href="/">
            <Image
              src="/placeholder_starick_logo.png"
              alt="Starick Logo"
              width={170}
              height={50}
              className="relative z-10 font-bold md:pr-6"
            />
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
        <ul className="flex space-x-2 font-bold md:space-x-6">
          <li
            className={`${
              menuOpen ? "" : "hidden"
            } absolute bottom-10 left-20 md:static md:block`}
          >
            <NavItem
              classNames="bg-[--starick-orange] text-[--starick-white] p-2 rounded-lg"
              link={{ href: "/help", label: "Seek Help" }}
            />
          </li>
          <li
            className={`${
              menuOpen ? "" : "hidden"
            } absolute bottom-10 right-20 md:static md:block`}
          >
            <NavItem
              classNames="bg-[--starick-green] text-[--starick-white] p-2 rounded-lg"
              link={{ href: "/donate", label: "Donate" }}
            />
          </li>
          <li className="z-10 flex md:hidden">
            <button onClick={handleMenuClick}>
              <div
                className={`${
                  menuOpen ? styles.responsiveHamburgerTop : ""
                } my-1 h-1 w-7 bg-[--starick-green] transition duration-300`}
              ></div>
              <div
                className={`${
                  menuOpen ? styles.responsiveHamburgerMiddle : ""
                } my-1 h-1 w-7 bg-[--starick-green] transition duration-300`}
              ></div>
              <div
                className={`${
                  menuOpen ? styles.responsiveHamburgerBottom : ""
                } my-1 h-1 w-7 bg-[--starick-green] transition duration-300`}
              ></div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
