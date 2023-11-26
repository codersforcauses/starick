import React from "react";
import NavItem from "./NavItem";
import { NavBarItem } from "./types";

type Props = {
  submenu: Array<NavBarItem>;
  children?: React.ReactNode;
};

const NavDropDown = ({ submenu, children }: Props) => {
  return (
    <div className="pb-2 pl-2 md:absolute md:border md:bg-white md:p-2">
      <ul>
        {children && (
          <>
            <li>{children}</li>
            <hr />
          </>
        )}
        {submenu &&
          submenu.map((link, i) => (
            <li key={i}>
              <NavItem href={link.href} label={link.label} />
              {i < submenu.length - 1 ? <hr /> : null}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavDropDown;
