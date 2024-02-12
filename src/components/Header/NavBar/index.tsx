import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./nav-item";

export default function NavBar() {
  // handles hamburger button state
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

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
          className={`flex items-center justify-center lg:visible lg:static lg:block lg:h-full lg:w-full ${
            hamburgerMenuOpen
              ? "fixed bottom-0 left-0 right-0 top-0 h-full bg-white"
              : "invisible"
          }`}
        >
          <ul className="ml-20 flex w-full flex-col divide-starick-olive lg:ml-0 lg:flex-row lg:divide-x-2">
            {primaryNav.map((link) => (
              <NavItem link={link} key={link.href} />
            ))}
          </ul>
        </div>
      </div>

      {/* Right nav component (help/donate/hamburger buttons) */}
      {/* Hamburger button */}
      <button
        onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
        className="lg:hidden"
      >
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={
            hamburgerMenuOpen
              ? { transform: "translate(0, 8px) rotate(-45deg)" }
              : {}
          }
        ></div>
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={hamburgerMenuOpen ? { transform: "opacity: 0;" } : {}}
        ></div>
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={
            hamburgerMenuOpen
              ? { transform: "translate(0, -8px) rotate(45deg)" }
              : {}
          }
        ></div>
      </button>
    </div>
  );
}
