import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Hello!</h1>
      </main>
    </>
  );
}
