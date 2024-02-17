import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";

import NavBar from "./NavBar";
import PanicButton from "./PanicButton";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-starick-green">
        <div className="flex flex-row flex-wrap justify-between">
          <PanicButton />
          <div className="mx-5 flex flex-row content-center items-center gap-5 text-starick-white">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <FiSearch title="Search" className="h-10" />
            </button>
            <Link href="/faq/">FAQ</Link>
            <Link href="/contact/">Contact Us</Link>
            <Link href="/useful-numbers/">Useful Numbers</Link>
            <Link href="/volunteer/">Volunteer Now</Link>
          </div>
        </div>
        <NavBar />
      </nav>

      <div
        role="search"
        className={`${
          searchOpen ? "" : "hidden"
        } fixed bottom-0 left-0 right-0 top-0 flex flex-col gap-y-80 bg-starick-green pt-10`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="self-end text-center text-starick-white m-2"
        >
          <FiX className="inline h-5 w-5 mr-2 bg-starick-orange" />
          Close
        </button>
        <div className="w-max border-b-2 text-starick-white self-center">
          <input
            placeholder="Search..."
            type="text"
            className="relative inset-0 w-80 bg-transparent placeholder:text-starick-white placeholder:opacity-80  focus:outline-none"
          />
          <FiSearch className="inline" />
        </div>
      </div>
    </header>
  );
}
