import type { AppProps } from "next/app";

import Assistant from "@/components/ChatBot/assistant";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/messengerembed/messengerembed";
import NavBar from "@/components/NavBar";
import PanicButton from "@/components/PanicButton";
import Search from "@/components/SearchBar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" flex min-h-screen flex-col">
      <header>
        <NavBar />
        <Search prompt="" />
        <PanicButton />
        <MessengerChat shouldInitializeEmbed={false} />
      </header>
      <main className="mt-14 flex flex-grow flex-col bg-starick-white">
        <Assistant />
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
