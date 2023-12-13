import { Inter } from "next/font/google";

import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1 className="bg-red-500">Hello!</h1>
      </div>
      <Footer></Footer>
    </>
  );
}
