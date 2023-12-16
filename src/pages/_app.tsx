import "@/styles/globals.css";
import type { AppProps } from "next/app";

import NavBar from "@/components/NavBar";

import PanicButton from "@/components/PanicButton";

import MessengerChat from "@/components/messengerembed/messengerembed"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <NavBar />
        <PanicButton />
        <MessengerChat />
      </header>
      <main className="mt-14 bg-[--starick-white]">
        <Component {...pageProps} />
      </main>
    </>
  );
}
