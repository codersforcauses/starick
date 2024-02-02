import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./nav-item";

import styles from "./nav-bar.module.css";

const NavBar = () => {
  // handles hamburger button state
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  // handles hamburger button clicks
  const handleHamburgerClick = () =>
    setHamburgerMenuOpen(hamburgerMenuOpen ? false : true);

  return (
    <div className="flex h-14 items-center justify-between whitespace-nowrap bg-white px-4 text-starick-brown">
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
              className="relative z-10 font-bold lg:pr-6"
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
                  classNames="bg-white lg:p-2 lg:rounded-lg my-2 lg:my-0"
                  link={link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right nav component (help/donate/hamburger buttons) */}
      <div>
        <ul className="flex space-x-2 font-bold lg:space-x-6">
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
    </div>
  );
};

export default NavBar;
