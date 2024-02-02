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
      <div className="flex items-center justify-center">
        {/* Header container */}
        <Link href="/">
          <Image
            src="/placeholder_starick_logo.png"
            alt="Starick Logo"
            width={170}
            height={50}
            className="font-bold lg:pr-6"
          />
        </Link>
        {/* Primary nav link container */}
        <div
          className={`${
            hamburgerMenuOpen ? styles.responsiveContainer : styles.hidden
          }`}
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
      {/* Hamburger button */}
      <button onClick={handleHamburgerClick} className="lg:hidden">
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={hamburgerMenuOpen ? {transform: "translate(0, 8px) rotate(-45deg)"} : {}}
        ></div>
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={hamburgerMenuOpen ? {transform: "opacity: 0;"} : {}}
        ></div>
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={hamburgerMenuOpen ? {transform: "translate(0, -8px) rotate(45deg)"} : {}}
        ></div>
      </button>
    </div>
  );
};

export default NavBar;
