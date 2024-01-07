import type { AppProps } from "next/app";

import Assistant from "@/components/ChatBot/assistant";
import Footer from "@/components/Footer";
import MessengerChat from "@/components/messengerembed/messengerembed";
import NavBar from "@/components/NavBar";
import PanicButton from "@/components/PanicButton";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" flex min-h-[100vh] flex-col">
      <header>
        <NavBar />
        <PanicButton />
        <MessengerChat />
      </header>
      <main className="mt-14  flex-grow bg-starick-white">
        <Assistant />
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
