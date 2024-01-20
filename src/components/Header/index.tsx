import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MessengerChat from "../MessengerChat";

export default function Header() {
  return(
    <header>
      <NavBar />
      <SearchBar prompt="" />
      <MessengerChat shouldInitializeEmbed={false} />
    </header>
  )
}
