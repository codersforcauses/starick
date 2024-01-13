import type { AppProps } from "next/app";

import Assistant from "@/components/ChatBot/assistant";
import NavBar from "@/components/NavBar";
import PanicButton from "@/components/PanicButton";
import MessengerChat from "@/components/messengerembed/messengerembed";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <NavBar />
        <PanicButton />
        <MessengerChat shouldInitialize={false} />
      </header>
      <main className="mt-14 bg-starick-white">
        <Assistant />
        <Component {...pageProps} />
      </main>
    </>
  );
}
