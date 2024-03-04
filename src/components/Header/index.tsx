import {ChangeEvent, KeyboardEvent, useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";

import NavBar from "./NavBar";
import PanicButton from "./PanicButton";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter()


  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const handleSearch = () => {

    if (inputValue) return router.push(`/?q=${inputValue}`);

    else return router.push("/")

  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setInputValue(inputValue);
      return handleSearch()
    }
  };


  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-starick-green">
        <div className="flex flex-row flex-wrap justify-end lg:justify-between">
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
          className="m-2 self-end text-center text-starick-white"
        >
          <FiX className="mr-2 inline h-5 w-5 bg-starick-orange" />
          Close
        </button>
        <div className="w-max self-center border-b-2 text-starick-white">
          <input
            placeholder="Search..."
            type="text"
            className="relative inset-0 w-80 bg-transparent placeholder:text-starick-white placeholder:opacity-80  focus:outline-none"
            onChange={searchHandler}
            onKeyDown={handleKeyDown}
          />
          <FiSearch className="inline" />
        </div>
      </div>
    </header>
  );
}
