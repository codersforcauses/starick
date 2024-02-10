import Link from "next/link";
import { FiSearch } from "react-icons/fi";

import NavBar from "./NavBar";
import PanicButton from "./PanicButton";
import MessengerChat from "../MessengerChat";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-starick-green">
        <div className="flex flex-row justify-between">
          <PanicButton />
          <div className="mx-5 flex flex-row content-center items-center gap-5 text-starick-white">
            <button>
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

      <MessengerChat shouldInitializeEmbed={false} />
    </header>
  );
}
