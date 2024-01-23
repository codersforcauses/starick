import NavBar from "./NavBar";
import SearchBar from "./NavBar/SearchBar";
import MessengerChat from "../MessengerChat";
import PanicButton from "./PanicButton";

export default function Header() {
  return (
    <header>
      <nav className="bg-starick-green">
        <div className="flex flex-row">
          <PanicButton />
          <SearchBar prompt="" />
        </div>
        <NavBar />
      </nav>

      <MessengerChat shouldInitializeEmbed={false} />
    </header>
  );
}
