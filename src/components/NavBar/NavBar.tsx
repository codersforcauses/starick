import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./NavItem";

import styles from "./NavBar.module.css";

const NavBar = () => {
  // handles hamburger button state
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  // handles hamburger button clicks
  const handleHamburgerClick = () =>
    setHamburgerMenuOpen(hamburgerMenuOpen ? false : true);

  return (
    <nav className="fixed left-0 right-0 top-0 flex h-14 items-center justify-between px-4 md:static md:text-[1vw]">
      {/* Left nav container (logo and links) */}
      <div className="flex basis-auto items-center justify-center">
        {/* Header container */}
        <div className="relative">
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
        {/* Primary nav link container */}
        <div
          className={`${
            hamburgerMenuOpen ? styles.responsiveContainer : styles.hidden
          } md:block`}
        >
          <ul className={`flex md:space-x-4 ${styles.responsiveList}`}>
            {primaryNav.map((link, i) => (
              <li key={i}>
                <NavItem
                  classNames="bg-white md:p-2 md:rounded-lg my-2 md:my-0"
                  link={link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right nav component (help/donate/hamburger buttons) */}
      <div>
        {/* Help button */}
        <ul className="flex space-x-2 font-bold md:space-x-6">
          <li
            className={`${
              hamburgerMenuOpen ? "" : "hidden"
            } fixed bottom-10 left-20 md:static md:block`}
          >
            <NavItem
              classNames="bg-[--starick-orange] text-[--starick-white] p-2 rounded-lg"
              link={{ href: "/help", label: "Seek Help" }}
            />
          </li>
          {/* Donate button */}
          <li
            className={`${
              hamburgerMenuOpen ? "" : "hidden"
            } fixed bottom-10 right-20 md:static md:block`}
          >
            <NavItem
              classNames="bg-[--starick-green] text-[--starick-white] p-2 rounded-lg"
              link={{ href: "/donate", label: "Donate" }}
            />
          </li>
          {/* Hamburger button */}
          <li className="z-10 flex md:hidden">
            <button onClick={handleHamburgerClick}>
              <div
                className={`${
                  hamburgerMenuOpen ? styles.responsiveHamburgerTop : ""
                } my-1 h-1 w-7 bg-[--starick-green] transition duration-300`}
              ></div>
              <div
                className={`${
                  hamburgerMenuOpen ? styles.responsiveHamburgerMiddle : ""
                } my-1 h-1 w-7 bg-[--starick-green] transition duration-300`}
              ></div>
              <div
                className={`${
                  hamburgerMenuOpen ? styles.responsiveHamburgerBottom : ""
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
