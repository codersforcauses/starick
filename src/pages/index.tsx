import PanicButton from "@/components/panicbutton/panicbutton";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <PanicButton />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
    </>
  );
}
