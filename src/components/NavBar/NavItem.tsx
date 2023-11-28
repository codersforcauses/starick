import React, { useState } from "react";
import Link from "next/link";

import NavDropDown from "./NavDropDown";
import { NavBarItem } from "./types";

type Props = {
  link: NavBarItem;
  classNames?: string;
};

const NavItem = ({ link, classNames }: Props) => {
  const [activated, setActivated] = useState(false);

  const handleMouseEnter = () => setActivated(true);
  const handleMouseLeave = () => setActivated(false);
  const handleClick = () => setActivated(activated ? false : true);

  return link.submenu ? (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`${classNames} transition hover:brightness-90 hover:filter`}
        onClick={handleClick}
      >
        {link.label + (activated ? " \u25B3" : " \u25BD")}
      </button>
      {activated && (
        <NavDropDown submenu={link.submenu}>
          <button>
            <Link href={link.href}>{link.label}</Link>
          </button>
        </NavDropDown>
      )}
    </div>
  ) : (
    <div>
      <button
        className={`${classNames} transition hover:brightness-90 hover:filter`}
      >
        <Link href={link.href}>{link.label}</Link>
      </button>
    </div>
  );
};

export default NavItem;
