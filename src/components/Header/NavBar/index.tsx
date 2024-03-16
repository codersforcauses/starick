import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { primaryNav } from "./links";
import NavItem from "./nav-item";

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // handles hamburger button state
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <nav className="flex h-16  place-content-between items-center whitespace-nowrap bg-white px-4 text-starick-black">
      {/* Left nav container (logo and links) */}

      {/* Header container below */}
      <div className="flex h-full w-full flex-row place-content-between items-center">
        <Link href="/" className="flex-none">
          <Image
            src="/placeholder_starick_logo.png"
            alt="Starick Logo"
            width={170}
            height={50}
            className="font-bold lg:pr-6 "
          />
        </Link>
        {/* Primary nav link container */}
        <div className="max-w-[900px] grow h-full items-center text-end">
          <div
            className={`flex items-center justify-center lg:visible lg:static lg:block lg:h-full lg:w-full ${
              hamburgerMenuOpen
                ? "fixed bottom-0 left-0 right-0 top-0 h-full bg-white"
                : "hidden"
            }`}
          >
            <ul className=" flex relative h-full w-full flex-col divide-starick-olive  font-semibold lg:flex-row after:bg-starick-olive after:absolute after:w-1 after:h-5 after:top-[36%] after:right-  ">
              {primaryNav.map((link) => (
                <NavItem link={link} key={link.href} />
              ))}
            </ul>
          </div>
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
        />
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={hamburgerMenuOpen ? { transform: "opacity: 0" } : {}}
        />
        <div
          className="my-1 h-1 w-7 bg-starick-green transition duration-300"
          style={
            hamburgerMenuOpen
              ? { transform: "translate(0, -8px) rotate(45deg)" }
              : {}
          }
        />
      </button>
    </nav>
  );
}
