import React, { useState } from "react";
import { NavBarItem } from "./types";
import NavDropDown from "./NavDropDown";
import Link from "next/link";

const NavItem = ({ href, label, submenu }: NavBarItem) => {
  const [activated, setActivated] = useState(false);

  const handleMouseEnter = () => setActivated(true);
  const handleMouseLeave = () => setActivated(false);
  const handleClick = () => setActivated(activated ? false : true);

  return submenu ? (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button onClick={handleClick}>{label}</button>
      {activated && (
        <NavDropDown submenu={submenu}>
          <Link href={href}>{label}</Link>
        </NavDropDown>
      )}
    </div>
  ) : (
    <div>
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavItem;
