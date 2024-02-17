import { useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

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
        } fixed bottom-0 left-0 right-0 top-0 flex items-center justify-around bg-starick-green`}
      >
        <input
          placeholder="Search..."
          type="search"
          className="border-b-2 bg-transparent text-starick-white focus:outline-none"
        />
        <button
          onClick={() => setSearchOpen(false)}
          className="text-starick-white"
        >
          Close
        </button>
      </div>
    </header>
  );
}
