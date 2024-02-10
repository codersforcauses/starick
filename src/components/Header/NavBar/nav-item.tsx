import React, { useState } from "react";
import Link from "next/link";

import { NavBarItem } from "./types";
import Expand from "../icons/expand";

type Props = {
  link: NavBarItem;
};

const NavItem = ({ link }: Props) => {
  // handles a nav item state (hovered/clicked)
  const [activated, setActivated] = useState(false);

  return (
    // root div handles mouse in and out events
    <div
      onMouseEnter={() => setActivated(true)}
      onMouseLeave={() => setActivated(false)}
    >
      {/* button handles click action */}
      <button className="my-2 w-max transition hover:brightness-90 hover:filter lg:my-0 lg:rounded-lg lg:p-2">
        <Link href={link.href}>
          {link.label}
          {link.submenu && <Expand />}
        </Link>
      </button>
      {/* handles added submenu links if they exist */}
      {link.submenu && (
        <ul
          className={`${
            activated ? "" : "hidden"
          } w-max border-l-2 border-starick-olive bg-white lg:absolute lg:shadow-md`}
        >
          {link.submenu.map((sublink) => (
            <li key={sublink.href}>
              <Link
                href={sublink.href}
                className="block px-2 py-0.5 hover:bg-starick-olive lg:py-0.5 lg:text-center"
              >
                {sublink.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
