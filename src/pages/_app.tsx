import type { AppProps } from "next/app";

import Assistant from "@/components/Assistant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow flex-col bg-starick-white">
        <Assistant />
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
