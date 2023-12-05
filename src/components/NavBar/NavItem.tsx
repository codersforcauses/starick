import React, { useState } from "react";
import Link from "next/link";

import { NavBarItem } from "./types";

type Props = {
  link: NavBarItem;
  classNames?: string;
};

const NavItem = ({ link, classNames }: Props) => {
  // handles a nav item state (hovered/clicked)
  const [activated, setActivated] = useState(false);

  // handles mouse proximity or clicks in nav item area
  const handleMouseEnter = () => setActivated(true);
  const handleMouseLeave = () => setActivated(false);
  const handleClick = () => setActivated(activated ? false : true);

  return (
    // root div handles mouse in and out events
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* button handles click action */}
      <button
        className={`${classNames} transition hover:brightness-90 hover:filter`}
        onClick={handleClick}
      >
        {/* Coniditional text rendering depending on submenu existence */}
        {link.submenu ? (
          // unicode chars represent up and down arrows
          link.label + (activated ? " \u25B3" : " \u25BD")
        ) : (
          <Link href={link.href}>{link.label}</Link>
        )}
      </button>
      {/* handles added submenu links if they exist */}
      {link.submenu && (
        <ul
          className={`${
            activated ? "" : "hidden"
          } w-max bg-white md:absolute md:shadow-md`}
        >
          {link.submenu.map((sublink, i) => (
            <>
              <hr className="hidden md:mx-2 md:block md:h-0.5 md:border-none md:bg-gray-100" />
              <li
                key={i}
                className="px-2 py-1 hover:bg-[--starick-olive] md:py-0.5"
              >
                <Link href={sublink.href}>{sublink.label}</Link>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
