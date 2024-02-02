import Search from "./icons/search"
import NavBar from "./NavBar";
import PanicButton from "./PanicButton";
import MessengerChat from "../MessengerChat";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-starick-green">
        <div className="flex flex-row justify-between">
          <PanicButton />
          <div className="flex flex-row items-center gap-1 text-starick-white">
            <button>
              <Search />
            </button>
            <h1>FAQ</h1>
            <h1>Contact Us</h1>
            <h1>Useful Numbers</h1>
            <h1>Volunteer Now</h1>
          </div>
        </div>
        <NavBar />
      </nav>

      <MessengerChat shouldInitializeEmbed={false} />
    </header>
  );
}
