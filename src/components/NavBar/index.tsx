import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./nav-item";

import Staricklogo from "~/icons/starick-logo.svg";

import styles from "./nav-bar.module.css";

const NavBar = () => {
  // handles hamburger button state
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  // handles hamburger button clicks
  const handleHamburgerClick = () =>
    setHamburgerMenuOpen(hamburgerMenuOpen ? false : true);

  return (

    <nav className="fixed left-0 right-0 top-10 z-10 flex h-14 items-center justify-between whitespace-nowrap bg-starick-green px-4 text-white">

      {/* Left nav container (logo and links) */}
      <div className="justify-left flex basis-auto items-center">
        {/* Header container */}
        <div className="relative">
          <Link href="/">
            <Image
              src={Staricklogo}
              alt="starick logo"
              width="0"
              height="0"

              className="justify-left mx-0 h-28 w-1/3 drop-shadow-md"

            />
          </Link>
        </div>
        {/* Primary nav link container */}
        <div
          className={`${
            hamburgerMenuOpen ? styles.responsiveContainer : styles.hidden
          } lg:block`}
        >
          <ul className={`flex lg:space-x-2 ${styles.responsiveList}`}>
            {primaryNav.map((link) => (
              <li key={link.href}>
                <NavItem
                  classNames="bg-starick-green lg:p-2 lg:rounded-lg my-2 lg:my-0"
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
        <ul className="flex space-x-2 font-bold lg:space-x-6">
          <li
            className={`${
              hamburgerMenuOpen ? "" : "hidden"
            } fixed bottom-5 left-20 lg:static lg:block`}
          >
            <NavItem
              classNames="bg-starick-orange text-starick-white p-2 rounded-lg"
              link={{ href: "/help", label: "Seek Help" }}
            />
          </li>
          {/* Donate button */}
          <li
            className={`${
              hamburgerMenuOpen ? "" : "hidden"
            } fixed bottom-5 right-20 lg:static lg:block`}
          >
            <NavItem
              classNames="bg-starick-green text-starick-white p-2 rounded-lg"
              link={{ href: "/donate", label: "Donate" }}
            />
          </li>
          {/* Hamburger button */}
          <li className="z-10 flex lg:hidden">
            <button onClick={handleHamburgerClick}>
              <div
                className={`${
                  hamburgerMenuOpen ? styles.responsiveHamburgerTop : ""
                } my-1 h-1 w-7 bg-starick-green transition duration-300`}
              ></div>
              <div
                className={`${
                  hamburgerMenuOpen ? styles.responsiveHamburgerMiddle : ""
                } my-1 h-1 w-7 bg-starick-green transition duration-300`}
              ></div>
              <div
                className={`${
                  hamburgerMenuOpen ? styles.responsiveHamburgerBottom : ""
                } my-1 h-1 w-7 bg-starick-green transition duration-300`}
              ></div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
