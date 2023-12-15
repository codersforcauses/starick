import type { AppProps } from "next/app";

import Assistant from "@/components/ChatBot/assistant";
import NavBar from "@/components/NavBar";
import PanicButton from "@/components/PanicButton";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <NavBar />
        <PanicButton />
      </header>
      <main className="mt-14">
        <Assistant />
        <Component {...pageProps} />
      </main>
    </>
  );
}
