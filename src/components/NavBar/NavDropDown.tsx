import React from "react";
import NavItem from "./NavItem";
import { NavBarItem } from "./types";

type Props = {
  submenu: Array<NavBarItem>;
};

const NavDropDown = ({ submenu }: Props) => {
  return (
    <div className="absolute border bg-white p-2">
      {submenu &&
        submenu.map((link, i) => (
          <NavItem key={i} href={link.href} label={link.label} />
        ))}
    </div>
  );
};

export default NavDropDown;
