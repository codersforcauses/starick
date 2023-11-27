import React from "react";

import NavItem from "./NavItem";
import { NavBarItem } from "./types";

type Props = {
  submenu: Array<NavBarItem>;
  children?: React.ReactNode;
};

const NavDropDown = ({ submenu, children }: Props) => {
  return (
    <div className="mx-2 drop-shadow-md md:absolute md:bg-white">
      <ul>
        {children && (
          <li className="px-2 hover:bg-[--starick-olive] md:pt-1">
            {children}
            <hr className="mt-1 md:-mx-2 md:mt-1 md:h-0.5 md:border-none md:bg-gray-100" />
          </li>
        )}
        {submenu &&
          submenu.map((link, i) => (
            <li key={i} className="px-2 hover:bg-[--starick-olive]">
              <NavItem classNames="py-1 md:my-1 md:py-0" link={link} />
              {i < submenu.length - 1 ? (
                <hr className="md:-mx-2 md:h-0.5 md:border-none md:bg-gray-100" />
              ) : null}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavDropDown;
