import Panicbutton from "@/components/Panicbutton/Panicbutton";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <header>
      <Panicbutton />
    </header>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="bg-red-500">Hello!</h1>
    </main>
    </>
  );
}
