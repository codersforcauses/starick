import React, { useState } from "react";
import { NavBarItem } from "./types";
import NavDropDown from "./NavDropDown";
import Link from "next/link";

const NavBarItem = ({ href, label, submenu }: NavBarItem) => {
  const [activated, setActivated] = useState(false);

  const handleMouseEnter = () => setActivated(true);
  const handleMouseLeave = () => setActivated(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href}>{label}</Link>
      {activated && submenu && <NavDropDown submenu={submenu} />}
    </div>
  );
};

export default NavBarItem;
