import React, { useState } from "react";
import Link from "next/link";

import Expand from "./icons/expand";
import { NavBarItem } from "./types";

type Props = {
  link: NavBarItem;
  classNames?: string;
};

const NavItem = ({ link, classNames }: Props) => {
  // handles a nav item state (hovered/clicked)
  const [activated, setActivated] = useState(false);

  return (
    // root div handles mouse in and out events
    <div
      className="relative"
      onMouseEnter={() => setActivated(true)}
      onMouseLeave={() => setActivated(false)}
    >
      {/* button handles click action */}
      <button
        className={`${classNames} my-0.5 transition hover:brightness-90 hover:filter`}
      >
        {link.submenu ? link.label : <Link href={link.href}>{link.label}</Link>}
        {link.submenu && <Expand />}
      </button>
      {/* handles added submenu links if they exist */}
      {link.submenu && (
        <ul
          className={`${
            activated ? "" : "hidden"
          } w-max bg-white lg:absolute lg:divide-y lg:divide-gray-200 lg:shadow-md`}
        >
          {link.submenu.map((sublink) => (
            <li key={sublink.href}>
              <div className="px-2 py-0.5 text-center hover:bg-starick-olive lg:py-0.5">
                <Link href={sublink.href}>{sublink.label}</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
