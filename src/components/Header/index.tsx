import NavBar from "./NavBar";
import SearchBar from "./NavBar/SearchBar";
import PanicButton from "./PanicButton";
import MessengerChat from "../MessengerChat";

export default function Header() {
  return (
    <header>
      <nav className="bg-starick-green">
        <div className="flex flex-row justify-between">
          <PanicButton />
          <div className="flex flex-row items-center gap-1 text-starick-white">
            <SearchBar prompt="" />
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
