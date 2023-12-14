import React, { useState } from "react";
import Link from "next/link";

import { NavBarItem } from "./types";

type Props = {
  link: NavBarItem;
  classNames?: string;
  callback: (value: React.SetStateAction<boolean>) => void; // eslint-disable-line no-unused-vars
};

const NavItem = ({ link, classNames, callback }: Props) => {
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
        className={`${classNames} my-0.5 transition hover:brightness-90 hover:filter`}
        onClick={handleClick}
      >
        {/* Coniditional text rendering depending on submenu existence */}
        {link.submenu ? (
          // unicode chars represent up and down arrows
          link.label + (activated ? " \u25B3" : " \u25BD")
        ) : (
          <Link href={link.href} onClick={() => callback(false)}>
            {link.label}
          </Link>
        )}
      </button>
      {/* handles added submenu links if they exist */}
      {link.submenu && (
        <ul
          className={`${
            activated ? "" : "hidden"
          } w-max bg-white lg:absolute lg:shadow-md`}
        >
          {link.submenu.map((sublink) => (
            <li key={sublink.href}>
              <hr className="hidden lg:mx-2 lg:block lg:h-0.5 lg:border-none lg:bg-gray-100" />
              <div className="px-2 py-0.5 hover:bg-[--starick-olive] lg:py-0.5">
                <Link href={sublink.href} onClick={() => callback(false)}>
                  {sublink.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
