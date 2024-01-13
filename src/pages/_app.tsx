import type { AppProps } from "next/app";

import Assistant from "@/components/ChatBot/assistant";
import NavBar from "@/components/NavBar";
import PanicButton from "@/components/PanicButton";
import MessengerChat from "@/components/messengerembed/messengerembed";

import "@/styles/globals.css";
import Search from "@/components/SearchBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <NavBar />
        <Search prompt="" />
        <PanicButton />
        <MessengerChat />
      </header>
      <main className="mt-14 bg-starick-white">
        <Assistant />
        <Component {...pageProps} />
      </main>
    </>
  );
}
