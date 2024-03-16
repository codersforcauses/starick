import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidChevronRightSquare } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

import { NavBarItem } from "./types";

import AboriginalFlag from "~/images/aboriginal_flags/aboriginal-flag-150x150.png";

type Props = {
  link: NavBarItem;
};

const NavItem = ({ link }: Props) => {
  // handles a nav item state (hovered/clicked)
  const [activated, setActivated] = useState<boolean>(false);
  const [timeId, setTimeId] = useState<number>(0);
  const enterHandler = () => {
    window.clearTimeout(timeId);
    const id: number = window.setTimeout(() => {
      setActivated(true);
    }, 150);
    setTimeId(id);
  };
  const leaveHandler = () => {
    window.clearTimeout(timeId);
    const id: number = window.setTimeout(() => {
      setActivated(false);
    }, 150);
    setTimeId(id);
  };

  return (
    // root div handles mouse in and out events
    <>
      <li
        onMouseEnter={() => enterHandler()}
        onMouseLeave={() => leaveHandler()}
        className={`relative lg:flex lg:grow items-center justify-center before:h-1  hover:before:block lg:h-full 
        lg:before:absolute lg:before:right-0 lg:before:top-3 lg:before:hidden lg:before:w-full lg:before:bg-starick-green lg:before:content-[''] `}
      >
        {/* button handles click action */}

        <Link
          href={link.href}
          className=" relative flex h-full before:absolute before:-left-5 before:top-[36%] before:h-5 before:w-1 before:bg-starick-olive  before:content-['']"
        >
          <button className="h-full items-center justify-center">
            {link.label}
            {link.submenu && <FiChevronDown className="inline" />}
          </button>
        </Link>

        {/* handles added submenu links if they exist */}
      </li>
      {link.submenu && (
        <ul
          onMouseEnter={() => enterHandler()}
          onMouseLeave={() => leaveHandler()}
          className={`${
            activated ? "" : "hidden"
          } w-screen border-t-2 border-starick-olive bg-white  lg:absolute  lg:-right-4 lg:top-16 lg:shadow-md 
          lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:w-full lg:before:content-[''] 
          
          `}
        >
          <div
            className={`lg:grid lg:grid-cols-${
              link.submenu.length > 3 ? "3" : "2"
            } gap-3 lg:py-4 lg:ml-8 lg:px-12`}
          >
            {link.submenu.map((sublink) => (
              <li
                className="lg:relative lg:transition-colors lg:p-2 lg:before:absolute lg:before:-left-0 before:top-4 before:h-16 before:w-0.5 lg:before:bg-starick-olive before:content-[''] hover:bg-starick-olive before:hover:hidden "
                key={sublink.href}
              >
                <Link
                  href={sublink.href}
                  className="relative  lg:h-20  lg:pl-3.5  text-starick-black  lg:flex lg:items-center lg:py-0.5"
                >
                  <Image
                    src={AboriginalFlag}
                    alt="Aboriginal Flag"
                    width={40}
                    height={40}
                    className="lg:mx-3 hidden lg:block "
                  />
                  <span className="text-sm ">{sublink.label}</span>
                  <BiSolidChevronRightSquare className=" hidden lg:block ml-4 shrink-0 text-2xl text-starick-green" />
                </Link>
              </li>
            ))}
          </div>
        </ul>
      )}
    </>
  );
};

export default NavItem;
