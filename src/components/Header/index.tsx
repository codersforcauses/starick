import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MessengerChat from "./messengerembed/messengerembed";

export default function Header() {
  return(
    <header>
      <NavBar />
      <SearchBar prompt="" />
      <MessengerChat shouldInitializeEmbed={false} />
    </header>
  )
}
